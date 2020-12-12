// Require/import the HTTP module

var db = require("./db");
// var index = require("./public/index");


// const fs = require("fs");


module.exports = function(app) {


// Establish Routes

app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  // app.get("/api/notes/:id", function (req, res) {
  //     res.json(req.params.id);
  //       });
        
app.post("/api/notes", function(req, res) {
  const newNote = req.body;
      if (notes.length === 0) {
      notes.push(req.body);
      res.json(true);
    } else {
    newNote.id = (notes[notes.length-1].id + 1)
    notes.push(req.body);
    res.json(true);
  }
{
    notes.push(req.body);
    res.json(false);
  }
});
},
app.delete("/api/notes/:id", function (req, res) {
  // res.json(req.params.id);
  //   });

    db.Notes.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(notes) {
        res.json(notes);
      });
  });
     

