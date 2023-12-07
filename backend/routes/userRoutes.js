const express = require('express');
const { getUser, updateUser, registerUser, loginUser, getUserLoggedIn } = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// GET a single user
router.get('/profile/:id', getUser);

// Register new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// require auth
router.use(requireAuth);

// UPDATE a user
router.patch('/myProfile', updateUser);

// User profile
router.get('/myProfile', getUserLoggedIn);

module.exports = router;
