/**
 * Created by MLJ on 5/12/2016.
 */
// *** Declaración de Requires ***
require ('dotenv').config();
var _ = require('underscore');
var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8081;
var morgan = require('morgan');
var bodyParser = require('body-parser');

mongoose.connect(process.env.URI_DB, function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});

// *** Configuración de la App ***
app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');
app.use('/static', express.static('./client')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// *** Router de la API ***
var apiRouter = require('./server/api-router');
app.use('/', apiRouter);

// *** Servidor de escucha ***
app.listen(port);
console.log("Tirando magia en el puerto: " + port);