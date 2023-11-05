const express = require('express');
const { getUser, updateUser, registerUser, loginUser, getUserLoggedIn } = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// GET a single user
router.get('/profile/:id', getUser);

// UPDATE a user
router.patch('/profile/:id', updateUser);

// Register new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// require auth
router.use(requireAuth);

// User profile
router.get('/myProfile', getUserLoggedIn);

module.exports = router;
