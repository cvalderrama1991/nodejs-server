import http from 'node:http';
import fs from 'fs/promises';
// import url from 'url';
import path from 'path';

const PORT = process.env.PORT;

// Get current path
const __filename = import.meta.filename;
// const __dirname = import.meta.dirname;
const __dirname = path.dirname(__filename);

const server = http.createServer(function(req, res) {
  try {
    // Check if GET request
    if (req.method === 'GET') {
      let filePath;
      if (req.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Not Found')
      }
    } else {
      throw new Error('Method not allowed');
    }
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/plain' });
    res.end('Server Error');
  }

});

console.log(__dirname);


server.listen(PORT, function() {
  console.log(`Server is running on port: ${PORT}`);
});
