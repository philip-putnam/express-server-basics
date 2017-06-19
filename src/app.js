'use strict';

var express = require('express');
var posts = require('./data/posts.json');

var app = express();

app.get('/', (req, res) => {
  res.send("<h1>I love learning how to code!</h1>")
});

app.get('/blog', (req, res) => {

});

app.listen(3000, () => {
  console.log('The frontend server is running on port 3000')
});
