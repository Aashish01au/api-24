const express = require("express")
const authRouter = express()
// Register A user
authRouter.post("/register",(request,response) => {
    //email, password
    response.end("This is register Page")
})
// Verify the Activation Token
authRouter.post("/verify-otp",(request,response) => {
    //email, password
    response.end("This is verify otp Page")
})
// password-set /activate user
authRouter.post("/activate/:token",(request,response) => {
    //email, password
    response.end("This is activation Page")
})
// Send Email for Forget Password
authRouter.post("/forget-password",(request,response) => {
    //email, password
    response.end("This is forget password Page")
})
// set a new Password 
authRouter.post("/update-password/:token",(request,response) => {
    //email, password
    response.end("This is register Page")
})
// EndPoint or Api
authRouter.use("/about",(request,response) => {
    response.end("This is About Page")
})
authRouter.put("/set-password/:userId",(request,response)=>{
    //userid = userId
    //userid
})
// login 
authRouter.post("/login",(request,response) => {
    //email, password
    response.end("This is Login Page")
})
// logout 
authRouter.get("/logout",(request,response) => {
    //email, password
    response.end("This is logout Page")
})
// user profile Access 
authRouter.get("/me",(request,response) => {
    //email, password
    response.end("This is user Profile Page")
})
// update user by id
authRouter.put("/user/:userId",(request,response) => {
    //email, password
    response.end("This is update User Page")
})
authRouter.delete("/set-password/:userId",(request,response)=>{
    //userid = userId
    //userid
})


module.exports = authRouter