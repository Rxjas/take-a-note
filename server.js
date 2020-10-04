//dependencies
var express = require("express");
var path = require("path");

//create the server and choose the port
var app = express();
var PORT = process.env.PORT || 3001

//handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Server is listening on port: ", PORT)
})