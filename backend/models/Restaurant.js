const connection = require('../config/db');

// Get all restaurants
exports.getAllRestaurants = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM restaurants', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

// Get restaurant by ID
exports.getRestaurantById = (restaurantId) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM restaurants WHERE restaurant_id = ?', [restaurantId], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

// Create a new restaurant
exports.createRestaurant = (restaurantData) => {
  const { name, address, phone, email } = restaurantData;
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO restaurants (name, address, phone, email) VALUES (?, ?, ?, ?)', 
      [name, address, phone, email], (error, results) => {
        if (error) return reject(error);
        resolve({ id: results.insertId, ...restaurantData });
      });
  });
};

// Update a restaurant
exports.updateRestaurant = (restaurantId, restaurantData) => {
  const { name, address, phone, email } = restaurantData;
  return new Promise((resolve, reject) => {
    connection.query('UPDATE restaurants SET name = ?, address = ?, phone = ?, email = ? WHERE restaurant_id = ?', 
      [name, address, phone, email, restaurantId], (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
  });
};

// Delete a restaurant
exports.deleteRestaurant = (restaurantId) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM restaurants WHERE restaurant_id = ?', [restaurantId], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};
