const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getMe,
  updateProfile,
  logout
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const {
  registerValidation,
  loginValidation,
  validate
} = require('../middleware/validator');

// Public routes
router.post('/register', registerValidation, validate, register);
router.post('/login', loginValidation, validate, login);

// Protected routes
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);
router.post('/logout', protect, logout);

module.exports = router;