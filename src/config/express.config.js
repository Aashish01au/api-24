const express = require("express")
// Routing
const authRouter = require("../app/auth/auth.router")
// Express Application
// Application Level Middleware
const app = express()
// router load
app.use("/auth",authRouter)


module.exports = app