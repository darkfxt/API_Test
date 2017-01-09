/**
 * Created by MATIASJ on 2/1/2017.
 */
angular.module('priceFilterComponent', [])
     .component('priceFilter', {
           templateUrl: '/static/components/filter-box/price-filter/priceFilter-template.html'
          ,bindings:{
                title: '<'
               ,priceMin: '='
               ,priceMax: '='
               ,absMin: '<'
               ,absMax: '<'
               ,onPriceChange: '&'
          }
     });