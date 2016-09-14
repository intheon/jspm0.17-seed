// grab express from node_modules and assign it here
const express = require("express");
const app = express();
const http = require("http").Server(app);
const port  = process.env.PORT || 1337;

// Expose the jspm packages & config, aswell as the client front-end
app.use('/jspm_packages',  express.static(__dirname + '/../jspm_packages'));
app.use("/jspm.config.js", express.static(__dirname + "/../jspm.config.js"));
app.use(express.static(__dirname + "/../client"));
app.all("/", (req, res, next) => {
	res.sendFile("index.html", { root: __dirname + "/../client/" });
})

// Start
http.listen(port, () => {
	console.log("Server is alive on port " + port);
})