require("dotenv").config()
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URL,{
    dbName:process.env.MONGODB_NAME,
    autoCreate:true,
    autoIndex:true
}).then(()=>{
    console.log("DB Server connected Successfully..")// then ===> always success Call
}).catch((e)=>{
    console.log("DB Server Connection Error..") // catch ===> always Failed/ Error call 
    console.log(e)
    process.exit(1) // Terminate the process
})