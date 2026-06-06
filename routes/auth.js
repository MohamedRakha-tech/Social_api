const express = require('express');
const { body } = require('express-validator');
const User = require('../models/user');
const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.post(
  '/signup',
  authMiddleware.validateSignup,
  authController.signup
);

// router.post('/signup', [
//   body('email')
//     .isEmail()
//     .normalizeEmail(),
//   body('password')
//     .isLength({ min: 6 })
//     .withMessage('Password must be at least 6 characters long.')
// ], authController.signup);

  // router.post(
  //   '/login',
  //   [body('email').isEmail().normalizeEmail(), body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')],
  //   authController.login
  // );
  
  router.post(
  '/login',
  authMiddleware.validateLogin,
  authController.login
);



module.exports = router;
