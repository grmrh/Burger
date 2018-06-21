var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require("./controllers/bugers_controller");

var PORT = process.env.PORT || 3000;

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());

// set handlebars
app.engine("handlebars", exphbs({defaultLayout: "main", 
                                  // layoutsDir: '/views/layouts',
                                  // partialsDir: '/views/particals'
                                }));
app.set("view engine", "handlebars");

// respond to requests
app.use(routes);

// start the server listening to client requests
app.listen(PORT, function() {
  console.log("Server listening on http://localhost:" + PORT);
})
