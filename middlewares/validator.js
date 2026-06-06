const APIError = require('../utils/APIERROR');

module.exports = (schema) => {
  return (req, res, next) => {
    const validations = ['body', 'params', 'query', 'headers'];
    const errors = [];

    for (const key of validations) {
      if (schema[key]) {
        const { error, value } = schema[key].validate(req[key], { abortEarly: false });
        if (error) {
          error.details.forEach((detail) => {
            errors.push({
              path: detail.path.join('.'),
              msg: detail.message
            });
          });
        } else {
          // Replace request key with validated and normalized/cast value
          req[key] = value;
        }
      }
    }

    

    if (errors.length > 0) {
      const apiError = new APIError(422, 'Validation failed.');
      apiError.data = errors;
      return next(apiError);
    }
    next();
  };
};
