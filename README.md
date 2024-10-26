
# User Management, File Handling and Real-Time Chat

This project consists of three key components: a User Management API, efficient file handling using Node.js streams, and a real-time chat server using Socket.io.

## Part 1: User Management API

### Endpoints

1. **GET /users**: Fetch a list of users.
   - **Description**: This endpoint retrieves a predefined list of users. The users are stored in-memory for this implementation.
   - **Example Request**:
     ```bash
     curl -X GET http://localhost:3000/users
     ```

2. **POST /users**: Add a new user to the list.
   - **Description**: This endpoint allows you to add a new user by sending a user object (e.g., name and email) in the request body.
   - **Example Request**:
     ```bash
     curl -X POST http://localhost:3000/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "email": "john@example.com"}'
     ```

## Part 2: Efficient File Handling (Node.js Streams)

This part demonstrates efficient file handling using Node.js streams to read and write large text files.

### Steps to Run

1. **Generate a Large Text File**:
   - Open your terminal and run the following command:
     ```bash
     node generateLargeFile.js
     ```
   - This script will create a large text file named `largeFile.txt` in the current directory.

2. **Process the Large Text File**:
   - After generating the file, run the file handler script:
     ```bash
     node fileHandler.js
     ```
   - This script reads the contents of `largeFile.txt` and writes it to `outputFile.txt` using streams, ensuring efficient memory usage.

## Part 3: Real-Time Chat Server

The chat server allows users to communicate in real time and displays messages with user identification.

### Steps to Run

1. **Start the Chat Server**:
   - In the terminal, run the following command to start the chat server:
     ```bash
     node chatServer.js
     ```

2. **Open the Chat Interface**:
   - Open multiple browser windows or tabs and navigate to `http://localhost:3000`.
   - Each instance will connect to the chat server, and you can send messages in real time. You will see system notifications for users joining and leaving the chat.

## Conclusion

This project showcases a simple yet effective implementation of user management, efficient file handling, and real-time communication using Node.js and related technologies. Feel free to explore and modify the code as needed!
