const authRouter = require("../app/auth/auth.router")
const router = require("express").Router()
router.use("/auth",authRouter)

module.exports = router