// 404 Route Not Found Controller
exports.get404 = (req, res, next) => {
  res.status(404).json({
    message: 'Page or endpoint not found.'
  });
};

// 500 Global Error Handling Middleware/Controller
exports.get500 = (error, req, res, next) => {
  console.error('[Error Handler Middleware]:', error);
  const status = error.statusCode || 500;
  const message = error.message || 'An internal server error occurred.';
  const data = error.data || null;

  res.status(status).json({
    message: message,
    data: data
  });
};
