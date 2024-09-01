const connection = require('../config/db');

const Order = {
  getAllOrders(callback) {
    connection.query('SELECT * FROM orders', callback);
  },

  getOrderById(orderId, callback) {
    connection.query('SELECT * FROM orders WHERE order_id = ?', [orderId], callback);
  },

  createOrder(orderData, callback) {
    const { user_id, restaurant_id, order_status, total_price } = orderData;
    connection.query('INSERT INTO orders (user_id, restaurant_id, order_status, total_price) VALUES (?, ?, ?, ?)', 
      [user_id, restaurant_id, order_status, total_price], callback);
  },

  updateOrder(orderId, orderData, callback) {
    const { user_id, restaurant_id, order_status, total_price } = orderData;
    connection.query('UPDATE orders SET user_id = ?, restaurant_id = ?, order_status = ?, total_price = ? WHERE order_id = ?', 
      [user_id, restaurant_id, order_status, total_price, orderId], callback);
  },

  deleteOrder(orderId, callback) {
    connection.query('DELETE FROM orders WHERE order_id = ?', [orderId], callback);
  }
};

module.exports = Order;
