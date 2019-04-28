let homeModule = angular.module('homeModule', []);

homeModule.controller('myHeaderController', ['$scope', function($scope){
    $scope.buttonName1 = "Home";
    $scope.buttonName2 = "Books";
    $scope.buttonName3 = "Ebooks";
    $scope.buttonName4 = "News";
    $scope.buttonName5 = "About";
    $scope.buttonName6 = "Contact";
}]);

homeModule.controller('myFooterController', ['$scope', function($scope){
    $scope.elem1 = '@ 2019 Vision Library, Inc. All right reserved.';
    $scope.elem2 = 'Sitemap';
    $scope.elem3 = 'Privacy';
    $scope.elem4 = 'Term of Use';
    $scope.elem5 = 'Newsletter';
    $scope.elem6 = 'Social Media';
}]);

homeModule.directive('myHomeHeaderDirective', function(){
    return {
        restrict: 'EA',
        templateUrl: 'src/home/header.component.html',
        scope: false
    };

});

homeModule.directive('myHomeFooterDirective', function(){
    return {
        restrict: 'EA',
        templateUrl: 'src/home/footer.component.html',
        scope: false
    };

});