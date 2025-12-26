const ValidationError = require("../exception/validation.exception")

const bodyValidator = (schema)=>{
    return async (req,res,next)=>{
        try {
            const data = req.body
            await schema.validateAsync(data)
            next()
        } catch (exception) {
            // validation failure..
            // formatting
            const errorMsg = {}
            exception.details.map((error)=>{
                console.log(error)
              //  errorMsg[error.path[0]] = error.message
                //  errorMsg[error.context.key] = error.message
                errorMsg[error.context.label] = error.message
            })
            //console.log(exception)
           // next({data:errorMsg,code:422, message:"Validation Failure"})
           next(new ValidationError({data:errorMsg}))
        }
    }
}

module.exports = bodyValidator