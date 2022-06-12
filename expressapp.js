const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello World!");
});

app.get("/about", (req, res) => {
  res.send("This ia an about page");
});

app.listen(port, () => {
  console.log(`Example app is listening at http://localhost:${port}`);
});
