myApp.factory('DataFactory', ['$http', function($http) {

var results = [];
//this will hold the returned results
var addressLatLong;

  //take input from client controller and make request for me to get lat/long
  //once that returns I will have a get request within it so I can compare

  var getResults = function(address,distance){
    //will take in address(string form) and distance the user requests business to be
    //will intake address from controller and send off for inital API and then compute results
    //return those results and make a GET request and do comparative logic to find results
    var promise = $http.post('/test',address).then(function(response){
      addressLatLong = response.data;
      console.log("results from API request is", addressLatLong);

      //start of GET request to get businesses
      $http.get('/test').then(function(response){
        console.log('GET response is',response);
        var business = response.data;
        for(var i = 0; i < business.length; i++){
          if(geolib.isPointInCircle({latitude: addressLatLong.latitude, longitude: addressLatLong.longitude},{latitude: business[i].blatitude, longitude: business[i].blongitude},distance)){
             results.push(business[i]);
             console.log(results);
          }//end of if statement
        };//end of for loop
      });

    });
    return promise;
  };




    // PUBLIC API object
    return {//start of return scope
      retrieveResults: function(address,radius){
        return getResults(address,radius);
      },
      getResults:function(){
        return results;
      }

  };//end of return scope
}]);
