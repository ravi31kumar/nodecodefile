console.log("helllo world");
const express = require("express");
const app1 = express();

app1.get("/", function (req, res) {
  res.send("Hello MERN");
});

app1.listen(9000, function (req, res) {
  console.log("server is running");
});
