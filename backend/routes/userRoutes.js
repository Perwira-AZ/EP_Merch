const express = require('express');
const User = require('../models/userModel');
const { getUser, updateUser, registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// GET a single user
router.get('/:id', getUser);

// UPDATE a user
router.patch('/:id', updateUser);

// Register new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

module.exports = router;
