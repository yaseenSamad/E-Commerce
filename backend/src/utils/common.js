export const successResponse = (req,res,result,statusCode = 200,message = 'success') => {
    res.status(200).json({
        status: statusCode,
        message: message,
        data: result
    })
}

export const errorResponse = (req,res,message = "Something went wrong",statusCode = 500,errorMsg = 'Error') => {
    res.status(statusCode).json({
        status: statusCode,
        message: message,
        error: errorMsg
    })
}

const adminAPIS = [

]