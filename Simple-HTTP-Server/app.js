// Libraries
const http = require('http');

// Server Hostspot
const hostname = '127.0.0.1';
const port = 3000;

// Server
const server = http.createServer((req, res) => {
    res.write('Hello, World!');
    res.end();
});

// Server Listening
server.listen(port, hostname, () => {
    console.log('Server is listening at http://' + hostname + ':' + port + '/');
});