const express= require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.get('/api/health', (req, res) => {
    res.json({'message': 'You are healthy'});
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });