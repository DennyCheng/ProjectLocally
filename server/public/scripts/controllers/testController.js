
myApp.controller('testController',['$scope','$http',function($scope,$http){
console.log("hello from testController");

$scope.newAddress = {};
$scope.stringAddress = '';
$scope.modifiedAddress;
$scope.distanceRadius;
$scope.resultsArray = []; //this will hold all the results from my query

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

     $http.get('/test').then(function(response) {
     console.log('GET response is', response.data);
     //grabs the businesses from the DB so it compare input location vs business locations
     var business  = response.data;

     for (var i = 0; i < business.length; i++) {
       //computes distance from intake from user and DB to generate list of "resultsArray"
       if(geolib.isPointInCircle({latitude: intakeLatitude, longitude: intakeLongitude},{latitude: business[i].blatitude, longitude: business[i].blongitude},radius)){
          $scope.resultsArray.push(business[i]);
          console.log($scope.resultsArray);
       }//end of if statement
     };//this is the end of the for loop
     console.log('the results are here',$scope.resultsArray);
     });


    console.log('should be true or false',distance);
    $scope.stringAddress = '';
    $scope.newAddress = {};
    $scope.distanceRadius='';
    });
};

}]);
