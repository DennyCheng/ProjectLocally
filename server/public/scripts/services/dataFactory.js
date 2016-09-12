myApp.factory('DataFactory', ['$http', function($http) {

var results = [];

  //take input from client controller and make request for me to get lat/long
  //once that returns I will have a get request within it so I can compare

var computeData = function(){
  var answer = geolib.isPointInCircle(
    {latitude: 51.525, longitude: 7.4575},
    {latitude: 51.5175, longitude: 7.4678},
    50);
    return answer
    };




    // PUBLIC API object
    return {
      testFun: function(){
      return computeData();
    }
  };
}]);
