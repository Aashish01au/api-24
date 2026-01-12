require("dotenv").config()
const AppError = require("../exception/app.exception")
const jwt = require("jsonwebtoken")
const auth = (req,res,next)=>{
   try {
     // TODO: LOGIN CHECK
     let token = req.headers["authorization"]
     console.log(token)
     if(!token){
       throw new AppError({data:null, message : "Token is Required",code:401})
     }else{
      token = token.split(" ").pop()
      if(!token){
        // invalid Token
        throw new AppError({data:null, message : "Token is Required",code:401})
      }else{
        // Valid Token
        const data = jwt.verify(token,process.env.JWT_SECRET)
        console.log(data)
        //TODO : DB Validate
        const userDetails = {
          "_id":"hexacode--->ObjectId",
          "name": "aashish",
          "email": "aashish@gmail.com",
          "role": "admin",
          "file": "1768156837697-2xR4NI0vNF.jpg",
          "otp": null,
          "expiryTime": null,
          "status": "active",
          "authToken" :null,
          password:"$2b$10$8HuPEfs0btcLfjMHpLf.3uGP285q6FBxpvF3Z9RAS0XSzREfpDhYi"
      } 
        req.authUser = userDetails
        next()
      }
     }
     //next() // next middleware
   } catch (exception) {
    console.log("JWTEXCEPTION: ",exception)
    if(exception instanceof jwt.JsonWebTokenError){
      exception.data=null,
      exception.message=exception.message,
      exception.code = 401
    }
    next(exception)
    //res.status(401).json()
   }
}

module.exports = auth