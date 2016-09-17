myApp.controller('homeController',['$scope','$http','DataFactory','NgMap', function($scope,$http,DataFactory,NgMap){
console.log("hello from homeController");
$scope.dataFactory = DataFactory;

$scope.vm = this;

NgMap.getMap().then(function(map) {
  $scope.vm.map = map;
});
// $scope.test = $scope.dataFactory.getResults();
// console.log($scope.test);
$scope.test = $scope.dataFactory.getAddress();
console.log($scope.test);
$scope.results = $scope.dataFactory.getResults();
console.log($scope.results);

$scope.testMethod = function(test){
  console.log("hit the testMethod");
};

$scope.vm.showDetail = function(e, location) {
   $scope.vm.location = location;
   $scope.vm.map.showInfoWindow('infoWindow', this.getPosition());  //put infoWindow at same point as marker
 };

 $scope.vm.showUserDetail = function(e, location) {
    $scope.vm.location = location;
    $scope.vm.map.showInfoWindow('userWindow', this.getPosition());  //put infoWindow at same point as marker
  };


// $scope.ngInclude = '#/results';

}]);
