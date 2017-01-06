/**
 * Created by MATIASJ on 6/1/2017.
 */
angular.module('starsFilterFilter', [])
    .filter('range', function() {
        return function(val, range) {
            range = parseInt(range);
            for (var i=0; i<range; i++)
                val.push(i);
            return val;
        };
    });