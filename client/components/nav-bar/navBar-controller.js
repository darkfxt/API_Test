/**
 * Created by MATIASJ on 3/1/2017.
 */
angular.module('navBarController', [])
    .controller('navBarCtrl', function($scope){
        this.globalMenu = [{'title':'ingresar'}, {'title':'club al mundo'}, {'title':'sucursales'}, {'title':'llamanos'},{'title':'AYUDA'}];
        this.navBarLinks = [{'title':'Hoteles'}, {'title':'Vuelos'}, {'title':'Vuelo + Hotel'}, {'title':'Paquetes'},{'title':'Disney'},{'title':'Escapadas'}, {'title':'Seguros'}, {'title':'Autos'}, {'title':'Cruceros'},{'title':'OFERTAS'},{'title':'Más'}];
    });