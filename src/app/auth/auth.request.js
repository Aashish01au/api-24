const Joi = require('joi')
const registerSchema = Joi.object({
    name:Joi.string().min(2).max(35).required(),
    //.messages({
    //    "base.string.min":"Name should be atleast 2 character long"
   // }),
   // text@text.
    email:Joi.string().email({tlds:["gmail"]}).required(),
    role:Joi.string().regex(/^(admin|seller|customer)$/)
})
let otpverifySchema = Joi.object({
    email:Joi.string().email().required(),
    otp:Joi.string().min(6).required()
})
let loginSchema = Joi.object({
    userName:Joi.string().email().required(),
    password:Joi.string().required()
})
let passwordSetSchema = Joi.object({
    password:Joi.string().min(8).required(),
    confirmPassword:Joi.string().valid(Joi.ref("password")).required().messages({
        "any.only":"Password and confirmPassword must match"
    })

    
})


module.exports = {
    registerSchema,
    loginSchema,
    otpverifySchema,
    passwordSetSchema
}