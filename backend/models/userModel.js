const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    team: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team',
        },
    ],
});

module.exports = mongoose.model('User', userSchema);
