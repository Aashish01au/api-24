const auth = (req,res,next)=>{
   try {
     // TODO: LOGIN CHECK
     next() // next middleware
   } catch (exception) {
    next({code:401, message:"Unauthorized"})
    //res.status(401).json()
   }
}

module.exports = auth