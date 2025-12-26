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
let loginSchema = Joi.object({
    userName:Joi.string().email().required(),
    password:Joi.string().required()
})
module.exports = {
    registerSchema,
    loginSchema
}