myApp.controller('homeController',['$scope','$http','DataFactory', function($scope,$http,DataFactory){
console.log("hello from homeController");
$scope.dataFactory = DataFactory;

// $scope.test = $scope.dataFactory.getResults();
// console.log($scope.test);
$scope.test = $scope.dataFactory.getAddress();
console.log($scope.test);
$scope.results = $scope.dataFactory.getResults();
console.log($scope.results);

$scope.ngInclude = '#/results';

}]);
