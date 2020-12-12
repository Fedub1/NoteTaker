// Require/import the HTTP and fs dependencies
var express = require("express");
var bodyParser = require('body-parser');
var app = express ();

// Establish Express App
var PORT = process.env.PORT || 8080;



// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("App listening on: http://localhost:" + PORT);
});
