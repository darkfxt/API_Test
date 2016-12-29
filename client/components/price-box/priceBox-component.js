/**
 * Created by MATIASJ on 27/12/2016.
 */
angular.module('priceBoxComponent', [])
    .component('priceBox',{
        templateUrl: '/static/components/price-box/priceBox-template.html',
        controller: 'priceBoxCtrl',
        bindings:{
            price: '<'
        }
    });