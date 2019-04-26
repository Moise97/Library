// create a new module called 'loginModule' and save
// a reference to it in a variable called loginModule
var loginModule = angular.module('loginModule', []);

// use the loginModule variable to
// configure the module with a controller
loginModule.controller('myLoginController', ['$scope', function ($scope) {
    $scope.title = "Library";
}]);

