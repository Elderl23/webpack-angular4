var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = (process.env.NODE_ENV = process.env.ENV = 'production');


const { WebpackWarPlugin } = require("webpack-war-plugin");

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'angularproyect',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
         new WebpackWarPlugin({
            archiveName: "angularproyect",
            webInf: 'config/web.xml',
            additionalElemens: [
                { path: 'context/context.xml', destPath: 'config/META-INF/context.xml'},
                // { path: 'package.json' },
                // { path: 'images', destPath: 'assets/images' }
            ]
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify(ENV)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false // workaround for ng2
            }
        }),

       
    ]
});