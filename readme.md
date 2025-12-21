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

## RESPONSE FORMAT :-
    - should be in json format
    - the json should contain :-
       ```{
            result : <data type any>
            message: <String>
            meta : null | object
        }```

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
    - Banner    
        - CRUD
        - detail by id
        - list all 
        - list by home
    - User
        - CRUD
        - detail by id
        - list all 
        - list all based on roles
    - Products
        - CRUD
        - detail by id
        - list all filter
        - list all baned on saller
    - Brands
        - CRUD
        - detail by id
        - list all by brands
        - product list
    - Category
        - CRUD 

    - Order
        - CRUD
    - Review 
        - CRUD
    - Blogs
        - CRUD
    - Transaction
        - CRUD
    - Offer
        - CRUD
    - Chat online
        - CRUD
    - Multi User Access
        - CRUD

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
    .use("url",callBackFunction(request,response))

### MIDDLEWARE :-
- Every function/actions mounting on express's app is a middleware
- At least contains 3 arguments or else 4
    - first : always request or error object
    - second : always response or request
    - third : always next(cb/ callback function) or response
    - fourth : nothing or next scope(cb)

    e.g (req,res,next)
    or
    (error,req,res,next)
a. Application Level Middleware
b. Routing Level Middleware

### REST API :- Representational Stateless Transfer
    CRUD
        - Create
            - post("url",callBackFunction(request,response))
        - Read
            //url
            data
            - get("url",callBackFunction(request,response))
        - Update
            - put("url",callBackFunction(request,response)), patch("url",callBackFunction(request,response))
        - Delete
            - delete("url",callBackFunction(request,response))

## Project Module :-
## Auth(Authenticate) And Authorization :-
    - Register
        - post request ==> endpoint /register
    - Verify Token / OTP
        - get request ==> endpoint /verify-token/:otp
        or otp verify
        - post request ==> endpoint /verify-otp
    - User Activate
        - post request ==> endpint /user-activate
    - Forget Password 
        - post request ==> endpoint /forget-password
    - Reset Password
        - post request ==> endpoint /reset-password
    - Login // Auth(Authenticate)
        - post request ==> endpoint /login
    - Logout
        - get request ==> endpoint /logout
    - Profile Access
        - get request ==> endpoint /me
    - User Update
        - put request ==> endpoint /user-update/:userId

