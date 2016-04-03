export default (req, res, next) => {
    GLOBAL.navigator = {
        userAgent: req.headers['user-agent']
    }
    next();
};