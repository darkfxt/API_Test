/**
 * Created by MATIASJ on 5/12/2016.
 */
var express = require ('express');
var Router = express.Router();

var hotelsCtrl = require('./hotels').Controller;

// *** Rutas de mi API ***
Router.get('/', function( req, res ){
    res.render("index", {});
});

Router.get('/api/hotels', hotelsCtrl.findAllHotels);

Router.post('/api/hotels', hotelsCtrl.addHotel);

module.exports = Router;
