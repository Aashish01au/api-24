const express = require("express")
const router = require("../routes/router")
const app = express()
app.use("/",router)
    // body parsers
        //json
        //form-data
        //x-www-urlencoded
    // url params
    // url query
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
    res.status(statusCode).json({
        result:result,
        message:message,
        meta:null
    })
})

module.exports = app