const APIError = require('../utils/APIERROR');

module.exports = (req, res, next) => {
  if (req.userRole !== 'admin') {
    return next(new APIError(403, 'Not authorized. Admin role required.'));
  }
  next();
};
