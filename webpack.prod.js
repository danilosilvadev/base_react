const path = require('path');
const optimize = require('webpack').optimize;
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

          
module.exports = {

    entry: {
        bundle: path.resolve(__dirname, 'src') + '/app/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [
            {
                test: /.js[x]?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: 'babel-loader',
            },
            {
                test: /\.scss|css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|ico|png|jpe?g|gif)$/,
                use: ['file-loader?name=[name].[ext]&outputPath=app/assets/images/',
                      'image-webpack-loader']
            },
        ]
    },
    plugins: [
        /*new optimize.UglifyJsPlugin(),
        new optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),*/
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('app.css')
    ]
};