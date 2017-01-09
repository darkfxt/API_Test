/**
 * Created by MATIASJ on 1/12/2016.
 */
angular.module('hotelsListController',[])
    .controller('hotelsListCtrl', ['$scope', '$http', 'Hoteles', '_', function($scope, $http, Hoteles, _) {

        var self = this;
        self.orderProperty = 'decorators.available';
        self.selEstrellas = [] ;
        
        Hoteles.get()
            .success( function ( data ){
                self.hotels = data;
                
                self.userMaxPrice = _.max(data, function ( hotel ){ return hotel.price.value }).price.value;
                
                self.userMinPrice = _.min(data, function ( hotel ){ return hotel.price.value }).price.value;

            });

        this.refreshFilter = function ( value ){
            self.orderProperty = value.order;
        };

        this.refreshQuery = function ( value ){
            self.queryFilter = value.query;
        };
        
    }]);

