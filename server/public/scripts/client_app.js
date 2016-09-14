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
