const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

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
    team: {
        createdTeam: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Team',
                unique: true,
            },
        ],
        joinedTeam: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Team',
                unique: true,
            },
        ],
    },
});

// static register method
userSchema.statics.register = async function (name, userName, userEmail, password) {
    //validation
    if (!name || !userName || !userEmail || !password) {
        throw Error('All fields must be filled');
    }
    if (!validator.isEmail(userEmail)) {
        throw Error('Email is not valid');
    }
    if (password.length < 8) {
        throw Error('Password must contains at least 8 characters');
    }

    const emailExists = await this.findOne({ userEmail });
    const userNameExists = await this.findOne({ userName });

    if (emailExists) {
        throw Error('Email already in use');
    }
    if (userNameExists) {
        throw Error('Username already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ name, userName, userEmail, password: hash });

    return user;
};

// static login method
userSchema.statics.login = async function (userEmail, password) {
    if (!userEmail || !password) {
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ userEmail });
    if (!user) {
        throw Error('Email or password is wrong');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Email or password is wrong');
    }

    return user;
};

module.exports = mongoose.model('User', userSchema);
