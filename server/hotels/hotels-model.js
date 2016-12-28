/**
 * Created by MATIASJ on 5/12/2016.
 */
const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var amenities = new Schema ({
    "name": String,
    "available": Boolean
});

var description = new Schema ({
    "name": String,
    "regimen": String,
    "stars": Number,
    "amenities": [amenities]
});

var imagenes = new Schema ({
    "description": String,
    "url": String
});

var price = new Schema ({
    "value": Number,
    "currency": String,
    "pagaCuotas": Boolean,
    "pagaDestino": Boolean
});

const hotelSchema = new Schema ({
    description: description,
    decorators: {type: Array, "default":[]},
    imagenes: [imagenes],
    price: price
});

const hotelModel = mongoose.model('Hotel', hotelSchema);
module.exports = hotelModel;