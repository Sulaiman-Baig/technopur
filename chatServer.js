// Import the required modules.
const express = require('express'); // Web framework for Node.js
const http = require('http'); // HTTP server module
const socketIo = require('socket.io'); // WebSocket library for real-time communication

// Create an Express application.
const app = express();

// Create an HTTP server using the Express app.
const server = http.createServer(app);

// Initialize Socket.io on the server.
const io = socketIo(server);

// Serve static files from the "public" directory.
app.use(express.static('public'));

// Listen for incoming connections on Socket.io.
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for messages from clients.
  socket.on('chat message', (msg) => {
    // Broadcast the received message to all connected clients.
    io.emit('chat message', msg);
  });

  // Handle user disconnects.
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server on port 3000.
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
