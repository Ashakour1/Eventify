const ErrorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode)

    const stack  = process.env.NODE_ENV === 'production' ? null : err.stack
    res.json({
        results : null,
        success: false,
        message: err.message,
        stack: stack
    })
}

export default ErrorHandler;