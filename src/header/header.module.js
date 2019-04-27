let headerModule = angular.module('headerModule', []);

headerModule.controller('myHeaderController', ['$scope', function($scope){
    $scope.buttonName1 = "Home";
    $scope.buttonName2 = "Books";
    $scope.buttonName3 = "Ebooks";
    $scope.buttonName4 = "News";
    $scope.buttonName5 = "About";
    $scope.buttonName6 = "Contact";
}]);

headerModule.directive('myHeaderDirective', function(){
    return {
        restrict: 'EA',
        templateUrl: 'src/header/header.html',
        scope: false
    };

});