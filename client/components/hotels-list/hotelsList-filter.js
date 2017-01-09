/**
 * Created by MATIASJ on 6/12/2016.
 */

angular.module('hotelsListFilter', [])
    .filter('filtrarEstrellas', function ( ) {
        return function( hotels, selEstrellas ) {
            var result = [];

            for ( var a = 0 ; a <= selEstrellas.length ; a++ ) {
                angular.forEach(hotels, function ( hotel ){
                    if (hotel.description.stars == selEstrellas[a]){
                        result.push(hotel)
                    }
                });
            }

            return result;
        }
    });
angular.module('hotelsListFilter')
    // Genero un nuevo filtro para precios
    .filter('price', function ( ){
        return function ( hotels, gt, lt) {
            hotels = hotels.filter ( function ( hotel ) {
                return hotel.price.value >= gt && hotel.price.value <= lt;
            });
            return hotels;
        }
    });