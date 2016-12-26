/**
 * Created by MATIASJ on 26/12/2016.
 */
var hotels = require('./hotels');
var hotelModel = hotels.Model;

function findAllHotels ( req, res ){
    hotelModel.find ( function (err, hotels){
        // Si encuentro un error devuelvo cod500 y el mensaje de error
        if( err )
            res.send( 500, err.message );
        // Si encuentro hoteles, los devuelvo en formato json con cod200
        console.log('GET /hotels');
        res.json( hotels );
    })
}

function addHotel (req, res) {
    // Dentro del req.body debería recibir el arreglo de hoteles
    hoteles = req.body;
    // Espero el resultado del promise para salvar todos con el metodo Create de Mongoose
    var promise = hotelModel.create(hoteles);
    promise.then(function (hoteles) {
        if (arguments[0]) throw arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var hotel = arguments[i];
        }
        res.json(hoteles);
    });
}
    /*console.log('POST');
    console.log(req.body);
    for (i = 0; i < req.body.length; i++){
        var hotel = new hotelModel({
            name:    req.body.name,
            stars: 	  req.body.stars,
            price:  req.body.price,
            imagenes: req.body.imagenes,
            amenities: req.body.amenities,
            regimen: req.body.regimen,
            decorators: req.body.decorators
        });
    }


    hotel.save( function( err, hotelNew ) {
        if(err)
            return res.send(500, err.message);

        res.status(200).jsonp(hotelNew);
    });
}*/

module.exports = {
    addHotel: addHotel(),
    findAllHotels: findAllHotels()
}
