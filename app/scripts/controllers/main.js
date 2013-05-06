'use strict';

angular.module('canIUseMyCssApp')
  .controller('PropertyCtrl', function ($scope) {
    $scope.properties = [];

    $scope.addCSS = function(){
      var lines = $scope.cssCode.split("{");
      var props = [];
      for(var x=0, len=lines.length; x < len; x++){
        var line = lines[x];
        var properties = line.split(";");
        for(var y=0, leng=properties.length; y < leng; y++){
          // go through all properties
          if((properties[y].indexOf(":") !== -1) && (properties[y].indexOf("}") === -1) && (properties[y].indexOf(".") !== 0) && (properties[y].indexOf("#") !== 0) && (properties[y].indexOf("/") !== 0) && (properties[y].indexOf("*") === -1)){
            // Only add if it has a : doesnt has a } or . or # or / or ' *'
            var new_property = properties[y].split(":")[0];
            if(props.lastIndexOf(new_property) === -1){
              // Only add if not in Array
              $scope.properties.push({value: new_property});
              console.info("added property: " + new_property);
            }
          }
        }
      }
      console.info("All the properties are: " + $scope.properties);
    };

  });
