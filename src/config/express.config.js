const exprees = require("express")
// Express Application
const app = exprees()
// Routing
app.use("/login",(request,response) => {
    response.end("This is Login Page")
})
app.use("/about",(request,response) => {
    response.end("This is About Page")
})
app.use("/",(request,response) => {
    response.end("Hello World")
})

module.exports = app