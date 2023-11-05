const Team = require('../models/teamModel');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const { addCreatedTeam, addJoinedTeam, getTeams } = require('./userController');

// Get all team
const searchTeams = async (req, res) => {
    const filter = req.body;
    console.log(filter);
    try {
        const teams = await Team.find(filter);
        if (!teams) {
            throw new Error('Failed to search teams');
        }
        res.status(200).json(teams);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single team
const getTeam = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Team doesn't exist");
        }

        const team = await Team.findById(id, 'teamName teamLeader teamLocation teamStart teamEnd teamCompetition teamDescription teamMember');
        if (!team) {
            throw new Error("Team doesn't exist");
        }

        res.status(200).json({ team });
    } catch (error) {
        res.status(400).json({ error: err.message() });
    }
};

// Get my team
const getMyTeams = async (req, res) => {
    const id = await req.user._id;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("User doesn't exist");
        }

        const { team } = await getTeams(id);
        const { createdTeam } = await team;
        const { joinedTeam } = await team;

        const getCreatedTeam = await Promise.all(
            createdTeam.map(async (team_id) => {
                return await Team.findById(team_id, 'teamName teamCompetition teamLocation teamStart teamEnd');
            })
        );
        const getJoinedTeam = await Promise.all(
            joinedTeam.map(async (team_id) => {
                return await Team.findById(team_id, 'teamName teamCompetition teamLocation teamStart teamEnd');
            })
        );

        res.status(200).json({ myTeamCreated: getCreatedTeam, myTeamJoined: getJoinedTeam });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Create new team
const createTeam = async (req, res) => {
    const teamLeader = req.user._id;
    const { teamName, teamLocation, teamStart, teamEnd, teamCompetition, teamDescription, teamMember } = req.body;

    try {
        const team = await Team.create({ teamName, teamLeader, teamLocation, teamStart, teamEnd, teamCompetition, teamDescription, teamMember });
        if (!team) {
            throw new Error('Failed to create team');
        }

        const appendTeam = await addCreatedTeam(team.teamLeader, team._id);
        if (!appendTeam) {
            throw new Error('Failed to create team');
        }

        res.status(200).json(team);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a team
const deleteTeam = async (req, res) => {
    const user = req.user._id;
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Team doesn't exist");
        }

        const leader = await Team.findById(id, 'teamLeader');
        if (leader.teamLeader.toString() !== user.toString()) {
            throw new Error("You don't have access to delete team");
        }

        const team = await Team.findOneAndDelete({ _id: id });
        if (!team) {
            throw new Error("Team doesn't exist");
        }

        res.status(200).json(team);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Create request for position
const createRequest = async (req, res) => {
    const member = await req.user._id;
    const { id } = await req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Team doesn't exist" });
    }

    try {
        await Team.findOneAndUpdate(
            { 'teamMember._id': id },
            {
                $push: {
                    teamRequest: { position: id, member },
                },
            }
        );

        const updatedTeam = await Team.find({ 'teamMember._id': id });
        if (!updatedTeam) {
            throw new Error("Team doesn't exist");
        }

        res.status(200).json(updatedTeam);
    } catch (err) {
        res.status(404).json({ error: "Team doesn't exist" });
    }
};

const viewRequest = async (req, res) => {
    const id = await req.user._id;
    try {
        const teams = await Team.find({ teamLeader: id }, 'teamRequest');
        let joinRequest = [];
        teams.map((team) => {
            if (team.teamRequest.length > 0) {
                joinRequest = [...joinRequest, ...team.teamRequest];
            }
        });

        if (joinRequest.length > 0) {
            let request = [];
            await Promise.all(
                joinRequest.map(async (req) => {
                    if (req.status === 'Requesting') {
                        const user = await User.findById(req.member, 'name userName');
                        const team = await Team.find({ 'teamMember._id': req.position }, { teamName: 1, 'teamMember.$': 1 });
                        const item = {
                            id: req._id,
                            name: user.name,
                            userName: user.userName,
                            teamName: team[0].teamName,
                            position: team[0].teamMember[0].position,
                        };
                        request.push(item);
                    }
                })
            );
            res.status(200).json(request);
        } else {
            throw new Error('No request');
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//Accepting request for position
const acceptMember = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Position doesn't exist" });
    }

    try {
        const teamReq = await Team.find({ 'teamRequest._id': id }, { 'teamRequest.$': 1 });
        if (teamReq.length === 0) {
            return res.status(404).json({ error: 'Team request not found' });
        }

        const request = teamReq[0].teamRequest[0];

        await Team.findOneAndUpdate(
            { 'teamMember._id': request.position },
            {
                $set: {
                    'teamMember.$.member': request.member,
                },
            }
        );

        await Team.findOneAndUpdate(
            { 'teamRequest._id': request._id },
            {
                $set: {
                    'teamRequest.$.status': 'Accepted',
                },
            }
        );

        const updatedTeam = await Team.find({ 'teamRequest._id': id });
        if (!updatedTeam) {
            throw new Error("Team doesn't exist");
        }

        const team_id = await Team.find({ 'teamRequest._id': id }, 'id');
        const appendTeam = await addJoinedTeam(request.member, team_id);
        if (!appendTeam) {
            throw new Error('Failed to add member');
        }

        res.status(200).json({ updatedTeam });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//Rejecting request for position
const rejectMember = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Position doesn't exist" });
    }

    try {
        await Team.findOneAndUpdate(
            { 'teamRequest._id': id },
            {
                $set: {
                    'teamRequest.$.status': 'Rejected',
                },
            }
        );

        const updatedTeam = await Team.find({ 'teamRequest._id': id });
        if (!updatedTeam) {
            throw new Error("Team doesn't exist");
        }

        res.status(200).json({ updatedTeam });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    searchTeams,
    getTeam,
    getMyTeams,
    createTeam,
    deleteTeam,
    createRequest,
    viewRequest,
    acceptMember,
    rejectMember,
};
