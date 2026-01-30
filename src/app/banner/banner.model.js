const mongoose = require("mongoose")
const BannerSchema = new mongoose.Schema({
    title :{
        type:string,
        require:true,
        min:3
    },
    image:{
        type:String,
        require:true
    } ,
    link: String,
    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive",
        require:true
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",//model name
        default:null,
        require:true
    },
    updatedBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",//model name
        default:null,
        require:true
    }
},{
    timestamps:true,
    autoCreate:true,
    autoCreate:true
})
const BannerModel =  mongoose.model("Banner",BannerSchema)
module.exports = BannerModel