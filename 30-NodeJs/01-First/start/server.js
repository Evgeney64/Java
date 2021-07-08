const http = require('http');

const server = http.createServer((requ, resp) => {
    resp.end("<h1>Hello web nodeJs</h1>");
});

server.listen(3000, () => console.log());