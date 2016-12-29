/**
 * Created by MATIASJ on 27/12/2016.
 */
angular.module('hotelClusterComponent', [])
    .component('hotelCluster', {
         templateUrl: '/static/components/hotel-cluster/hotelCluster-template.html'
        ,controller: 'hotelClusterCtrl'
        ,bindings: {
             hotelData: '<'
        }
    });