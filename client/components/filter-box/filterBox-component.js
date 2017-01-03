/**
 * Created by MATIASJ on 27/12/2016.
 */
angular.module('filterBoxComponent', [])
    .component('filterBox', {
         templateUrl: '/static/components/filter-box/filterBox-template.html'
        ,controller: 'filterBoxCtrl'
        ,bindings:{
             priceMin: '='
            ,priceMax: '='
            ,query: '='
            ,onChangeQuery: '<'
            ,onChangePrice: '<'
            ,onLoad: '&'
        }
    });