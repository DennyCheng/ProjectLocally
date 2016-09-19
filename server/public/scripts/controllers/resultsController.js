myApp.controller('resultsController',['$scope','$http','DataFactory','NgMap',function($scope,$http,DataFactory,NgMap){
console.log("hello from resultsController");
$scope.dataFactory = DataFactory;

$scope.test = $scope.dataFactory.getResults();

$scope.test = $scope.dataFactory.getAddress();

$scope.results = $scope.dataFactory.getResults();




}]);
