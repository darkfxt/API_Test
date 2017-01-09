/**
 * Created by MATIASJ on 26/12/2016.
 */
angular.module('imageSliderController',[])
    .controller('imageSlider-Ctrl', function ($scope) {
        var _self = this;
        $scope.images = this.slides;
        $scope.decorators = this.decorators;
        $scope.currentIndex = 0;

        $scope.next=function(){
            var current = _self.slides.shift();
            _self.slides.push(current);
        };

        $scope.prev=function(){
            var current = _self.slides.pop();
            _self.slides.unshift(current);
        };
        
    });