myApp.controller('homeController',['$scope','$http','DataFactory','NgMap','$timeout', function($scope,$http,DataFactory,NgMap,$timeout){
console.log("hello from homeController");
$scope.dataFactory = DataFactory;

$scope.vm = this;

NgMap.getMap().then(function(map) {
  $scope.vm.map = map;
  console.log('this is in getMap',$scope.results);
});

function refreshData(){
  $scope.dataFactory.getThisData();
  $scope.results = $scope.dataFactory.getResults();
  $scope.$apply();
  console.log('data refreshed');
}
//
setInterval(refreshData, 2000);


$scope.test = $scope.dataFactory.getAddress();
console.log($scope.test);
var fuck = $scope.dataFactory.replaceArray();
console.log('this is homeController',fuck);
$scope.dataFactory.getThisData();
$scope.results = $scope.dataFactory.getResults();
console.log($scope.results);


$scope.vm.showDetail = function(e, location) {
   $scope.vm.location = location;
   $scope.vm.map.showInfoWindow('infoWindow', this.getPosition());  //put infoWindow at same point as marker
 };

 $scope.vm.showUserDetail = function(e, location) {
    $scope.vm.location = location;
    $scope.vm.map.showInfoWindow('userWindow', this.getPosition());  //put infoWindow at same point as marker
  };


}]);
