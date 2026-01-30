const mongoose = require("mongoose")
const addressSchema = new mongoose.Schema({
    stName: String,// Street Name
    lat:Number,// Latitude
    long:Number,// Longitute
    wardNo:String,
    ruralDev: String,
    district:String,
    state:String
})
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:3
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    password:String,
    otp:String,
    forgetToken :String,
    expiryTime : Date,
    authToken : String,
    image:String,
    address : {
        shipping:addressSchema,
        billing:addressSchema
    },
    role:{
        type:String, // DataTypes ==> String, Number, Date, ObjectId, Boolean, Schema 
        enum:["admin","seller","customer"],
        defalut:"customer",
        require:true
    },
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
    timestamps:true, //CreateddAt, UpdatedAt auto create
    autoCreate:true,
    autoIndex:true
})
//users
const UserModel =  mongoose.model("User",UserSchema)
module.exports = UserModel