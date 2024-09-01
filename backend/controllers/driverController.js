const Driver = require('../models/driver');

// Create a new driver
exports.createDriver = async (req, res) => {
  try {
    const { name, vehicle, contact } = req.body;
    const driver = await Driver.createDriver({ name, vehicle, contact });
    res.status(201).json({ message: 'Driver created', driver });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all drivers
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.getAllDrivers();
    res.json({ drivers });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a driver by ID
exports.getDriverById = async (req, res) => {
  const { id } = req.params;
  try {
    const driver = await Driver.getDriverById(id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json({ driver });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a driver
exports.updateDriver = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, vehicle, contact } = req.body;
    const result = await Driver.updateDriver(id, { name, vehicle, contact });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json({ message: 'Driver updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a driver
exports.deleteDriver = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Driver.deleteDriver(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json({ message: 'Driver deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
