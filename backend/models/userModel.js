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
  profilePict: {
    type: String,
    required: true,
    default:
      'data:image/png;base64,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',
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
