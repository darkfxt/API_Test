/**
 * Created by MATIASJ on 5/12/2016.
 */
var express = require ('express');
var Router = express.Router();

var hotelsCtrl = require('./hotels').Controller;

module.exports = function (app) {

    // *** Rutas de mi API ***
    app.get('/', function( req, res ){
        res.render("index", {});
    });

    app.get('/api/hotels', hotelsCtrl.findAllHotels);

    app.post('/api/hotels', hotelsCtrl.addHotel);

};
