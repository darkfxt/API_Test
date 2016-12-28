/**
 * Created by MATIASJ on 1/12/2016.
 */

angular.module('hotelsListController',[])
    .controller('hotelsListCtrl', ['$scope', '$http', 'Hoteles', '_', function($scope, $http, Hoteles, _) {
        var self = this;
        self.checkboxCtrl = {"All":true, "value1":1, "value2":2, "value3":3, "value4":4, "value5":5  };
        self.orderProperty = 'description.stars';
        self.selEstrellas = [ 1, 2, 3, 4, 5 ] ;
        $scope.noWrapSlides = false;


        Hoteles.get()
            .success( function ( data ){
                self.hotels = data;

                $scope.maxPrice = Math.round(_.max(data, function ( hotel ){ return hotel.price.value }).price.value * 1.1);
                $scope.userMaxPrice = _.max(data, function ( hotel ){ return hotel.price.value }).price.value;

                $scope.minPrice = Math.round(_.min(data, function ( hotel ){ return hotel.price.value }).price.value * 0.8);
                $scope.userMinPrice = _.min(data, function ( hotel ){ return hotel.price.value }).price.value;



            });

        $scope.refreshFilter = function (value){
            console.log(value);
        };


        self.setStars = function ( qId ) {
            if ( !qId ) {
                self.selEstrellas = [ 0, 0, 0, 0, 0 ] ;
                self.checkboxCtrl.All = false;
            } else {
                self.selEstrellas = [ 1, 2, 3, 4, 5 ] ;
                self.checkboxCtrl.All = true;
            }
        };


        self.filterByStars = function ( estrellas ){

        };

        self.filterByPrice = function (  ){
            var prMin = $( "#slider-range" ).slider( "values", 0 );
            var prMax = $( "#slider-range" ).slider( "values", 1 );

        }



    }]);

