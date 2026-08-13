const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Namra DevOps Project 2</h1><p>Node.js app running in Docker!</p>');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
