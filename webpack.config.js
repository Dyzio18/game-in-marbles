const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devtool: '#source-map',
    module: {
        rules: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/'),
            exclude: '/node_modules/',
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'es2016', 'es2017']
            }
        }
      ]
    }
};

module.exports = config;