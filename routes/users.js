const express = require('express');
const usersController = require('../controllers/users');
const isAuth = require('../middlewares/is-auth');
const isAdmin = require('../middlewares/is-admin');
const validator = require('../middlewares/validator');
const userSchemas = require('../validators/UserSchema');

const router = express.Router();

// All routes here require authentication AND admin role
router.use(isAuth, isAdmin);

// GET /users
router.get('/', usersController.getAllUsers);

// GET /users/:userId
router.get('/:userId', validator(userSchemas.getUser), usersController.getUserById);

// POST /users
router.post('/', validator(userSchemas.createUser), usersController.createUser);

// PUT /users/:userId
router.put('/:userId', validator(userSchemas.updateUser), usersController.updateUser);

// DELETE /users/:userId
router.delete('/:userId', validator(userSchemas.deleteUser), usersController.deleteUser);

module.exports = router;
