/**
 * Created by MATIASJ on 28/12/2016.
 */
angular.module('hotelDescriptionFilter', [])
    .filter('range', function() {
        return function(val, range) {
            range = parseInt(range);
            for (var i=0; i<range; i++)
                val.push(i);
            return val;
        };
    });