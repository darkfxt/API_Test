/**
 * Created by MATIASJ on 26/12/2016.
 */
angular.module('imageSliderController',[])
    .controller('imageSlider-Ctrl', function ($scope) {
        $scope.images = this.slides;
        $scope.decorators = this.decorators;
        $scope.currentIndex = 0;

        $scope.next=function(){
            $scope.currentIndex<$scope.images.length-1?$scope.currentIndex++:$scope.currentIndex=0;
        };

        $scope.prev=function(){
            $scope.currentIndex>0?$scope.currentIndex--:$scope.currentIndex=$scope.images.length-1;
        };

        $scope.$watch('currentIndex',function(){
            $scope.images.forEach(function(image){
                image.visible=false;
            });
            $scope.images[$scope.currentIndex].visible=true;
        });
    });