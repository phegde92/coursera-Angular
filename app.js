(function () {
'use strict';


var x = "hello";
angular.module('myFirstApp',[])

.controller('MyFirstController', function($scope) {
$scope.name = "Pramod";
$scope.sayHello = function(){
    return "Blaah";
};
});
})();
