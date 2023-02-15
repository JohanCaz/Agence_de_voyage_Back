const express = require("express");
const app = express();

const port = 3000;
app.get("/ma_premiere_page", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`app started ${port}`);
});
