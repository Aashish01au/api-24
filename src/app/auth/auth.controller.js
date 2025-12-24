class AuthController{
    registerProcess=(req,res,next)=>{
        try {
            // exception free
            // validaated..
            // next() // next midleware
            //nexxt({})
            throw ""
        } catch (exception) {
            console.log("RegisterFunc: ", exception)
            next({
                code:422, 
                data:{
                    name:"Name is requiredd"
                },
                message:"Validation Failure"
            })
            //  res.status(422).json({
            //     result:{
            //         name:"Name is required.."
            //     },
            //     message:"validation Failure..",
            //     meta:null
            // })
        }
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
        const query = req.query

        const body = req.body
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

        const params = req.params
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
        try {
            // userName, email
            // userName ..
        } catch (exception) {
             res.status(422).json({
                result:{
                    email:"User Does  not exist"
                },
                message:"validation Failure..",
                meta:null
            })
        }
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