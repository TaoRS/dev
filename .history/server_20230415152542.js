const express = require("express");
const app = express();

express.static(root, [options]);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000);
