const express = require('express');
const Team = require('../models/teamModel');
const { getAllTeams, getTeam, createTeam, deleteTeam, acceptMember } = require('../controllers/teamController');

const router = express.Router();

// GET all teams
router.get('/', getAllTeams);

// GET a single team
router.get('/:id', getTeam);

// DELETE a team
router.delete('/:id', deleteTeam);

// UPDATE a team
// router.patch('/:id', (req, res) => {
//     res.json({ mssg: 'UPDATE a team' });
// });

// POST a new team
router.post('/', createTeam);

router.patch('/position/:id', acceptMember);

module.exports = router;
