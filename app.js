var express = require('express');
var app = express();
// var Intercom = require('intercom-client');
// var client = new Intercom.Client({ token: 'dG9rOmYzNzIxYTczXzk4NDVfNDdjZV9hMjA1XzFlY2M4ODY0NjU0NjoxOjA=' });

// set port
var port = process.env.PORT || 8080

// allow for static css html and js
app.use(express.static(__dirname));

//routes
app.get("/", function(req, res){
  res.render("index");
});

app.listen(port, function(){
    console.log("App is running on Heroku Server or localhost:8080!");
});
