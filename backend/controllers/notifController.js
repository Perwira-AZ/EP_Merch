const Notif = require('../models/notifModel');
const mongoose = require('mongoose');

const addNotif = async (req, res) => {
  const { user, notifType, notifMessage } = req.body;

  try {
    const notif = await Notif.create({
      user,
      notifType,
      notifMessage,
    });
    if (!notif) {
      throw new Error('Failed to add notif');
    }
    res.status(200).json({ notif });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getNotif = async (req, res) => {
  const user = req.user._id;
  try {
    const notif = await Notif.find({ user }, 'notifType notifMessage notifDate');
    if (!notif) {
      throw new Error('Failed to get notif');
    }
    res.status(200).json({ notif });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteNotif = async (req, res) => {
  try {
    const notif = await Notif.deleteMany({ notifDelete: Date.now() });
    if (!notif) {
      throw new Error('Failed to delete notif');
    }
    res.status(200).json({ notif });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addNotif, getNotif, deleteNotif };
