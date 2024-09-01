const connection = require('../config/db');

const User = {
  // Fetch all users
  getAllUsers(callback) {
    connection.query('SELECT * FROM users', callback);
  },
  
  // Find a user by ID
  getUserById(userId, callback) {
    connection.query('SELECT * FROM users WHERE user_id = ?', [userId], callback);
  },
  
  // Create a new user
  createUser(userData, callback) {
    const { name, email, password, phone, address, role } = userData;
    connection.query('INSERT INTO users (name, email, password, phone, address, role) VALUES (?, ?, ?, ?, ?, ?)', 
      [name, email, password, phone, address, role], callback);
  },

  // Update a user
  updateUser(userId, userData, callback) {
    const { name, email, password, phone, address, role } = userData;
    connection.query('UPDATE users SET name = ?, email = ?, password = ?, phone = ?, address = ?, role = ? WHERE user_id = ?', 
      [name, email, password, phone, address, role, userId], callback);
  },

  // Delete a user
  deleteUser(userId, callback) {
    connection.query('DELETE FROM users WHERE user_id = ?', [userId], callback);
  }
};

module.exports = User;
