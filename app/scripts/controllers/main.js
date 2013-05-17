'use strict';

angular.module('canIUseMyCssApp')
  .controller('PropertyCtrl', function ($scope) {
    $scope.properties = [];
    $scope.search_done = false;
    $scope.active;

    $scope.activate = function(property){
        $scope.active = property;
    }

    $scope.isProperty = function(element){
      // Only a property if it has a : doesnt has a } or . or # or / or ' *'
      return ((element.indexOf(':') !== -1)
           && (element.indexOf('}') === -1)
           && (element.indexOf('.') !== 0)
           && (element.indexOf('#') !== 0)
           && (element.indexOf('/') !== 0)
           && (element.indexOf('*') === -1)
           && (element.indexOf('-') === -1));
    }
    $scope.addCSS = function(){
      //TODO: Refactor with underscore js
      var clear_properties = [];
      _.each($scope.cssCode.split('{'), function(selector){
        _.each(selector.split(';'), function(property){
          var property = property.trim();
          // go through all properties
          if($scope.isProperty(property)){
            clear_properties.push(property.split(':')[0].trim());
          }
        });
      });
      var unsorted_properties = _.uniq(clear_properties);
      $scope.properties = _.sortBy(unsorted_properties, function (name) {return name});
      console.info('All the properties are: ' + $scope.properties);
      $scope.active = $scope.properties[0];
      $scope.search_done = true;
    };

  });
