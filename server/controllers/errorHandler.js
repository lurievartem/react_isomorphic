export default (err, req, res, next) => {
    const error = process.env.NODE_ENV !== 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: error
    });
};
