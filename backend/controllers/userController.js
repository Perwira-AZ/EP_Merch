const User = require('../models/userModel');
const mongoose = require('mongoose');

// Get a single user
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "User doesn't exist" });
    }

    const user = await User.findById(id, 'name userName userEmail team');

    if (!user) {
        return res.status(404).json({ error: "User doesn't exist" });
    }

    res.status(200).json(user);
};

// Create new user
const createUser = async (req, res) => {
    const { name, userName, userEmail, password } = req.body;

    try {
        const user = await User.create({ name, userName, userEmail, password });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "User doesn't exist" });
    }

    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
        return res.status(404).json({ error: "User doesn't exist" });
    }

    res.status(200).json(user);
};

// Update a user
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "User doesn't exist" });
    }

    const user = await User.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!user) {
        return res.status(404).json({ error: "User doesn't exist" });
    }

    res.status(200).json(User.findById(id));
};

module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser,
};
