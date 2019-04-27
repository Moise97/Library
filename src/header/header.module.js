let headerModule = angular.module('headerModule', []);

headerModule.controller('myHeaderController', ['$scope', function($scope){
    $scope.masa = 'Home';
}]);

headerModule.directive('myHeaderDirective', function(){
    return {
        restrict: 'EA',
        templateUrl: 'src/header/header.html',
        templateUrl: 'src/header/header.html',
        scope: false
    };

});