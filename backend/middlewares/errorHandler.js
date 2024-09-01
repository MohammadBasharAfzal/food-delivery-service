// Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error stack for debugging
    res.status(500).json({
      message: 'Internal server error',
      error: err.message
    });
  };
  
  module.exports = errorHandler;
  