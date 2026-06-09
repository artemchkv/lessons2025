import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const server = createServer((req, res) => {
  readFile('test.json', 'utf8')
    .then((data) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(data);
      res.end();
    })
    .catch((err) => {
      console.error('Error reading file:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
