const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Initialize Socket.io with the server

// Import routes and middleware
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const restaurantController = require('./controllers/restaurantController');
const menuController = require('./controllers/menuController');
const orderController = require('./controllers/orderController');
const driverController = require('./controllers/driverController');
const errorHandler = require('./middlewares/errorHandler');
const { validateRestaurant, validateMenuItem, validateOrder, validateDriver } = require('./middlewares/validate');

app.use(express.json());

// Use authentication routes
app.use('/api/auth', authRoutes);

// Public Routes
app.post('/api/restaurants', validateRestaurant, restaurantController.createRestaurant);
app.get('/api/restaurants', restaurantController.getAllRestaurants);
app.get('/api/restaurants/:id', restaurantController.getRestaurantById);
app.put('/api/restaurants/:id', validateRestaurant, restaurantController.updateRestaurant);
app.delete('/api/restaurants/:id', restaurantController.deleteRestaurant);

app.post('/api/menu', validateMenuItem, menuController.createMenuItem);
app.get('/api/menu', menuController.getAllMenuItems);
app.get('/api/menu/:id', menuController.getMenuItemById);
app.put('/api/menu/:id', validateMenuItem, menuController.updateMenuItem);
app.delete('/api/menu/:id', menuController.deleteMenuItem);

app.post('/api/orders', validateOrder, orderController.createOrder);
app.get('/api/orders', orderController.getAllOrders);
app.get('/api/orders/:id', orderController.getOrderById);
app.put('/api/orders/:id', validateOrder, orderController.updateOrder);
app.delete('/api/orders/:id', orderController.deleteOrder);

app.post('/api/drivers', validateDriver, driverController.createDriver);
app.get('/api/drivers', driverController.getAllDrivers);
app.get('/api/drivers/:id', driverController.getDriverById);
app.put('/api/drivers/:id', validateDriver, driverController.updateDriver);
app.delete('/api/drivers/:id', driverController.deleteDriver);

// Example of a protected route
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Real-time functionality with Socket.io
io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for real-time order updates
  socket.on('orderUpdate', (order) => {
    console.log('Order update:', order);
    // Broadcast order update to all clients
    io.emit('orderUpdate', order);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Error handling middleware
app.use(errorHandler);

// Export the server for starting
module.exports = { app, server };
