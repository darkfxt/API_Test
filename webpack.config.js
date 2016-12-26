/**
 * Created by MATIASJ on 20/12/2016.
 */
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/client/hotels-list',
    target: 'node',
    entry: {
        app: './hotelsList-module.js',
        vendor: ['angular', 'angular-rangeslider', 'underscore', 'angular-animate', 'angular-sanitize', 'angular-ui-bootstrap', 'jquery', 'mongoose', 'mongodb']
    },
    output: {
        path: __dirname + '/js',
        filename: 'hl.bundle.js',
        libraryTarget: 'commonjs'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    externals: [
        /^(?!\.|\/).+/i
    ]
};