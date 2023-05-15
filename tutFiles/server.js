const http = require("http");
//import http from "http";
const port = 5000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
