const express = require("express")
const router = require("../routes/router")
const app = express()
    // body parsers
        //json
        //form-data
        //x-www-urlencoded
    // url params
    // url query
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use("/",router)

app.use((req,res,next)=>{
    next({code:404, message:"Page not found.."})
    // res.status(404).json({
    //     result:null,
    //     message: " Not Found",
    //     meta:null
    // })
})
//Error handling middleware
app.use((error,req,res,next)=>{
    console.log("GarbageCollector: ",error)
    let statusCode =  error.code ?? 500
    let result = error.data ?? null
    let message = error.message ?? "internal Server Error"

    // TODO : Error Manipulate
    // validation failed
    res.status(statusCode).json({
        result:result,
        message:message,
        meta:null
    })
})

module.exports = app