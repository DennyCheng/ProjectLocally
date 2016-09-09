var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/public', express.static(__dirname+ '/public/'));


app.get('/', function(req,res){
  res.sendFile(__dirname + "/public/views/index.html");
});

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function(req,res,next){
  console.log("Listening on port:" + app.get("port"));
});
