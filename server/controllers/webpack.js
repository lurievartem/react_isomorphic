import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config.dev';
import express from 'express';

const router = express.Router();

//set hot module reloading via webpack
if (process.env.NODE_ENV !== 'production'){
    const compiler = webpack(webpackConfig);
    router.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
    router.use(webpackHotMiddleware(compiler));
}

export default router;