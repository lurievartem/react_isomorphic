module.exports = function(config){
    config.set({
        browsers: [ 'PhantomJS' ], //Chrome
        singleRun: true,
        browserNoActivityTimeout: 60000,
        frameworks: ['mocha'],
        files: ['tests.webpack.js'],
        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-sourcemap-loader',
            'karma-webpack',
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'green',
                warning: 'cyan',
                error: 'red'
            }
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
}