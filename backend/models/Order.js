const connection = require('../config/db');

// Get all orders
exports.getAllOrders = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM orders', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

// Get an order by ID
exports.getOrderById = (orderId) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM orders WHERE order_id = ?', [orderId], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

// Create a new order
exports.createOrder = (orderData) => {
  const { user_id, restaurant_id, order_status, total_price } = orderData;
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO orders (user_id, restaurant_id, order_status, total_price) VALUES (?, ?, ?, ?)', 
      [user_id, restaurant_id, order_status, total_price], (error, results) => {
        if (error) return reject(error);
        resolve({ id: results.insertId, ...orderData });
      });
  });
};

// Update an order
exports.updateOrder = (orderId, orderData) => {
  const { user_id, restaurant_id, order_status, total_price } = orderData;
  return new Promise((resolve, reject) => {
    connection.query('UPDATE orders SET user_id = ?, restaurant_id = ?, order_status = ?, total_price = ? WHERE order_id = ?', 
      [user_id, restaurant_id, order_status, total_price, orderId], (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
  });
};

// Delete an order
exports.deleteOrder = (orderId) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM orders WHERE order_id = ?', [orderId], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};
