//Data to load
var notesDB = require('../db/db.json')
var fs = require('fs');

//routing 
function apiRoute (app){

    //display to user the JSON of the Database
    app.get('/api/notes', function(req, res){
        res.json(notesDB);
    });

    //post request for application, also assigns an id so we can delete later
    app.post('/api/notes', function(req, res){

        notesDB.push(req.body);

        //make it so every item in the array gets the id incremented
        notesDB.forEach(function(note, i){
            note.id = i + 1
        });

        //write to the database the request by the user nad respond in return with the json
        fs.writeFile('./db/db.json', JSON.stringify(notesDB), function(){
            res.json(notesDB);
        }); 

    });

    //delete request from user when they wanna delete a note
    app.delete('/api/notes/:id', function(req, res){

        var noteID = req.params.id;

        //Target the note's id subtract one to get the index and remove it
        notesDB.splice(noteID - 1, 1);

        //Once we remove one we must reassign the the IDs to the DB by recalling the intial command to assign it
        notesDB.forEach(function(note, i){
            note.id = i + 1
        });

        //Show the remaining notes to user
        fs.writeFile('./db/db.json', JSON.stringify(notesDB), function(){
            res.json(notesDB)
        });


    });
};

module.exports = apiRoute;