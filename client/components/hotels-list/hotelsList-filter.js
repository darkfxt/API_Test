/**
 * Created by MATIASJ on 6/12/2016.
 */

angular.module('hotelsListFilter', [])
    .filter('filtrarEstrellas', function ( ) {
        return function( hotels, selEstrellas ) {
            var result = [];

            for ( var a = 0 ; a <= selEstrellas.length ; a++ ) {
                angular.forEach(hotels, function ( hotel ){
                    console.log(selEstrellas + '<br>' + hotel.stars);
                    //if ( hotel.stars == selEstrellas ){
                    if (hotel.stars == selEstrellas[a]){
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
                return hotel.price >= gt && hotel.price <= lt;
            });

            return hotels;
        }
    });
angular.module('hotelsListFilter')
    .filter('range', function() {
        return function(val, range) {
            range = parseInt(range);
            for (var i=0; i<range; i++)
                val.push(i);
            return val;
        };
    });
angular.module('hotelsListFilter')
    .filter('fancy-icons', function () {
        return function ( input ){
            if ( input == 'pool' )
                return ('<i data-ng-show="hotel.regimen == \'Solo habitación\'" class="fa fa-bed"></i>');
            else
                return ('\u2718');
        };
    });