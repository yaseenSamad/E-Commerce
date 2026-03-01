export const successResponse = (req,res,result,statusCode = 200,message = 'success') => {
    res.status(statusCode).send({
        message: message,
        data: result
    })
}

export const errorResponse = (req,res,errorMsg,statusCode = 500,message = 'Failure') => {
    res.status(statusCode).send({
        message: message,
        errorMsg: errorMsg
    })
}