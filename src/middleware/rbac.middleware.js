// router.post("/url",permissionCheck())
const permissionCheck = (role)=>{
    return (req,res,next)=>{
       try {
         // TODO: Check if role is in the currently loggedin user
        next() // next middleware
       } catch (exception) {
        res.status(403).json()
       }
    }
}

module.exports = permissionCheck