const Restaurant = require('../models/restaurant');

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
  try {
    const { name, address, phone, email } = req.body;
    const restaurant = await Restaurant.createRestaurant({ name, address, phone, email });
    res.status(201).json({ message: 'Restaurant created', restaurant });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.getAllRestaurants();
    res.json({ restaurants });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a restaurant by ID
exports.getRestaurantById = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.getRestaurantById(id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json({ restaurant });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a restaurant
exports.updateRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, address, phone, email } = req.body;
    const result = await Restaurant.updateRestaurant(id, { name, address, phone, email });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json({ message: 'Restaurant updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a restaurant
exports.deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Restaurant.deleteRestaurant(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json({ message: 'Restaurant deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
