/**
 * Created by MATIASJ on 26/12/2016.
 */
var hotelModel = require('./hotels-model');

var findAllHotels = function findAllHotels ( req, res ){

    hotelModel.find ( function ( err, hotels ){
        // Si encuentro un error devuelvo cod500 y el mensaje de error
        if( err )
            res.send( 500, err.message );
        // Si encuentro hoteles, los devuelvo en formato json con cod200
        console.log('LOG GET /api/hotels');
        res.json( hotels );
    })
};

var addHotel = function addHotel (req, res) {
    // Dentro del req.body debería recibir el arreglo de hoteles
    hoteles = req.body;

    hotelModel.insertMany(hoteles)
    // Espero el resultado del promise para salvar todos con el metodo Create de Mongoose
        .then(function (newHoteles){
            res.json(newHoteles);
        })
        .catch( function ( err ){
            res.send(500, err.message);
        });
};

module.exports = {
    addHotel: addHotel,
    findAllHotels: findAllHotels
};
