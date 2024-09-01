const Order = require('../models/order');
const { io } = require('../app'); // Import the Socket.io instance

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { user_id, restaurant_id, order_status, total_price } = req.body;
    const order = await Order.createOrder({ user_id, restaurant_id, order_status, total_price });
    io.emit('orderUpdate', { id: order.id, user_id, restaurant_id, order_status, total_price });
    res.status(201).json({ message: 'Order created', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.getAllOrders();
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.getOrderById(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ order });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update an order
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const { user_id, restaurant_id, order_status, total_price } = req.body;
    const result = await Order.updateOrder(id, { user_id, restaurant_id, order_status, total_price });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    io.emit('orderUpdate', { id, user_id, restaurant_id, order_status, total_price });
    res.json({ message: 'Order updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Order.deleteOrder(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    io.emit('orderUpdate', { id, order_status: 'deleted' }); // Emit with a status indicating deletion
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
