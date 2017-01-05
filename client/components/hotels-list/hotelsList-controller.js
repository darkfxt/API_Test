/**
 * Created by MATIASJ on 1/12/2016.
 */
angular.module('hotelsListController',[])
    .controller('hotelsListCtrl', ['$scope', '$http', 'Hoteles', '_', function($scope, $http, Hoteles, _) {

        var self = this;
        self.orderProperty = 'decorators.available';
        self.checkboxCtrl = {"All":true, "value1":1, "value2":2, "value3":3, "value4":4, "value5":5  };
        self.dFilter = [];
        self.selEstrellas = [ 1, 2, 3, 4, 5 ] ;
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




        this.refreshFilter = function (value){
            self.orderProperty = value.order;
            console.log(self.orderProperty);
        };

        this.refreshQuery = function (value){
            self.queryFilter = value.query;
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


        this.filterByStars = function ( value ){
            console.log(value.stars);

            self.selEstrellas.push(value.stars);
        };

        /*self.filterByPrice = function (  ){
            var prMin = $( "#slider-range" ).slider( "values", 0 );
            var prMax = $( "#slider-range" ).slider( "values", 1 );

        }*/

    }]);

