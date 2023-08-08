const http = require("http");

//method 1 - writing arrow function
http
  .createServer((req, res) => {
    res.write("Server is Created");
    res.end();
  })
  .listen(4500);

//method 2 - writing separate function and calling it in createServer function
function startServer(req, res) {
  res.write("<h1>Server is Created</h1>");
  res.end();
}
http.createServer(startServer).listen(4500);
