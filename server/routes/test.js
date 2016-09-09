var express = require('express');
var router = express.Router();
var pg = require('pg');
var NodeGeocoder = require('node-geocoder');
var connection = 'postgres://localhost:5432/omicron';


var options = {
  provider: 'google',
  // Optional depending of the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyDrTMzwjofj3pg4Z4wicyU277BvSlUJ0GE', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);


router.post('/', function(req, res) {
  var address = req.body
  address.latitude = 0;
  address.longitude = 0;



  geocoder.geocode(address.address, function(err, res) {
    address.latitude = res[0].latitude
    address.longitude = res[0].longitude
    console.log('within function',address);

    pg.connect(connection, function(err, client, done) {
      response.sendStatus(500);
      if(err) {
        console.log(err);
        res.sendStatus(500);
      }
      console.log('within pg',address);
      client.query("INSERT INTO useraddress (address,latitude,longitude)VALUES($1,$2,$3)",
        [address.address,address.latitude,address.longitude],
        function(err, result) {
          done();

          if(err) {
            console.log("query error: ", err);
            res.sendStatus(500);

          }
          // created!
          res.sendStatus(201);
      });
    });
  });
});

module.exports = router;
