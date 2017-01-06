/**
 * Created by MATIASJ on 6/1/2017.
 */
angular.module('starsFilterController', [])
    .controller('starsFilterCtrl', function ($scope){
        $scope.selectedAll = true;
        this.estrellas = [
            {"value": 5},
            {"value": 4},
            {"value": 3},
            {"value": 2},
            {"value": 1}
        ];

        this.checkAll = this.$onInit = function () {
            angular.forEach(this.estrellas, function (item) {
                item.Selected = $scope.selectedAll;
            });
            $scope.selectedAll ? this.stars = [1,2,3,4,5] : this.stars.length = 0;
        };

        this.checkIfAllSelected  = function (cant, isSelected) {

            if (isSelected) {
                this.stars.push(cant);
            } else {
                var indice = this.stars.indexOf(cant);
                if ( indice >= 0){
                this.stars.splice(indice,1);
            }}
            this.onChangeStars;
            $scope.selectedAll = this.estrellas.every(function (item){
                    return item.Selected == true;
                })
        };

    });