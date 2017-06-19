'use strict';

var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send("<h1>I love learning how to code!</h1>")
});

app.listen(3000, () => {
  console.log('The frontend server is running on port 3000')
});
