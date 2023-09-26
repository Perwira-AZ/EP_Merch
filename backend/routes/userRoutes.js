const express = require('express');
const User = require('../models/userModel');
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/userController');

const router = express.Router();

// GET all users
router.get('/', getAllUsers);

// GET a single user
router.get('/:id', getUser);

// DELETE a user
router.delete('/:id', deleteUser);

// UPDATE a user
router.patch('/:id', updateUser);

// POST a new user
router.post('/', createUser);

module.exports = router;
