describe('homeModuleUnitTest', function(){

    beforeEach(module('homeModule'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('test the headerController', function(){
       it('should set the buttonNames', function(){
           expect($scope.buttonName1).toEqual('Home');
       }) 
    });
});