/**
 * Created by MATIASJ on 3/1/2017.
 */
angular.module('navBarComponent', [])
    .component('navBar', {
         templateUrl: '/static/components/nav-bar/navBar-template.html'
        ,controller: 'navBarCtrl'
        ,bindings: {
             logoBrand: '<'
            ,labels: '<'
        }
    });