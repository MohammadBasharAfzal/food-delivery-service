const connection = require('../config/db');

const Menu = {
  getAllMenus(callback) {
    connection.query('SELECT * FROM menus', callback);
  },

  getMenuById(menuId, callback) {
    connection.query('SELECT * FROM menus WHERE menu_id = ?', [menuId], callback);
  },

  createMenu(menuData, callback) {
    const { restaurant_id, name, description, price } = menuData;
    connection.query('INSERT INTO menus (restaurant_id, name, description, price) VALUES (?, ?, ?, ?)', 
      [restaurant_id, name, description, price], callback);
  },

  updateMenu(menuId, menuData, callback) {
    const { restaurant_id, name, description, price } = menuData;
    connection.query('UPDATE menus SET restaurant_id = ?, name = ?, description = ?, price = ? WHERE menu_id = ?', 
      [restaurant_id, name, description, price, menuId], callback);
  },

  deleteMenu(menuId, callback) {
    connection.query('DELETE FROM menus WHERE menu_id = ?', [menuId], callback);
  }
};

module.exports = Menu;
