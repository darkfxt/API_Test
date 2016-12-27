/**
 * Created by MATIASJ on 26/12/2016.
 */
angular.module('hotelDescriptionComponent', [])
    .component('hotelDescription', {
        templateUrl: '/static/components/hotel-description/hotelDescription-template.html',
        controller: 'hotelDescCtrl',
        bindings: {
            description: '='
        }
    });