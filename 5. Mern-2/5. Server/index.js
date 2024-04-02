const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello Everyone");
});

server.listen(8000, "127.0.0.1", () => {
    console.log(`Listening to port no 8000`);
});