'use strict';

angular.module('canIUseMyCssApp')
  .controller('PropertyCtrl', function ($scope) {
    $scope.properties = [];

    $scope.addCSS = function(){
      var selectors = $scope.cssCode.split("{");
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
            var new_property = properties[y].split(":")[0].trim();
            if($scope.properties.lastIndexOf(new_property) === -1){
              // Only add if not in Array
              $scope.properties.push(new_property);
              console.info("added property: '" + new_property + "'");
            }
          }
        }
      }
      console.info("All the properties are: " + $scope.properties);
    };

  });
