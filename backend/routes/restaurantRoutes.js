const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Create a new restaurant
router.post('/', restaurantController.createRestaurant);

// Get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Get a restaurant by ID
router.get('/:id', restaurantController.getRestaurantById);

// Update a restaurant
router.put('/:id', restaurantController.updateRestaurant);

// Delete a restaurant
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;
