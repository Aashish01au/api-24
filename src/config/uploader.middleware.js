const multer = require("multer")
const fs = require("fs")
const { randomString } = require("../utilities/helpers")
const ValidationError = require("../exception/validation.exception")
const myStorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        // TODO: CUSTOM PATH
        const path = "./public/uploader/"
        if(!fs.existsSync(path)){
            fs.mkdirSync(path,{recursive:true})
        }
        cb(null,path)
    },
    filename:(req,file,cb)=>{
        // TODO UUID method just like server example : daraz banner image
        // fileName.ext 
        // jpg = filename.Jpg, fileName.png
        //a.name.jpg = ["a","name","jpg"]
        const ext = file.originalname.split(".").pop() 
        let fileName = Date.now() + "-"+ randomString(10) + "." +ext
        // 30 ChaR posibility = 30 * 62 (26 small alphabet + 26 big alphabet + 10 numbers)
        cb(null,fileName)
    }
})

const imageFilter = (req,file,cb)=>{
    const ext = file.originalname.split(".").pop() 
    if(["jpg","jpeg","png","svg","bmp","webp","gif"].includes(ext.toLowerCase())){
        cb(null,true)
    }else{
        cb(new ValidationError({data:{image:"Image Format Not Supported"}}))
    }
}

const uploader = multer({
    storage : myStorage,
    fileFilter:imageFilter,
    limits :{
        fileSize:2000000 // 6 digit for mb size
    }
})

module.exports = uploader