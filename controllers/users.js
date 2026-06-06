const usersService = require('../services/users');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await usersService.getAllUsers();
    res.status(200).json({
      message: 'Fetched users successfully.',
      users: users
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await usersService.getUserById(userId);
    res.status(200).json({ message: 'User fetched.', user: user });
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const result = await usersService.createUser(req.body);
    res.status(201).json({ message: 'User created successfully!', userId: result._id });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const result = await usersService.updateUser(userId, req.body);
    res.status(200).json({ message: 'User updated!', user: result });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    await usersService.deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err) {
    next(err);
  }
};
