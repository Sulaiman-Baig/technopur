
// Import the 'fs' (filesystem) module, which provides functions for interacting with the filesystem.
const fs = require('fs');

// Import the 'path' module, which helps in working with file and directory paths.
const path = require('path');

// Define the path to the input file, 'largeFile.txt', located in the current directory.
// '__dirname' is a variable that holds the path to the current directory of the script.
const inputFilePath = path.join(__dirname, 'largeFile.txt'); // Replace with the actual large file path

// Define the path for the output file, 'outputFile.txt', which will store the processed data.
// This file will also be created in the current directory.
const outputFilePath = path.join(__dirname, 'outputFile.txt');

// Create a readable stream for the input file.
// This stream allows us to read the contents of 'largeFile.txt' in chunks.
// The 'utf8' encoding ensures that the data is read as a string.
const readStream = fs.createReadStream(inputFilePath, { encoding: 'utf8' });

// Create a writable stream for the output file.
// This stream allows us to write data to 'outputFile.txt'.
const writeStream = fs.createWriteStream(outputFilePath);

// Set up an event listener for the 'data' event on the read stream.
// This event is emitted whenever a chunk of data is available to read.
readStream.on('data', (chunk) => {
  // Log the length of the chunk being read (number of characters).
  console.log(`Reading chunk: ${chunk.length} characters`);
  
  // Write the chunk of data to the writable stream (output file).
  writeStream.write(chunk);
});

// Set up an event listener for the 'end' event on the read stream.
// This event is emitted when there is no more data to read from the input file.
readStream.on('end', () => {
  // Log a message indicating that reading has completed.
  console.log('Reading completed.');
  
  // End the writable stream, signaling that we are done writing to the output file.
  writeStream.end();
});

// Set up an event listener for the 'error' event on the read stream.
// This event is emitted if an error occurs while reading the input file.
readStream.on('error', (error) => {
  // Log the error message if reading fails.
  console.error(`Error reading file: ${error.message}`);
});

// Set up an event listener for the 'finish' event on the write stream.
// This event is emitted when all data has been written to the output file.
writeStream.on('finish', () => {
  // Log a message indicating that writing has completed.
  console.log('Writing completed.');
});

// Set up an event listener for the 'error' event on the write stream.
// This event is emitted if an error occurs while writing to the output file.
writeStream.on('error', (error) => {
  // Log the error message if writing fails.
  console.error(`Error writing file: ${error.message}`);
});

/*
  Why This Approach is Memory Efficient and Performant:

  1. **Streaming Data**: By using streams, we read and write data in chunks rather than loading the entire file into memory. This drastically reduces memory consumption, especially with large files.

  2. **Asynchronous Processing**: Streams operate asynchronously, allowing other operations to run while data is being read or written. This non-blocking behavior improves performance and responsiveness.

  3. **Event-Driven Architecture**: The code listens for specific events (like 'data', 'end', and 'error'), which allows it to react efficiently to changes in data availability and handle errors gracefully without crashing.

  4. **Efficient Resource Management**: Streams automatically handle the buffering of data and control flow, ensuring that we do not overwhelm the system's memory and processing capabilities.

  Overall, this method provides a scalable solution for processing large files while keeping memory usage low and maintaining high performance.
*/
