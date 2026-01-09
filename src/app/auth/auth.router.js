const authRouter = require("express").Router()
const auth = require("../../middleware/auth.middleware")
const permissionCheck = require("../../middleware/rbac.middleware")
const { ROLES } = require("../../config/const.config")
const authCtrl = require("./auth.controller")
const bodyValidator = require("../../middleware/validator.middleware")
const { registerSchema } = require("./auth.request")
const uploader = require("../../config/uploader.middleware")

// Register A user
authRouter.post("/register",
uploader.single("profile")
//uploader.array("conver")
//uploader.none()
,bodyValidator(registerSchema),authCtrl.registerProcess)
// Verify the OTP / Token
authRouter.post("/verify-otp",authCtrl.verifyOtp)
// password-set /activate user
authRouter.post("/activate/:token",authCtrl.activateToken)
// Send Email for Forget Password
authRouter.post("/forget-password",authCtrl.forgetPassword)
// set a new Password 
authRouter.post("/update-password/:token",authCtrl.updatePassword)
// EndPoint or Api
authRouter.use("/about",authCtrl.about)
authRouter.put("/set-password/:userId",authCtrl.updateUserPassowrd)
// login 
authRouter.post("/login",authCtrl.login)
// logout 
authRouter.get("/logout",auth,authCtrl.logout)
// user profile Access 
authRouter.get("/me",auth,authCtrl.profile)
// update user by id
authRouter.put("/user/:userId",auth,permissionCheck(ROLES.ADMIN),authCtrl.updateUser)

authRouter.delete("/set-password/:userId",authCtrl.deleteUser)


module.exports = authRouter