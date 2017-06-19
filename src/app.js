'use strict';

var express = require('express');
var posts = require('./data/posts.json');

var app = express();

app.get('/', (req, res) => {
  res.send("<h1>I love learning how to code!</h1>")
});

app.get('/blog/:title?', (req, res) => {
  var title = req.params.title;
  if (title === undefined) {
    res.status(503);
    res.send('this page is under construction');
  } else {
    var post = posts[title];
    res.send(post);
  }
});

app.listen(3000, () => {
  console.log('The frontend server is running on port 3000')
});
