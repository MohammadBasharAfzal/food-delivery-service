const Menu = require('../models/menu');

// Create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const { restaurant_id, name, description, price } = req.body;
    const menuItem = await Menu.createMenuItem({ restaurant_id, name, description, price });
    res.status(201).json({ message: 'Menu item created', menuItem });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.getAllMenuItems();
    res.json({ menuItems });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a menu item by ID
exports.getMenuItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const menuItem = await Menu.getMenuItemById(id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ menuItem });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a menu item
exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, description, price, restaurant_id } = req.body;
    const result = await Menu.updateMenuItem(id, { name, description, price, restaurant_id });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a menu item
exports.deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Menu.deleteMenuItem(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
