const express = require("express")
const authRouter = express()
// Register A user
authRouter.post("/register",(req,res,next) => {
    //email, password
    res.json({
        result:null,
        message:"User Register Successfully",
        meta:null
    })
})
// Verify the OTP / Token
authRouter.post("/verify-otp",(req,res,next) => {
    //email, password
    res.json({
        result:null,
        message:"OTP Verified Successfully",
        meta:null
    })
})
// password-set /activate user
authRouter.post("/activate/:token",(req,res,next) => {
    //email, password
    const params = request.params
    // result client
    res.json({
        result:params,
        message:"User  Successfully Activated",
        meta:null
    })
})
// Send Email for Forget Password
authRouter.post("/forget-password",(req,res,next) => {
    //email, password
    res.end("This is forget password Page")
})
// set a new Password 
authRouter.post("/update-password/:token",(req,res,next) => {
    //email, password
    res.end("This is register Page")
})
// EndPoint or Api
authRouter.use("/about",(req,res,next) => {
    res.end("This is About Page")
})
authRouter.put("/set-password/:userId",(req,res,next)=>{
    //userid = userId
    //userid
})
// login 
authRouter.post("/login",(req,res,next) => {
    //email, password
    res.end("This is Login Page")
})
// logout 
authRouter.get("/logout",(req,res,next) => {
    //email, password
    res.end("This is logout Page")
})
// user profile Access 
authRouter.get("/me",(req,res,next) => {
    //email, password
    res.end("This is user Profile Page")
})
// update user by id
authRouter.put("/user/:userId",(req,res,next) => {
    //email, password
    res.end("This is update User Page")
})
authRouter.delete("/set-password/:userId",(req,res,next)=>{
    //userid = userId
    //userid
})


module.exports = authRouter