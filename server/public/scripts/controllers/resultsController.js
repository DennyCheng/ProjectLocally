myApp.controller('resultsController',['$scope','$http','DataFactory','NgMap',function($scope,$http,DataFactory,NgMap){
console.log("hello from resultsController");
$scope.dataFactory = DataFactory;

// $scope.test = $scope.dataFactory.getResults();
// // console.log($scope.test);
// $scope.test = $scope.dataFactory.getAddress();
// console.log('this is the testy test',$scope.test);
// $scope.results = $scope.dataFactory.getResults();
// console.log("these are the results bitches",$scope.results);



}]);
