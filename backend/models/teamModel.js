const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true,
    },
    teamLeader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    teamLocation: {
        province: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
    },
    teamStart: {
        type: Date,
        required: true,
    },
    teamEnd: {
        type: Date,
        required: true,
    },
    teamCompetition: {
        type: String,
        required: true,
    },
    teamDescription: {
        type: String,
    },
    teamMember: [
        {
            position: String,
            member: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                unique: true,
                required: false,
            },
        },
    ],
    teamRequest: [
        {
            position: String,
            member: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                unique: true,
            },
        },
    ],
});

module.exports = mongoose.model('Team', teamSchema);
