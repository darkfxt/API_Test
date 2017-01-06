/**
 * Created by MATIASJ on 27/12/2016.
 */
angular.module('filterBoxController', [])
    .controller('filterBoxCtrl', ['$scope', function( $scope ){
        this.absMin = Math.round(this.priceMin * 0.8);
        this.absMax = Math.round(this.priceMax * 1.1);
    }]);