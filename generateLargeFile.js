const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'largeFile.txt');

const fileStream = fs.createWriteStream(filePath);

for (let i = 0; i < 1e6; i++) { // Adjust this number for larger or smaller files
  fileStream.write(`This is line ${i + 1} of a large text file.\n`);
}

fileStream.end(() => {
  console.log('Large file generated successfully!');
});
