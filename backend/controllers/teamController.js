const Team = require('../models/teamModel');
const mongoose = require('mongoose');

// Get all team
const getAllTeams = async (req, res) => {
    const teams = await Team.find({});

    res.status(200).json(teams);
};

// Get a singel team
const getTeam = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Team doesn't exist" });
    }

    const team = await Team.findById(id, 'teamName teamLeader teamLocation teamStart teamEnd teamCompetition teamDescription teamMember');
    res.status(200).json({ team });
};

// Create new team
const createTeam = async (req, res) => {
    const { teamName, teamLeader, teamLocation, teamStart, teamEnd, teamCompetition, teamDescription, teamMember } = req.body;

    try {
        const team = await Team.create({ teamName, teamLeader, teamLocation, teamStart, teamEnd, teamCompetition, teamDescription, teamMember });
        res.status(200).json(team);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a team
const deleteTeam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Team doesn't exist" });
    }

    const team = await Team.findOneAndDelete({ _id: id });

    if (!team) {
        return res.status(404).json({ error: "Team doesn't exist" });
    }

    res.status(200).json(team);
};

const acceptMember = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Position doesn't exist" });
    }

    const acceptTeamMember = await Team.findOneAndUpdate(
        { 'teamMember._id': id },
        {
            $set: {
                'teamMember.$.member': req.body.member,
            },
        }
    );

    const updatedTeamMember = await Team.find({ 'teamMember._id': id });

    if (!acceptTeamMember) {
        return res.status(404).json({ error: "Position doesn't exist" });
    }

    res.status(200).json(updatedTeamMember);
};

module.exports = {
    getAllTeams,
    getTeam,
    createTeam,
    deleteTeam,
    acceptMember,
};
