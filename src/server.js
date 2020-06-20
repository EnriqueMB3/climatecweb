const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/appclima'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/appclima/index.html'));
});