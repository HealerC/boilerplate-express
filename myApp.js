var express = require('express');
var app = express();
console.log("Hello World");


/* Serve a string */
app.get("/", (req, res) => {
	res.send("Hello Express");
});

const assets = __dirname + "/public";
app.use(express.static(assets));

/* Serve an HTML file */
app.get("/register", (req, res) => {
	const path = __dirname + "/views/index.html";
	res.sendFile(path);
})






























 module.exports = app;
