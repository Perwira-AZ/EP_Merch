const Team = require("../models/teamModel");
const mongoose = require("mongoose");

// Get all team
const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find({});
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single team
const getTeam = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Team doesn't exist");
    }

    const team = await Team.findById(id, "teamName teamLeader teamLocation teamStart teamEnd teamCompetition teamDescription teamMember");

    if (!team) {
      throw new Error("Team doesn't exist");
    }

    res.status(200).json(team);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Create new team
const createTeam = async (req, res) => {
  const { teamName, teamLeader, teamLocation, teamStart, teamEnd, teamCompetition, teamDescription, teamMember } = req.body;

  try {
    const team = await Team.create({
      teamName,
      teamLeader,
      teamLocation,
      teamStart,
      teamEnd,
      teamCompetition,
      teamDescription,
      teamMember,
    });
    res.status(200).json(team);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a team
const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Team doesn't exist");
    }

    const team = await Team.findOneAndDelete({ _id: id });

    if (!team) {
      throw new Error("Team doesn't exist");
    }

    res.status(200).json(team);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  getAllTeams,
  getTeam,
  createTeam,
  deleteTeam,
};
