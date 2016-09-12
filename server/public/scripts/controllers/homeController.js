myApp.controller('homeController',['$scope','$http','DataFactory', function($scope,$http,DataFactory){
console.log("hello from homeController");
$scope.dataFactory = DataFactory;


}]);
