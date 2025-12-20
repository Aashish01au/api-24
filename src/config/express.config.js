const exprees = require("express")
// Routing
const authRouter = require("../app/auth/auth.router")

// Express Application
const app = exprees()

// router load
app.use("/auth",authRouter)


module.exports = app