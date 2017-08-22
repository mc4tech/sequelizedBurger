//require the dependecies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
// var path = require("path");
//set handlebars
var exphbs = require("express-handlebars");

//set the PORT 
var PORT = process.env.PORT || 8080;

//set app to use express functions
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use('/public', express.static(path.join(__dirname, 'app/public')));
app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({extended: false}));

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function() {
	console.log("listening on port:%s", PORT);
});
