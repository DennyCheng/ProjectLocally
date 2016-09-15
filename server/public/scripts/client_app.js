var myApp = angular.module('myApp',['ngRoute','ngMap']);


myApp.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/home',{
      templateUrl:'/public/views/partials/homeMap.html',
      controller:'homeController'
    })
    .when('/test',{
      templateUrl:'/public/views/partials/test.html',
      controller:'testController'
    })
    .when('/results',{
      templateUrl:'/public/views/partials/resultsPage.html',
      controller:'resultsController'
    })
    .otherwise({
      redirectTo:'home'
    });
}]);

myApp.controller("naviController", ["$scope",function($scope) {
  console.log("hello from naviController");
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

}]);
