class AuthController{
    registerProcess=(req,res,next)=>{
         //email, password
        
            res.status(204).json({
                result:null,
                message:"User Register Successfully",
                meta:null
            })
    }
    verifyOtp = (req,res,next) => {
        //email, password
        res.json({
            result:null,
            message:"OTP Verified Successfully",
            meta:null
        })
    }

    activateToken = (req,res,next) => {
        //email, password
        const params = request.params
        // result client
        res.json({
            result:params,
            message:"User  Successfully Activated",
            meta:null
        })
    }

    forgetPassword = (req,res,next) => {
        //email, password
        res.end("This is forget password Page")
    }

    updatePassword = (req,res,next) => {
        //email, password
        res.end("This is register Page")
    }

    about = (req,res,next) => {
        res.end("This is About Page")
    }

    updateUserPassowrd = (req,res,next)=>{
        //userid = userId
        //userid
        res.end("This is user updated Page")
    }

    login = (req,res,next) => {
        //email, password
        res.end("This is Login Page")
    }

    logout = (req,res,next) => {
        //email, password
        res.end("This is logout Page")
    }

    profile = (req,res,next) => {
        //email, password
        res.end("This is user Profile Page")
    }

    updateUser = (req,res,next) => {
        //email, password
        res.end("This is update User Page")
    }

    deleteUser = (req,res,next)=>{
        //userid = userId
        //userid
        res.end("This is delete User Page")
    }
}

const authCtrl = new AuthController()
module.exports = authCtrl