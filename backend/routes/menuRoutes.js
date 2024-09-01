const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Create a new menu item
router.post('/', menuController.createMenuItem);

// Get all menu items
router.get('/', menuController.getAllMenuItems);

// Get a menu item by ID
router.get('/:id', menuController.getMenuItemById);

// Update a menu item
router.put('/:id', menuController.updateMenuItem);

// Delete a menu item
router.delete('/:id', menuController.deleteMenuItem);

module.exports = router;
