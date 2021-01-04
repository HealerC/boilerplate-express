var express = require('express');
var app = express();
console.log("Hello World");

/* Mount a logger root-level middleware */
app.use(logger);
function logger(req, res, next) {
	console.log(req.method + " " + req.path + " - " + req.ip);
	next();
}

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

/* Serve a JSON File */
require("dotenv").config( {path: __dirname+"/.env"} );	// Required if .env is to be used locally
app.get("/json", (req, res) => {
	const message = "Hello json";
	if (process.env.MESSAGE_STYLE == "uppercase") {
		res.json({"message": message.toUpperCase()});
	} else {
		res.json({"message": message});
	}
});

/* Chain a middleware to the route definition */
app.get("/now", (req, res, next) => {
	req.time = new Date().toString();
	next();
}, (req, res) => {
	res.json({time: req.time});
});

























 module.exports = app;
