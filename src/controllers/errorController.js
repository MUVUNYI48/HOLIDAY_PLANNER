export const errorController = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    // err.status=err.status || err.status || err.status || err.status || err.
    // console.log(err.stack); this shows where error occurred
    err.status = err.status || 'error';

    res.status(err.statusCode).json({ status: err.status, message: err.message })
}

