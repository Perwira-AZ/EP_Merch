const Team = require('../models/teamModel');
const mongoose = require('mongoose');

// Get all team
const searchTeams = async (req, res) => {
    const filter = req.body;
    console.log(filter);
    try {
        const teams = await Team.find(filter);
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

// Get owned team
const getMyTeams = async (req, res) => {
    const teamLeader = await req.user._id;

    try {
        const myTeams = await Team.find({ teamLeader });
        if (myTeams) {
            res.status(200).json(myTeams);
        } else {
            res.status(200).json({ message: "You don't have a team" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Create new team
const createTeam = async (req, res) => {
    const { teamName, teamLeader, teamLocation, teamStart, teamEnd, teamCompetition, teamDescription, teamMember } = req.body;

    try {
        const team = await Team.create({ teamName, teamLeader, teamLocation, teamStart, teamEnd, teamCompetition, teamDescription, teamMember });
        res.status(200).json(team);
    } catch (err) {
        res.status(400).json({ error: err.message() });
    }
};

// Delete a team
const deleteTeam = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Team doesn't exist");
        }

        const team = await Team.findOneAndDelete({ _id: id });
        if (!team) {
            throw new Error("Team doesn't exist");
        }

        res.status(200).json(team);
    } catch (error) {
        res.status(400).json({ error: err.message() });
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

        res.status(200).json(updatedTeam);
    } catch (err) {
        res.status(404).json({ error: "Team doesn't exist" });
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
    acceptMember,
    rejectMember,
};
