/**
 * Created by MATIASJ on 2/1/2017.
 */
angular.module('hotelsMapComponent', [])
    .component('hotelsMap', {
        templateUrl: '/static/components/filter-box/hotels-map/hotelsMap-template.html'
        ,bindings: {
            title: '<'
        }
    });