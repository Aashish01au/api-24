### EXPRESS APPLICATION API-24 :-
# Permission in Application = 777
------------------------- [ ---------------------------- ] -----------------------------------
dwrx(Delete Write Read Execute)
    7 = dwrx
    6 = wrx
    5 = rx
    0 = none -

    Admin       Group       other/Guest
    7              6           4
    6              5           4

# Foler = 765
# fILE = 654
const fs = require("fs")
let path = "./uploaders/files/"
if(!fs.existsSync(path)){
    fs.chmodSync(path,"0777") // Change Mode Directory
    fs.chownSync(path,"sudo") // Change Owner Directory ---> sudo = admin
    fs.mkdirSync(path,{recursive:true})
}
const fileName = path+"user.json"

const users = [
    {
        name:"Aashish",
        role:"admin",
        status:"active"
    },
    {
        name:"Raju",
        role:"seller",
        status:"active"
    },
    {
        name:"Manoj",
        role:"admin",
        status:"active"
    }
]
// array to string
const userStr = JSON.stringify(users)
const newUsers = [
    {
        name:"Aakash",
        role:"admin",
        status:"active"
    },
    {
        name:"Ramesh",
        role:"seller",
        status:"inactive"
    },
    {
        name:"Mumkesh",
        role:"admin",
        status:"inactive"
    }
]
const newUserStr = JSON.stringify(newUsers)
//# file write operations
// open
    // search ==> open , create open
// write
// close

// ## Native System...
// fs.open(fileName,"w",(error,fd) =>{
//     if(error){
//         console.log(error)
//         console.log("Error opening file")
//     }else{
//         fs.write(fd,userStr,(errorObj,noBytes)=>{
//             if(errorObj){
//                 console.log(error)
//                 console.log("Rrror writing file")
//             }else{
//                 console.log("Successfully writen "+noBytes+"Bytes")
//             }
//         })
//         fs.close(fd)
//     }
// })
// // core system...
// const fd = fs.openSync(fileName,"w")
// if(!fd){
//     console.log("Error opening file")
// }else{
//     const noBytes = fs.writeSync(fd,userStr)
//     if(!noBytes){
//         console.log("Error writing in file")
//     }
//     fs.closeSync(fd)
// }
// operational System...
fs.writeFileSync(fileName,userStr)
//    console.log("file Writing Successfully..")
let readData= fs.readFileSync(fileName,{encoding:"utf8"})
readData= JSON.parse(readData)
//console.log(typeof readData)
console.log(readData)
------------------------- [ ---------------------------- ] -----------------------------------
(request,response)=>{
 // Server Application Express Application
//  console.log(request)
//  response.end("Hello World")
}
------------------------- [ ---------------------------- ] -----------------------------------
------------------------- [ ---------------------------- ] -----------------------------------
------------------------- [ ---------------------------- ] -----------------------------------
## HTPP
## REST API 
## MVC PATTERN
## EXPRESS 

## NODE API SERVER :-
    - API ==> APPLICATION PROGRAMMING LANGUAGE

# a. Request
        - Method
        - endpoint
            - protocol://domainLink:portNo/params?queryString
            # ports  : ports no. --> ports range --> 0-2^16-1 --> 0-65535
                http : 80
                https: 443 
                ftp  : 21
                sftp : 22
                smtp : 25

        - data
            - Url
                - params
                - query string

            - body
                - muiltipart/form-data
                - x-www-urlencoded
                - application/json
            
            - header
                - json - {key:value}

## Ways for connecting Server :- 
- http package
    - node server enviroment 
- express package
    - Server program :-
- http package
    - express application ( Ssrer Side)
    - scoket
    - graph
    - smtp


# SDLC Process [ Software Development Life Cycle]
    - Information gathering
## Ecommerce     
    - User
    - Products
    - Brands
    - Category 
    - Order
    - Review 
    - Blogs
    - Transaction

### Monolithic PATTERN
### MicroServices PATTERN
## Design MVC PATTERN :-
    - Model
        - DataBase Operation
    - View 
        - Presentation
    - controller
        - Business logic

i.e :-
    url ==> Login template
    SERVER :-
    Route ---> Controller ---> Model ---> DB Server
                    ---> View Controller
    Close Route ---> Middleware ---> Controller ---> Services / Repository ---> Model ---> DB Server
                    ---> View Controller
    

### EXPRESS JS :-

