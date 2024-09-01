const connection = require('../config/db');

// Get all menu items
exports.getAllMenuItems = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM menus', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

// Get a menu item by ID
exports.getMenuItemById = (menuId) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM menus WHERE menu_id = ?', [menuId], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

// Create a new menu item
exports.createMenuItem = (menuData) => {
  const { restaurant_id, name, description, price } = menuData;
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO menus (restaurant_id, name, description, price) VALUES (?, ?, ?, ?)', 
      [restaurant_id, name, description, price], (error, results) => {
        if (error) return reject(error);
        resolve({ id: results.insertId, ...menuData });
      });
  });
};

// Update a menu item
exports.updateMenuItem = (menuId, menuData) => {
  const { restaurant_id, name, description, price } = menuData;
  return new Promise((resolve, reject) => {
    connection.query('UPDATE menus SET restaurant_id = ?, name = ?, description = ?, price = ? WHERE menu_id = ?', 
      [restaurant_id, name, description, price, menuId], (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
  });
};

// Delete a menu item
exports.deleteMenuItem = (menuId) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM menus WHERE menu_id = ?', [menuId], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};
