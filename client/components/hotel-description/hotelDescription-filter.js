/**
 * Created by MATIASJ on 28/12/2016.
 */
angular.module('hotelDescriptionFilter', [])
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

angular.module('hotelDescriptionFilter')
    .filter('range', function() {
        return function(val, range) {
            range = parseInt(range);
            for (var i=0; i<range; i++)
                val.push(i);
            return val;
        };
    });
