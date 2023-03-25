const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express();
const port = 3000;
const initAllRoutes = require('./routes');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

initAllRoutes(app);

app.listen(port, () => {
  console.log(`Bienvenue ${port}`)
})
