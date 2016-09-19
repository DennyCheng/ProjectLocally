myApp.controller("naviController", ["$scope",'$http','DataFactory','$location',function($scope,$http,DataFactory,$location) {
  console.log("hello from naviController");

  $scope.dataFactory = DataFactory;

  $scope.newAddress = {};
  $scope.stringAddress = '';
  $scope.modifiedAddress;
  $scope.distanceRadius;
  $scope.resultsArray = [];
  $scope.booleanClick = false;


$scope.openNav = function(){

    document.getElementById("mySidenav").style.width = "15%";
    document.getElementById("meow").style.width = "85%";
    document.getElementById("meow").style.float = "right";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};

/* Set the width of the side navigation to 0 */
$scope.closeNav= function() {

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("meow").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("meow").style.width = "100%";
    document.getElementById("meow").style.float = "none"
};

$scope.go = function go(){
  $location.path("/results");
};

//converts intaken form and concatenates it into a string
$scope.objectToString = function(object){
  $scope.stringAddress += (object.street+", "+object.city+", "+object.state+", "+object.zip)
};



$scope.submitAddress = function(){
 $scope.objectToString($scope.newAddress);
 var string = $scope.stringAddress
 var address = {address:string};

 //converts miles inputed into meters (which proximity method needs)
 var radius = ($scope.distanceRadius / 0.00062137);
 console.log('the radius is',radius);
 $scope.dataFactory.retrieveResults(address,radius);
 $scope.dataFactory.elimnatePrevious();
    $scope.stringAddress = '';
    $scope.newAddress = {};
    $scope.distanceRadius='';
};

$scope.changeValue = function(){
  if($scope.booleanClick === true){
    $scope.booleanClick = false
  }
  else{
    $scope.booleanClick = true
  }
};

$scope.fresh = function(){
  $scope.dataFactory.getRefresh();
};

}]);
