const pool = require('../config/db');

// Create a new driver
exports.createDriver = ({ name, vehicle, contact }) => {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO drivers (name, vehicle, contact) VALUES (?, ?, ?)', 
      [name, vehicle, contact], (error, results) => {
        if (error) return reject(error);
        resolve({ id: results.insertId, name, vehicle, contact });
      });
  });
};

// Get all drivers
exports.getAllDrivers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM drivers', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

// Get a driver by ID
exports.getDriverById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM drivers WHERE driver_id = ?', [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

// Update a driver
exports.updateDriver = (id, { name, vehicle, contact }) => {
  return new Promise((resolve, reject) => {
    pool.query('UPDATE drivers SET name = ?, vehicle = ?, contact = ? WHERE driver_id = ?', 
      [name, vehicle, contact, id], (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
  });
};

// Delete a driver
exports.deleteDriver = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM drivers WHERE driver_id = ?', [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};
