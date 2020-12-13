// Require/import the HTTP module

var notes = require("../db/db.json");

module.exports = function (app) {


  // Establish Routes

  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

 
  app.post("/api/notes", function (req, res) {
    const newNote = req.body;
    if (notes.length === 0) {
      notes.push(req.body);
      res.json(true);
    } else {
      newNote.id = (notes[notes.length - 1].id + 1);
      notes.push(req.body);
      res.json(true);
    }
  
  });
  app.delete('/api/notes/:id', function (req, res) {
    res.json(req.params.id);
var id = req.params.id.toString();
   var i;
    for (i=0; i < notes.length; i++) {
      if(notes[i].id == id){
        res.send(notes[i]);
   
    notes.splice(i, 1);
        console.log("Note deleted");
        break;
      }}
  }
  
);
    };