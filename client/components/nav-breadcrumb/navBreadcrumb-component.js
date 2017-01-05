/**
 * Created by MATIASJ on 3/1/2017.
 */
angular.module('navBreadcrumbComponent', [])
    .component('navBreadcrumb', {
         templateUrl: '/static/components/nav-breadcrumb/navBreadcrumb-template.html'
        ,controller: 'navBreadcrumbCtrl'
        ,bindings: {
            hierarchyTree: '<'
        }
    });