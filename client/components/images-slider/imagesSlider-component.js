/**
 * Created by MATIASJ on 26/12/2016.
 */
angular.module('imageSliderComponent', [])
    .component('imageSlider', {
         templateUrl: '/static/components/images-slider/imagesSlider-template.html'
        ,controller: 'imageSlider-Ctrl'
        ,bindings: {
             slides: '='
            ,decorators: '<'
        }
    });
