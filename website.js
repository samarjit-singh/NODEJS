const { Console } = require("console");
const fs = require("fs");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);

  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1> This is code with samar</h1><p>hello world</p>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>About code with samar</h1><p>about code wih samar</p>");
  } else if (req.url == "/hello") {
    //reading an html file
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    res.statusCode = 404; //not found
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
