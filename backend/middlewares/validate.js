const { body, validationResult } = require('express-validator');

// Validation rules for creating/updating a restaurant
const validateRestaurant = [
  body('name').notEmpty().withMessage('Name is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validation rules for creating/updating a menu item
const validateMenuItem = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('restaurantId').isNumeric().withMessage('Restaurant ID must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validation rules for creating/updating an order
const validateOrder = [
  body('userId').isNumeric().withMessage('User ID must be a number'),
  body('restaurantId').isNumeric().withMessage('Restaurant ID must be a number'),
  body('menuItems').isArray().withMessage('Menu items must be an array'),
  body('status').notEmpty().withMessage('Status is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validation rules for creating/updating a driver
const validateDriver = [
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('vehicle_number').notEmpty().withMessage('Vehicle number is required'),
  body('availability_status').notEmpty().withMessage('Availability status is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateRestaurant,
  validateMenuItem,
  validateOrder,
  validateDriver
};
