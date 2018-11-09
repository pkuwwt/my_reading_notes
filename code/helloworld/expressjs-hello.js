
/**
  * server.js
  * 
  * Setup:
  *     npm init
  *     npm install -S express
  * Run:
  *     node server.js
  */

var express = require('express')
var app = express()

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen('8808');
