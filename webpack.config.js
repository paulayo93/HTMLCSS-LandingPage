const webpack =  require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = { 
    entry: './app.js',
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: { 
        rules: [ 
            { 
               test: /\.(es6|js)$/,
               exclude: [/node_modules/, /test/, /backstop_data/],
               loader: "babel-loader",
            },
            { 
                test: /\.css$/,
                use: 'css-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|ttf|eot|gif|svg)$/i,
                exclude: /node_modules/,
                loader: 'url-loader?limit=8192' 
            },

        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin( { 
            template: 'index.html'
        })
    ], 
    resolve: { 
        extensions: [ ' ', '.js', '.es6']
    }
}