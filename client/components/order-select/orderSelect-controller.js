/**
 * Created by MATIASJ on 27/12/2016.
 */
angular.module('orderSelectController', [])
    .controller('orderSelectCtrl', function($scope){
        $scope.orderProp = this.orderBy;
        console.log(this.orderBy);
        $scope.changedValue = function (item){
            console.log(this.orderBy);
            console.log(item);
            this.orderBy = item;
        }
    });