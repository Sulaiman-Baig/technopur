const fs = require('fs');
const path = require('path');

// file paths
const inputFilePath = path.join(__dirname, 'largeFile.txt'); // Replace with the actual large file path
const outputFilePath = path.join(__dirname, 'outputFile.txt');

// readable and writable streams
const readStream = fs.createReadStream(inputFilePath, { encoding: 'utf8' });
const writeStream = fs.createWriteStream(outputFilePath);

// events for the read stream
readStream.on('data', (chunk) => {
  console.log(`Reading chunk: ${chunk.length} characters`);
  writeStream.write(chunk);
});

readStream.on('end', () => {
  console.log('Reading completed.');
  writeStream.end();
});

readStream.on('error', (error) => {
  console.error(`Error reading file: ${error.message}`);
});

// events for the write stream
writeStream.on('finish', () => {
  console.log('Writing completed.');
});

writeStream.on('error', (error) => {
  console.error(`Error writing file: ${error.message}`);
});
