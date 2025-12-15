const http = require("http")
const app = require("./src/config/express.config")

const server = http.createServer(app)

server.listen(9005,"127.0.0.1",(err)=>{
    if(!err){
        console.log("Server is running on port number:9005")
        console.log("Browse Server at http://localhost:9005")
        console.log("press crl + c top dicsonnect the server..")
    }
})

