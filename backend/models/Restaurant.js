const connection = require('../config/db');

const Restaurant = {
  getAllRestaurants(callback) {
    connection.query('SELECT * FROM restaurants', callback);
  },

  getRestaurantById(restaurantId, callback) {
    connection.query('SELECT * FROM restaurants WHERE restaurant_id = ?', [restaurantId], callback);
  },

  createRestaurant(restaurantData, callback) {
    const { name, address, phone, email } = restaurantData;
    connection.query('INSERT INTO restaurants (name, address, phone, email) VALUES (?, ?, ?, ?)', 
      [name, address, phone, email], callback);
  },

  updateRestaurant(restaurantId, restaurantData, callback) {
    const { name, address, phone, email } = restaurantData;
    connection.query('UPDATE restaurants SET name = ?, address = ?, phone = ?, email = ? WHERE restaurant_id = ?', 
      [name, address, phone, email, restaurantId], callback);
  },

  deleteRestaurant(restaurantId, callback) {
    connection.query('DELETE FROM restaurants WHERE restaurant_id = ?', [restaurantId], callback);
  }
};

module.exports = Restaurant;
