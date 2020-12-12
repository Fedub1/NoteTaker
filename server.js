// Require/import the HTTP and fs dependencies
var express = require("express");
var bodyParser = require('body-parser');
var app = express ();

// Establish Express App
var app = process.env.PORT || 8080;



// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


// Create our server
var server = http.createServer(handleRequest);

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

   // Capture the url the request is made to
    // var path = req.url;

    // Depending on the URL, display a different HTML file.
    // switch (path) {
  
    //   case "/index":
    //     return fs.readFile(__dirname + "/index.html", function(err, data) {
    //       if (err) throw err;
    //       res.writeHead(200, { "Content-Type": "text/html" });
    //       res.end(data);
    //     });
    
    //   case "/notes":
    //     return fs.readFile(__dirname + "/notes.html", function(err, data) {
    //       if (err) throw err;
    //       res.writeHead(200, { "Content-Type": "text/html" });
    //       res.end(data);
    //     });
  
    //   }
  
// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
})};
