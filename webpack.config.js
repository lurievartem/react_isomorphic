var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
            { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
            { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
            { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
            { test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },

            {
                test: /\.js?$/,
                exclude: [/node_modules/, /dist/],
                include: __dirname,
                loader: 'babel',
                query: {
                    stage: 0,
                    env: {
                        development:{
                            plugins: [ 'react-transform' ],
                            extra: {
                                'react-transform': {
                                    transforms: [
                                        {
                                            transform: 'react-transform-hmr',
                                            imports: [ 'react' ],
                                            locals:  [ 'module' ]
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
};
