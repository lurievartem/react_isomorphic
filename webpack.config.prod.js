var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: path.join(__dirname, '/public/static/'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                BROWSER: JSON.stringify(true)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },

            { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
            { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
            { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
            { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
            { test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },
            {
                test: /\.js?$/,
                exclude: [/node_modules/, /dist/],
                include: __dirname,
                loader: 'babel-loader?presets[]=react-hmre!eslint-loader'
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    }
};
