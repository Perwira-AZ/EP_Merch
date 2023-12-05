const express = require('express');
const { addNotif, getNotif, deleteNotif } = require('../controllers/notifController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for notif routes
router.use(requireAuth);

// GET all notif
router.get('/myNotif', getNotif);

// POST a new notif
router.post('/newNotif', addNotif);

module.exports = router;
