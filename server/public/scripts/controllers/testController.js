
myApp.controller('testController',['$scope','$http',function($scope,$http){
console.log("hello from testController");
//new address object i will need to concatnate into address form
$scope.newAddress = {};
$scope.stringAddress = '';
$scope.modifiedAddress;
$scope.distanceRadius;

$scope.objectToString = function(object){
  console.log("within objectToString",$scope.stringAddress)
  $scope.stringAddress += (object.street+", "+object.city+", "+object.state+", "+object.zip)
  console.log('objectToString response', $scope.stringAddress);
};

$scope.submitAddress = function(){

 $scope.objectToString($scope.newAddress);
 var string = $scope.stringAddress
 var address = {address:string};
 console.log('our address object is',address);

 console.log('the distance raidus is miles',$scope.distanceRadius)

 //converts miles inputed into meters (which proximity method needs)
 var radius = ($scope.distanceRadius / 0.00062137);
 console.log('the radius is',radius);

  $http.post('/test', address)
    .then(function(data){
    console.log('POST /test', data)
    $scope.modifiedAddress = data;
    //returned address with lat/long
    console.log($scope.modifiedAddress.data.latitude);
    var intakeLatitude = $scope.modifiedAddress.data.latitude;
    var intakeLongitude = $scope.modifiedAddress.data.longitude;


    var distance = geolib.isPointInCircle(
       {latitude:intakeLatitude, longitude: intakeLongitude},
       {latitude: 51.5175, longitude: 7.4678},
       5000
     );
    console.log('should be true or false',distance);
    $scope.stringAddress = '';
    $scope.newAddress = {};
    });

};

// var distance = geolib.getDistance(
//     {latitude: 51.5103, longitude: 7.49347},
//     {latitude: "51° 31'  N", longitude: "7° 28' E"}
// );

// checks if 51.525, 7.4575 is within a radius of 5km from 51.5175, 7.4678
// returns T or F (boolean)
// var distance = geolib.isPointInCircle(
//     {latitude: 51.525, longitude: 7.4575},
//     {latitude: 51.5175, longitude: 7.4678},
//     5000
// );

//converts input distance
// var distance = geolib.convertUnit('mi',geolib.getDistance({latitude: 51.525, longitude: 7.4575},{latitude: 51.5175, longitude: 7.4678}));
//
// console.log(distance);

}]);
