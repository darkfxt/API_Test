/**
 * Created by MATIASJ on 5/12/2016.
 */
angular.module('hotelsListService', [])
    .service('Hoteles', [ '$http', function ( $http, $q, $timeout ){

        return {
            get : function getHotels() {

                return $http.get('/api/hotels');
            },
            create: function (hotelData) {
                return $http.post('/api/hotels', hotelData);
            }
        }
    }]);
