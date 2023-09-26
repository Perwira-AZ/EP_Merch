const User = require('../models/userModel');
const mongoose = require('mongoose');

//Get a all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: err.message() });
    }
};

// Get a single user
const getUser = async (req, res) => {
    const { id } = req.params;

    try{
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error ("User doesn't exist");
        }

        const user = await User.findById(id, 'name userName userEmail team');

        if (!user) {
            return res.status(404).json({ error: "User doesn't exist" });
        }

        res.status(200).json(user);
    } catch (err){
        res.status(404).json({ error: err.message() });
    }
};

// Create new user
const createUser = async (req, res) => {
    const { name, userName, userEmail, password } = req.body;

    try {
        const user = await User.create({ name, userName, userEmail, password });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message() });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("User doesn't exist");
        }
    
        const user = await User.findOneAndDelete({ _id: id });
    
        if (!user) {
            throw new Error("User doesn't exist");
        }
    
        res.status(200).json(user);
    } catch (error) {
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
    
        if (!user) {
            throw new Error("User doesn't exist");
        }
    
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ error: err.message() });
    }

};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
};
