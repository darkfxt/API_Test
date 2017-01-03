/**
 * Created by MATIASJ on 2/1/2017.
 */
angular.module('nameFilterComponent', [])
    .component('nameFilter', {
         templateUrl: '/static/components/filter-box/name-filter/nameFilter-template.html'
        ,bindings: {
             title: '<'
            ,hotelName: '='
            ,onChangeQuery: '&'
        }
    });