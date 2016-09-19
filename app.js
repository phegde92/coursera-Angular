(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', lunchBoxController);

lunchBoxController.$inject = ['$scope'];
function lunchBoxController($scope) {
    $scope.menu = "";
    $scope.message = "";
    $scope.totalLength = 0;
    $scope.fontColor="";
    $scope.borderColor="";
    $scope.checkIfTooMuch = function () {
        var comma = ',';
        if($scope.menu.length > 0) {
        var i;
        var menuWithoutEmptyItems = $scope.menu.replace(/^[,\s]+|[,\s]+$/g, '').replace(/,[,\s]*,/g, ',');
        var menuItems = menuWithoutEmptyItems.split(comma);
        $scope.totalLength = menuItems.length;
        }
        else {
            $scope.totalLength = 0;
        }
    }; 

    $scope.printMessage = function () {
        if($scope.totalLength>0) {
            if($scope.totalLength > 3) {
                $scope.message = "Too much!";
                $scope.fontColor = "color:green";
                $scope.borderColor="border-color:green";
            }
            else {
                $scope.message = "Enjoy!!";
                $scope.fontColor = "color:green";
                $scope.borderColor="border-color:green";
            }
        }
        else {
            $scope.message = "Please enter data first";
            $scope.fontColor = "color:red";
            $scope.borderColor="border-color:red";

        }
    };

}

})();
