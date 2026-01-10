const AppError = require("../exception/app.exception")
const nodemailer = require("nodemailer")
class EmailServices{
    transporter
    constructor(){
        try {
            this.transporter = nodemailer.createTransport({
                host:"sandbox.smtp.mailtrap.io",
                port:587,
                auth:{
                    user:"c50e1eb1e60f35",
                    pass:"3a16b17fcc3861"
                }
            })
        } catch (exception) {
            console.log("MailConnection: ",exception)
            throw new AppError({data:null, message:"Error Connecting SMTP Server",code:500})
        }
    }

    sendEmail = async ({to,subject, message})=>{
        try {
            const response = await this.transporter.sendMail({
                to:to,
                from:"noreply@mern-24.com",
                subject:subject,
                html:message
            })
            return response
        } catch (exception) {
            console.log("EmailSendError: ", exception)
            throw new AppError({data:null,message:"Email Send Error", code:500})
        }
    }
}

const emailSvc = new EmailServices()
module.exports = emailSvc