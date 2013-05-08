'use strict';

angular.module('canIUseMyCssApp')
  .controller('PropertyCtrl', function ($scope) {
    $scope.properties = [];

    $scope.addCSS = function(){
      //TODO: Refactor with underscore js
      var selectors = $scope.cssCode.split("{");
      var clear_properties = [];
      for(var x=0, len=selectors.length; x < len; x++){
        var selector = selectors[x];
        var properties = selector.split(";");
        for(var y=0, leng=properties.length; y < leng; y++){
          var property = properties[y].trim();
          // go through all properties
          if((property.indexOf(":") !== -1)
              && (property.indexOf("}") === -1)
              && (property.indexOf(".") !== 0)
              && (property.indexOf("#") !== 0)
              && (property.indexOf("/") !== 0)
              && (property.indexOf("*") === -1)
              && (property.indexOf("-") !== 0)){
            // Only add if it has a : doesnt has a } or . or # or / or ' *'
            clear_properties.push(properties[y].split(":")[0].trim());
          }
        }
      }
      var unsorted_properties = _.uniq(clear_properties);
      $scope.properties = _.sortBy(unsorted_properties, function (name) {return name});
      console.info("All the properties are: " + $scope.properties);
    };

  });
