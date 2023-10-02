const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' });
};

// Get a single user
const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("User doesn't exist");
        }

        const user = await User.findById(id, 'name userName userEmail team');

        if (!user) {
            throw new Error("User doesn't exist");
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ error: err.message() });
    }
};

// Update a user
const updateUser = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("User doesn't exist");
        }

        const user = await User.findOneAndUpdate(
            { _id: id },
            {
                ...req.body,
            }
        );

        const updatedUser = await User.findById(id);

        if (!updatedUser) {
            throw new Error("User doesn't exist");
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ error: err.message() });
    }
};

// Register user
const registerUser = async (req, res) => {
    const { name, userName, userEmail, password } = req.body;

    try {
        const user = await User.register(name, userName, userEmail, password);
        if (!user) {
            throw new Error('Failed to create user');
        }

        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { userEmail, password } = req.body;

    try {
        const user = await User.login(userEmail, password);
        const token = await createToken(user._id);

        if (!token) {
            throw new Error('Failed to get token');
        }

        res.status(200).json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    getUser,
    updateUser,
    registerUser,
    loginUser,
};
