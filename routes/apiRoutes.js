// Require/import the HTTP module

var notes = require("../db/db.json");

module.exports = function (app) {


  // Establish Routes

  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

 
  app.post("/api/notes", function (req, res) {
    const newNote = req.body;
    if (notes.length === 0) {
      notes.push(req.body);
      res.json(db);
    }
    else {
      newNote.id = (notes[notes.length - 1].id + 1);
      db.push(newNote);
      res.json(true);
    }
  
  });
  app.delete('/api/notes/:id', function (req, res) {
    deleteNote1= parseInt(req.params.id);
  const db = [];
 for(var i = 0; i < db.length; i++){
 
  if (notes.length === db) {
    db.push(notes[i]);
  notes = db;
}
        res.json(notes);
        break;
      }})};