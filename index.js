const express= require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
// const getId = require('docker-container-id');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    // res.json(`you are listening to port ${port}`);
    res.json({'message': `You are healthy and container id is ${process.env.APPID}`});
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });