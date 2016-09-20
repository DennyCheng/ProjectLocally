var myApp = angular.module('myApp',['ngRoute','ngMap','ngAnimate','ui.bootstrap']);


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
    .when('/index',{
      templateUrl:'/public/views/index.html',
      controller:'naviController'
    })
    .when('/fun',{
      templateUrl:'/public/views/partials/forFun.html',
      controller:'funController'
    })
    .otherwise({
      redirectTo:'home'
    });
}]);
