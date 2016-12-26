/**
 * Created by MATIASJ on 5/12/2016.
 */
const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var amenities = new Schema ({
    "name": String,
    "available": Boolean
});

var imagenes = new Schema ({
    "description": String,
    "url": String
});

const hotelSchema = new Schema ({
    name: String,
    stars: Number,
    price: Number,
    regimen: {type: String},
    imagenes: [imagenes],
    decorators: {type: Array, "default":[]},
    amenities: [amenities]
});

const hotelModel = mongoose.model('Hotel', hotelSchema);
module.exports = hotelModel;