'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// enable CORS without external module
app.use(cors());

app.use(bodyParser.json());


app.get('/', (req, res) => {
  var greeting = 'Hello From Node';
  res.send({greeting});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);