import http from 'http';
import fs from 'fs';
http
  .createServer(function (req, res) {
    fs.appendFile('index.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World\n');
    });
  })
  .listen(8080, () => {
    console.log('Server is running on port 8080');
  });
