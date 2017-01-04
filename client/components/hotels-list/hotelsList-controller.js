/**
 * Created by MATIASJ on 1/12/2016.
 */
angular.module('hotelsListController',[])
    .controller('hotelsListCtrl', ['$scope', '$http', 'Hoteles', '_', function($scope, $http, Hoteles, _) {

        var self = this;
        self.checkboxCtrl = {"All":true, "value1":1, "value2":2, "value3":3, "value4":4, "value5":5  };
        self.$onInit = function () {
            self.orderProperty = '-description.stars';
        };
        self.dFilter = [];
        self.selEstrellas = [ 1, 2, 3, 4, 5 ] ;
        $scope.noWrapSlides = false;
        self.onload = getAllHotels();
        console.log('hola mundo 2');
        function getAllHotels (){
            Hoteles.get()
            .success( function ( data ){
                self.hotels = data;

                $scope.maxPrice = Math.round(_.max(data, function ( hotel ){ return hotel.price.value }).price.value * 1.1);
                self.userMaxPrice = _.max(data, function ( hotel ){ return hotel.price.value }).price.value;

                $scope.minPrice = Math.round(_.min(data, function ( hotel ){ return hotel.price.value }).price.value * 0.8);
                self.userMinPrice = _.min(data, function ( hotel ){ return hotel.price.value }).price.value;

                //angular.bootstrap($('filter-box'));

            })}




        this.refreshFilter = function (value){
            self.orderProperty = value.order;
        };
        this.refreshQuery = function (value){
            self.queryFilter = value.query;
        };
        this.refreshPriceRange = function (value){
            self.userMaxPrice = value.max;
            self.userMinPrice = value.min;
            console.log(self.userMaxPrice);
            console.log(self.userMinPrice);
        };
        this.fbOnLoad = function (value) {
            getAllHotels()
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

