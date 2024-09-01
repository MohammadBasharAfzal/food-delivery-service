const connection = require('../config/db');

const Driver = {
  getAllDrivers(callback) {
    connection.query('SELECT * FROM drivers', callback);
  },

  getDriverById(driverId, callback) {
    connection.query('SELECT * FROM drivers WHERE driver_id = ?', [driverId], callback);
  },

  createDriver(driverData, callback) {
    const { name, phone, email, vehicle_number, availability_status } = driverData;
    connection.query('INSERT INTO drivers (name, phone, email, vehicle_number, availability_status) VALUES (?, ?, ?, ?, ?)', 
      [name, phone, email, vehicle_number, availability_status], callback);
  },

  updateDriver(driverId, driverData, callback) {
    const { name, phone, email, vehicle_number, availability_status } = driverData;
    connection.query('UPDATE drivers SET name = ?, phone = ?, email = ?, vehicle_number = ?, availability_status = ? WHERE driver_id = ?', 
      [name, phone, email, vehicle_number, availability_status, driverId], callback);
  },

  deleteDriver(driverId, callback) {
    connection.query('DELETE FROM drivers WHERE driver_id = ?', [driverId], callback);
  }
};

module.exports = Driver;
