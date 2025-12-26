const UnAuthorized = require("../exception/unAuthorized.exception")

const auth = (req,res,next)=>{
   try {
     // TODO: LOGIN CHECK
     next() // next middleware
   } catch (exception) {
    next(new UnAuthorized())
    //res.status(401).json()
   }
}

module.exports = auth