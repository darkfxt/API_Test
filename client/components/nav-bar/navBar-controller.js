/**
 * Created by MATIASJ on 3/1/2017.
 */
angular.module('navBarController', [])
    .controller('navBarCtrl', function($scope){
        this.globalMenu = [ {'type':'icon','icon':'person','title':'ingresar'},
                            {'type':'image','url':'/static/img/logo-clubalmundo.svg','title':'club al mundo'},
                            {'type':'text','title':'Sucursales'},
                            {'type':'drop','title':'Llamanos'},
                            {'type':'text','title':'Ayuda'}];
        this.navBarLinks = [{'title':'Hoteles'}, {'title':'Vuelos'}, {'title':'Vuelo + Hotel'}, {'title':'Paquetes'},{'title':'Disney'},{'title':'Escapadas'}, {'title':'Seguros'}, {'title':'Autos'}, {'title':'Cruceros'},{'title':'OFERTAS'},{'title':'Más'}];
    });