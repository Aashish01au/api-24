const { MongooseError } = require("mongoose")
const AppError = require("../../exception/app.exception")
const emailSvc = require("../../services/email.services")
const UserModel = require("../user/user.model")
const { randomString } = require("../../utilities/helpers")

class AuthServices{
    transformdataToRegister=(payload,file=null)=>{
       try {
        const data = payload
        
        if(file){
            data.image = file.filename
        }
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
        return data
       } catch (exception) {
        throw exception
       }
    }
    registerUser = async (data)=>{
        try {
            // async
            const user = new UserModel(data)
            return await user.save() // insert Query ===> if data is one ===> save ==> insertOne()
            // if data is many ===> array ==> insertMany()
        } catch (exception) {
            //if(exception instanceof MongooseError){console.log("I AM HERE:")}
            if(+exception.code ===11000){
                throw new AppError({message:"Email Should Be Unique",code:400})
            }
            throw exception
        }
    }

    sendRegsiterEmail = async (email,name,otp,expiryTime)=>{
        try {
            // Success Call
                // https://abc.com ===> gmail.com ===> link ===> abc.com
                // https://localhost:5173/verify/token
                const response =  await emailSvc.sendEmail({
                    to:email,
                    subject:"Activate your Account",
                    message:`
                    Dear ${name}, </br>
                    Your OTP Code is : <b>${otp}, </b></br>
                    Your OTP Code is going to expire on : <b>${expiryTime} ,</b></br>
                    Please Verify Your Account within 2 hours </br>
                    <p> Regards,</p>
                    <p> System Administrator,</p>
                    <p> <small><em>please do not reply to this email.</em></small></p>
                    `
                })
                
                return response
        } catch (mailOtpExc) {
            // MailOptionalExceptional
            //todo: Debugging time
            //console.log(mailOtpExc)
            throw {message:"Error Sending Regestration Email", code:400}
        }
    }

    verifyOtpCode = async ({email,otp})=>{
        try {
            const userDetail = await UserModel.findOne({
                email:email,
                otp:otp
            })// {data} or null
            return userDetail
        } catch (exception) {
            throw exception
        }
    }
    updateUser = async (id,data)=>{
        try {
            let updated = await UserModel.findByIdAndUpdate(id,{
                $set:data
            })

            return updated
        } catch (exception) {
            throw exception
        }
    }
}

const authSvc = new AuthServices()
module.exports = authSvc