const auth = (req,res,next)=>{
   try {
     // TODO: LOGIN CHECK
     next() // next middleware
   } catch (exception) {
    res.status(401).json()
   }
}

module.exports = auth