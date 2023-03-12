const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const initAllRoutes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));

initAllRoutes(app);

app.listen(port, () => {
  console.log(`App started ${port}`);
});

module.exports = app; // Ajout de cette ligne
