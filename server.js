const http = require('http');
const fs = require('fs');
const path = require('path');

// Server configuration
const port = process.env.PORT || 3001;
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.gif': 'image/gif',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // Determine file path
  const safeUrl = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, safeUrl);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
      return;
    }
    // If serving the client bundle, replace process?.env?.GIF_NUMBER with actual env var
    if (ext === '.js' && path.basename(filePath) === 'bundle.js') {
      let content = data.toString();
      const gifNumber = process.env.GIF_NUMBER || '0';
      content = content.replace(/process\?\.env\?\.GIF_NUMBER/g, gifNumber);
      data = Buffer.from(content);
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

// Listen on localhost only
server.listen(port, '127.0.0.1', () => {
  console.log(`Server is running at http://localhost:${port}`);
});
