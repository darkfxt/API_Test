/**
 * Created by MATIASJ on 27/12/2016.
 */
angular.module('orderSelectController', [])
    .controller('orderSelectCtrl', function($scope){
        var _self = this;
        this.orderProp = this.orderBy;
        console.log(this.orderBy);
        this.changedValue = function (item){
            _self.onChangeButton(item);
            console.log(this.orderBy);
            console.log(item);
            this.orderBy = item;
        }
    });