const authService = require('../services/auth');

exports.signup = async (req, res, next) => {
  try {
    const userId = await authService.signup(req.body);
    res.status(201).json({
      message: 'User created successfully!',
      userId: userId
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const loginData = await authService.login(email, password);
    res.status(200).json({
      token: loginData.token,
      userId: loginData.userId,
      message: 'Logged in successfully!'
    });
  } catch (err) {
    next(err);
  }
};
