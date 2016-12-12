var express = require('express');

var app = express();


app.use(express.static("public"));

app.listen(8080,"10.207.26.198");