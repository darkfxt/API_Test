/**
 * Created by MATIASJ on 27/12/2016.
 */
angular.module('orderSelectComponent', [])
    .component('orderSelect', {
         templateUrl: '/static/components/order-select/orderSelect-template.html'
        ,controller: 'orderSelectCtrl'
        ,bindings:{
             orderBy: '&'
        }
    });