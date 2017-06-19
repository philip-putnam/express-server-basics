'use strict';

var express = require('express');

var app = express();

app.get('/', (request, response) => {
  response.send("I love learning how to code!")
});

app.listen(3000);
