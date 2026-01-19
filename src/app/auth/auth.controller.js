require("dotenv").config()
const AppError = require("../../exception/app.exception")
const emailSvc = require("../../services/email.services")
const { randomString } = require("../../utilities/helpers")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
class AuthController{
    registerProcess= async(req,res,next)=>{
        try {
           const data = req.body
           data.file = req.file.filename
           //Activation 
           //data.activation = randomString(100) //  expiry ==> longer ---> 2hr
            data.otp = randomString(6) // expiry ==> short ---> 2min
            const timeAfterTwoHours = new Date(Date.now()+(60*2*60*100));
            // new Date()  // thur 01 feb, 2024 06:30:25.200T+5:45;
            data.expiryTime = timeAfterTwoHours 
            data.status = "inactive"
            // DataBase entry
            // DB Exception
            // TODO : User Entry
            let userRegister = data
            if(userRegister){
                // Success Call
                // https://abc.com ===> gmail.com ===> link ===> abc.com
                // https://localhost:5173/verify/token
              const response =  await emailSvc.sendEmail({
                    to:data.email,
                    subject:"Activate your Account",
                    message:`
                    Dear ${data.name}, </br>
                    Your OTP Code is : <b>${data.otp}, </b></br>
                    Your OTP Code is going to expire on : <b>${data.expiryTime} ,</b></br>
                    Please Verify Your Account within 2 hours </br>
                    <p> Regards,</p>
                    <p> System Administrator,</p>
                    <p> <small><em>please do not reply to this email.</em></small></p>
                    `
                })
                  // Flow Definition
            // DataBase Entry
            // Email Send
           res.json({
            result:userRegister,
            message:"test mail",
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
    verifyOtp = (req,res,next) => {
        //email, password
        // Send Verify OTP
        const userDetail = {
            "name": "aashish",
            "email": "aashish@gmail.com",
            "role": "admin",
            "file": "1768156837697-2xR4NI0vNF.jpg",
            "otp": "KS3SE7",
            "expiryTime": "2026-01-11T18:52:37.711Z",
            "status": "inactive",
            "authToken" :randomString(100)
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