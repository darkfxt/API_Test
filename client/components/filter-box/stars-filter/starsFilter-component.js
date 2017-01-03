/**
 * Created by MATIASJ on 2/1/2017.
 */
angular.module('starsFilterComponent', [])
    .component('starsFilter', {
         templateUrl: '/static/components/filter-box/stars-filter/starsFilter-template.html'
        ,bindings: {
             title: '<'
            ,stars: '='
            ,onChangeStars: '&'
        }
    });