
myApp.controller('testController',['$scope','$http',function($scope,$http){
console.log("hello from testController");


var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'google',

  // Optionnal depending of the providers
  httpAdapter: 'https', // Default
  apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

// Using callback
geocoder.geocode('29 champs elysée paris', function(err, res) {
  console.log(res);
});

// Or using Promise
geocoder.geocode('29 champs elysée paris')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });

// output :
[{
  latitude: 48.8698679,
  longitude: 2.3072976,
  country: 'France',
  countryCode: 'FR',
  city: 'Paris',
  zipcode: '75008',
  streetName: 'Champs-Élysées',
  streetNumber: '29',
  administrativeLevels: {
    level1long: 'Île-de-France',
    level1short: 'IDF',
    level2long: 'Paris',
    level2short: '75'
  },
  provider: 'google'
}]

}]);
