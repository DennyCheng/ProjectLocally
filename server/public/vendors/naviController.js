myApp.controller("naviController", ["$scope",'$http','DataFactory','$location',function($scope,$http,DataFactory,$location) {
  console.log("hello from naviController");

  $scope.dataFactory = DataFactory;

  $scope.newAddress = {};
  $scope.stringAddress = '';
  $scope.modifiedAddress;
  $scope.distanceRadius;
  $scope.resultsArray = []; //this will hold all the results from my query
  $scope.booleanClick = false;

  /* Set the width of the side navigation to 250px */
$scope.openNav = function(){
    // document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.width = "15%";
    document.getElementById("meow").style.width = "85%";
    document.getElementById("meow").style.float = "right";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};

/* Set the width of the side navigation to 0 */
$scope.closeNav= function() {
    // document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.width = "0";
 document.getElementById("meow").style.marginLeft = "0";
 document.body.style.backgroundColor = "white";
 document.getElementById("meow").style.width = "100%";
 document.getElementById("meow").style.float = "none"
};

$scope.go = function go(){
  console.log("hello bitches");
  $location.path("/results");
};

//converts intaken form and concatenates it into a string
$scope.objectToString = function(object){
  console.log("within objectToString",$scope.stringAddress)
  $scope.stringAddress += (object.street+", "+object.city+", "+object.state+", "+object.zip)
  console.log('objectToString response', $scope.stringAddress);
};


//function that will generate lat/long and compare with DB of businesses N
$scope.submitAddress = function(){
  //submit address will take the string and shoot it into the factory

 $scope.objectToString($scope.newAddress);
 var string = $scope.stringAddress
 var address = {address:string};
 console.log('our address object is',address);

 console.log('the distance raidus is miles',$scope.distanceRadius)

 //converts miles inputed into meters (which proximity method needs)
 var radius = ($scope.distanceRadius / 0.00062137);
 console.log('the radius is',radius);
 $scope.dataFactory.retrieveResults(address,radius).then(function(){
   $scope.results = $scope.dataFactory.getResults();
   console.log('back on client',$scope.results);
  });
    $scope.stringAddress = '';
    $scope.newAddress = {};
    $scope.distanceRadius='';
    // $location.path("/results")
};

$scope.changeValue = function(){
  if($scope.booleanClick === true){
    $scope.booleanClick = false
  }
  else{
    $scope.booleanClick = true

  }
};


}]); //end of factory
