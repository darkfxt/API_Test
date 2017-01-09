/**
 * Created by MATIASJ on 3/1/2017.
 */
angular.module('dateFilterComponent', [])
    .component('dateFilter', {
         templateUrl: '/static/components/date-filter/dateFilter-template.html'
        ,bindings: {
             loc: '<'
            ,from: '<'
            ,to: '<'
            ,pax: '<'
        }
    });