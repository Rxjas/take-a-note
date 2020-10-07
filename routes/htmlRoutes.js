//Dependency
var path = require('path')

//Routing for our server

function router (app){

    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "../public/index.html"));
      });

    app.get('/notes', function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
};

module.exports = router;