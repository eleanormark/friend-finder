//node modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var friendDB = require("./app/data/friends.js");
var loadHTMLStaticPages = require("./app/routing/htmlRoutes.js");
var loadAPIRoutes = require("./app/routing/apiRoutes.js");

//express setup
var app = express();
var PORT = process.env.PORT || 8080;

//sets up express to serve static files
app.use(express.static(path.join(__dirname, '../public'), {index:false,extensions:['html']}));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

loadAPIRoutes(app, friendDB);
loadHTMLStaticPages(app);

//start
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});