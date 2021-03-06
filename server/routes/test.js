var express = require('express');
var router = express.Router();
var pg = require('pg');
var NodeGeocoder = require('node-geocoder');
var connection = 'postgres://localhost:5432/omicron';


var options = {
  provider: 'google',
  // Optional depending of the providers
  httpAdapter: 'https', // Default
  apiKey: 'meowz', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

router.post('/', function(req, res, next) {
  //we have access to req,res and put anything onto them and send them to the next
  //matched file which is the next thing that matches (post(/));
  //do the api request here and next to the post to the server
  //controlling the process of middleware

//this first processes the inital API request and translates the address
//into lat/long and I add that to my req.body so i can store it on my DB

  var address = req.body
  address.latitude = 0;
  address.longitude = 0;

  geocoder.geocode(address.address, function(err, res) {
    address.latitude = res[0].latitude
    address.longitude = res[0].longitude
  }).then(function(){
    res.send(address);
  });

});

router.get('/', function(req, res) {
  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }

    client.query("SELECT * FROM businessaddress",
      function(err, result) {
        done();

        if(err) {
          console.log("select error: ", err);
          res.sendStatus(500);
        }
        // console.log('results: ', resultStuff);

        res.send(result.rows);
    });

  });
});



module.exports = router;
