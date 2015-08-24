(function() {
  'use strict';

  angular.module('club540', [

    // Core modules
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngMaterial',

    // Custom modules (app/modules/*)
    'ramda'
  ]).config(['$routeProvider', '$httpProvider', '$locationProvider', '$mdThemingProvider',
    function ($routeProvider, $httpProvider, $locationProvider, $mdThemingProvider) {

      $httpProvider.interceptors.push('FlashSvcInterceptor');

      $routeProvider.
        when('/', {
          templateUrl : '/pages/index',
          controller  : 'MainCtrl as mainCtrl'
        }).
        when('/users', {
          templateUrl : '/pages/users',
          controller  : 'UsersCtrl as usersCtrl'
        }).
        when('/tricktionary', {
          templateUrl : '/pages/tricktionary',
          controller  : 'TricktionaryCtrl as tricktionaryCtrl'
        }).
        when('/chat', {
          templateUrl : '/pages/chat',
          controller  : 'ChatCtrl as chatCtrl'
        }).
        otherwise({
          //redirectTo : '/'
        });

      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue-grey');

      $locationProvider.html5Mode(true);

    }]);

}());