// Import the required modules.
const express = require('express'); // Import Express framework for building the web server.
const http = require('http'); // Import the HTTP module to create the server.
const socketIo = require('socket.io'); // Import Socket.io for enabling real-time communication.

const app = express(); // Create an instance of the Express application.

// Create an HTTP server using the Express app.
// This allows us to use Socket.io with the HTTP server.
const server = http.createServer(app);

// Initialize Socket.io on the server.
// This will allow us to manage WebSocket connections.
const io = socketIo(server);

// Serve static files from the "public" directory.
// This enables the web app to access HTML, CSS, and JavaScript files easily.
app.use(express.static('public'));

// Listen for incoming connections on Socket.io.
// This will trigger the callback function whenever a new client connects.
io.on('connection', (socket) => {
  console.log('A user connected'); // Log to the console when a user connects.

  // Listen for messages from the client.
// This event is emitted when a message is sent by a connected user.
  socket.on('chat message', (msg) => {
    // Broadcast the received message to all connected clients.
// This allows all users to see the message sent by any user.
    io.emit('chat message', msg);
  });

  // Handle user disconnects.
// This event is emitted when a user disconnects from the server.
  socket.on('disconnect', () => {
    console.log('User disconnected'); // Log to the console when a user disconnects.
  });
});

// Start the server on port 3000.
// This is where the server will listen for incoming requests.
const PORT = process.env.PORT || 3000; // Use the environment port or default to 3000.
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log the server URL.
});
