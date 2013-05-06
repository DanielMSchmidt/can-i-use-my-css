'use strict';

angular.module('canIUseMyCssApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/property.html',
        controller: 'PropertyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
