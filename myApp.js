var express = require('express');
var app = express();
console.log("Hello World");


/* Serve a string */
app.get("/", (req, res) => {
	res.send("Hello Express");
});

































 module.exports = app;
