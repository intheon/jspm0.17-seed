// Requires
const express         = require("express");
const app             = express();
const http 			  = require("http").Server(app);
const port            = process.env.PORT || 1337;

// Expose the jspm packages + config as well as the client front-end
app.use('/jspm_packages',  express.static(__dirname + '/../jspm_packages'));
app.use("/jspm.browser.js", express.static(__dirname + "/../jspm.browser.js"));
app.use("/jspm.config.js", express.static(__dirname + "/../jspm.config.js"));
app.use("/src", express.static(__dirname + "/../src"));

app.use(express.static(__dirname + "/../client"));

app.all("/", (req, res, next) => {
	res.sendFile("index.html", { root: __dirname + "/../client" });
})



// Start
http.listen(port, () => {
	console.log("wowzers " + port);
})