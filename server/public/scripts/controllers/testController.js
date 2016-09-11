
myApp.controller('testController',['$scope','$http',function($scope,$http){
console.log("hello from testController");

$scope.newAddress = {};
$scope.stringAddress = '';
$scope.modifiedAddress;
$scope.distanceRadius;

//converts intaken form and concatenates it into a string
$scope.objectToString = function(object){
  console.log("within objectToString",$scope.stringAddress)
  $scope.stringAddress += (object.street+", "+object.city+", "+object.state+", "+object.zip)
  console.log('objectToString response', $scope.stringAddress);
};


//function that will generate lat/long and compare with DB of businesses N
$scope.submitAddress = function(){

 $scope.objectToString($scope.newAddress);
 var string = $scope.stringAddress
 var address = {address:string};
 console.log('our address object is',address);

 console.log('the distance raidus is miles',$scope.distanceRadius)

 //converts miles inputed into meters (which proximity method needs)
 var radius = ($scope.distanceRadius / 0.00062137);
 console.log('the radius is',radius);

//API post to obtain input lat/long
  $http.post('/test', address)
    .then(function(data){
    console.log('POST /test', data)
    $scope.modifiedAddress = data;
    //returned address with lat/long
    console.log($scope.modifiedAddress.data.latitude);

    var intakeLatitude = $scope.modifiedAddress.data.latitude;
    var intakeLongitude = $scope.modifiedAddress.data.longitude;

//computes distance from intake from user and DB to generate list of "results"
    var distance = geolib.isPointInCircle(
      //intake lat/long from API
       {latitude: intakeLatitude, longitude: intakeLongitude},

       //these will be DB lat/long and iterate through it
      // {latitude: 44.825039, longitude: -93.349485}, (This is perkins in bloomington for sample search)
       {latitude: 44.825039, longitude: -93.349485},
       radius
     );

     //need to do GET request to obtain businesses from DB and put it in a loop to compare each businesses
     //and then push TRUE results into a $scope.results array so we can show them on the DOM.
     
    console.log('should be true or false',distance);
    $scope.stringAddress = '';
    $scope.newAddress = {};
    });

};


}]);
