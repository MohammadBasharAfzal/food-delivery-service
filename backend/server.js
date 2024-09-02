const app = require('./app'); // Import the express app
const http = require('http');
const server = http.createServer(app);

// Setup socket.io
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');
  // Handle events here

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
