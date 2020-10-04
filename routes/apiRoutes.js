//Data to load
var notesDB = require('../db/db.json')
var fs = require('fs');
//routing 
function apiRoute (app){

    //display to user the JSON of the Database
    app.get('/api/notes', function(req, res){
        res.json(notesDB);
    });

    app.post('/api/notes', function(req, res){
        notesDB.push(req.body);
    });

    app.delete('/api/notes/:id', function(req, res){
        
    });
};

module.exports = apiRoute;