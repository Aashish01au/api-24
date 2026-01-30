require("dotenv").config()
const AppError = require("../../exception/app.exception")
const emailSvc = require("../../services/email.services")
const { randomString } = require("../../utilities/helpers")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authSvc = require("./auth.services")
const e = require("express")
class AuthController{
    registerProcess= async(req,res,next)=>{
        try {
           const data = authSvc.transformdataToRegister(req.body,req.file)
            const userRegister = await authSvc.registerUser(data)
            if(userRegister){
               await authSvc.sendRegsiterEmail(data.email,data.name,data.otp,data.expiryTime)
                  // Flow Definition
            // DataBase Entry
            // Email Send
           res.json({
            result:userRegister,
            message:"Your account has been successfully regisered. Please check your email to activate your account",
            meta:null
           })
            }else{
                // Call Failed 
                throw new AppError({data:null, message:"Validation Failure", code : 400})
            }
          
        } catch (exception) {
            console.log("RegisterFunc: ", exception)
            next(exception)
            //  res.status(422).json({
            //     result:{
            //         name:"Name is required.."
            //     },
            //     message:"validation Failure..",
            //     meta:null
            // })
        }
    }
    verifyOtp = async (req,res,next) => {
        //email, password
        // Send Verify OTP
        // const userDetail = {
        //     "name": "aashish",
        //     "email": "aashish@gmail.com",
        //     "role": "admin",
        //     "file": "1768156837697-2xR4NI0vNF.jpg",
        //     "otp": "KS3SE7",
        //     "expiryTime": "2026-01-11T18:52:37.711Z",
        //     "status": "inactive",
        //     "authToken" :randomString(100)
        // } 
        try {
            const {email,otp} = req.body
            const userdetail = await authSvc.verifyOtpCode({
            email:email,
            otp:otp
                })
            if(!userdetail){
                next({message:"incorrect OTP", code:400})
            }else{
                const now = Date.now()  // gives you TimeStamp 
                const expiryTime = userdetail.expiryTime.getTime() // getTime() ===> Convert time into UTC
                if(expiryTime<now){
                    throw new AppError({message:"OTP is expired // Token is Expired", code:400})
                }else{
                    const token = randomString(100)
                    const response= await authSvc.updateUser(userdetail._id,{
                        authToken:token,
                        expiryTime:new Date(Date.now()+(60*2*60*1000)),
                        otp:null
                    })

                  if(response){
                    res.json({
                        result:token,
                        message:"OTP code verified",
                        meta:null
                    })
                  }else{
                    throw new AppError({message:"User Does not found", code:400})
                  }
                }
            }
        } catch (exception) {
            console.log("VerifyOtp:",exception)
            next(exception)
        }
        res.json({
            result:userDetail,
            message:"Your OTP has Verified",
            meta:null
        })
    }

    activateToken = (req,res,next) => {
        try {
        //email, password
        // const params = request.params
        // const query = req.query
        // const body = req.body
        // result client
        const token = req.params.token
        const password = req.body.password
        const hash = bcrypt.hashSync(password,10)
        const userDetail = {
            "name": "aashish",
            "email": "aashish+admin@gmail.com",
            "role": "admin",
            "file": "1768156837697-2xR4NI0vNF.jpg",
            "otp": null,
            "expiryTime": null,
            "status": "active",
            "authToken" :null,
            "password":hash
        } 
        // bcrypt
        res.json({
            result:userDetail,
            message:"Your Password has been set successfully",
            meta:null
        })
        } catch (exception) {
            console.log(exception)
            throw new AppError({data:exception, message:"Activation Failed", code : 500})
        }
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

    login = async (req,res,next) => {
        try {
            // userName, email
            // userName ..
            let data = req.body
            // TODO : DB Details
            let userDetails = {
                "_id":"hexacode--->ObjectId",
                "name": "aashish",
                "email": "aashish@gmail.com",
                "role": "admin",
                "file": "1768156837697-2xR4NI0vNF.jpg",
                "otp": null,
                "expiryTime": null,
                "status": "active",
                "authToken" :null,
                "password":"$2b$10$8HuPEfs0btcLfjMHpLf.3uGP285q6FBxpvF3Z9RAS0XSzREfpDhYi"
            } 

            const verify = bcrypt.compareSync(data.password, userDetails.password)
            if(verify){
                // TODO : JWT Generate
                const playLoad = {id:userDetails._id}
                //const signature = "secret"
                const token = jwt.sign(playLoad,process.env.JWT_SECRET,{
                    // you can send any data type like number, string, date&time --> default time = 3hr
                    expiresIn:Date.now()+7200000,
                   // algorithm:"ES512"
                })
                const refreshToken = jwt.sign(playLoad,process.env.JWT_SECRET,{
                    // you can send any data type like number, string, date&time --> default time = 3hr
                    expiresIn:"1 day",
                   // algorithm:"ES512"
                })
                res.json({
                    result:{
                        token:token,
                        type : "Bearer",
                       refreshToken:refreshToken 
                    },
                    message:"You are loggedIn Succeessfully",
                    meta :null
                })
            }else{
                throw new AppError({data:null, message:"Credentails Does not matched",code:400})
            }
        } catch (exception) {
            console.log("Login:",exception)
             next(exception)
        }
    }

    logout = (req,res,next) => {
        //email, password
        res.end("This is logout Page")
    }

    profile = (req,res,next) => {
        //email, password
        let user = req.authUser
        //res.end("This is user Profile Page")
        res.json({
            result:user,
            message:"User profile",
            meta:null
        })
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