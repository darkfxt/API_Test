/**
 * Created by MATIASJ on 1/12/2016.
 */
angular.module('hotelsListController',[])
    .controller('hotelsListCtrl', ['$scope', '$http', 'Hoteles', '_', function($scope, $http, Hoteles, _) {

        var self = this;
        self.orderProperty = 'decorators.available';
        self.selEstrellas = [] ;
        $scope.noWrapSlides = false;

        console.log('hola mundo 2');

        Hoteles.get()
            .success( function ( data ){
                self.hotels = data;

                //self.maxPrice = Math.round(_.max(data, function ( hotel ){ return hotel.price.value }).price.value * 1.1);
                self.userMaxPrice = _.max(data, function ( hotel ){ return hotel.price.value }).price.value;

                //self.minPrice = Math.round(_.min(data, function ( hotel ){ return hotel.price.value }).price.value * 0.8);
                self.userMinPrice = _.min(data, function ( hotel ){ return hotel.price.value }).price.value;

            });




        this.refreshFilter = function ( value ){
            self.orderProperty = value.order;
            console.log(self.orderProperty);
        };

        this.refreshQuery = function ( value ){
            self.queryFilter = value.query;
        };

        this.filterByStars = function ( value ){
            console.log(value.stars);

        };

    }]);

