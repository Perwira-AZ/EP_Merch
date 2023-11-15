const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notifSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  notifType: {
    type: String,
    required: true,
  },
  notifMessage: {
    type: String,
    required: true,
  },
  notifDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  notifDelete: {
    type: Date,
    default: () => Date.now() + 30 * 24 * 60 * 60 * 1000,
    required: true,
  },
});

module.exports = mongoose.model('Notif', notifSchema);
