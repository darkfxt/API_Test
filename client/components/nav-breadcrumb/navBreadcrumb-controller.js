/**
 * Created by MATIASJ on 5/1/2017.
 */
angular.module('navBreadcrumbController', [])
    .controller('navBreadcrumbCtrl', function($scope){
        var cusBreadcrumb = [{'description':'Home'},{'description':'Hoteles'},{'description':'Madrid'}];
        this.hierarchyTree = cusBreadcrumb;
    });