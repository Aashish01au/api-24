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
// const express = require("express")
// const authRouter = express.Router()
// Routing Level Middleware
const router = express.Router()
router.use((req,res,next)=>{
    console.log(" i am always Called")
    // ending any call
    next() // next middleware / next routing
})
// protected
// only loggedIn admin user can access
// /admin
// /admin/banner
// /admin/brand => can only be accessed by loggedIn User
const checkLogin = (req,res,next)=>{
    // login login check
    console.log("LoggedIn pass")
    next()
}
const adminCheck = (req,res,next)=>{
    // permission check if admin 
 console.log("permission pass")
 next()
}
router.post("/admin",checkLogin,adminCheck,(req,res,next)=>{
    // logic
    res.json({
        res:null,
        message:"Admin Profile",
        meta :null
    })
}
)
router.post("/admin/banner",checkLogin,adminCheck,(req,res,next)=>{
    // logic
    res.json({
        res:null,
        message:"Admin Banner Profile",
        meta :null
    })
}
)
router.post("/admin/brand",checkLogin,(req,res,next)=>{
    // logic
    res.json({
        res:null,
        message:"Admin Brand Profile",
        meta :null
    })
}
)
router.use(
    "/home",
(req,res,next)=>{
    console.log(" i am also Called")
    // res.json({
    //     result:"this is Home page",
    //     message:"Home Page",
    //     meta :null
    // })
    // ending any call
    next() // next middleware / next routing
},
(req,res,next)=>{
    console.log(" i am always excuted")
      // res.json({
    //     result:"this is Home page",
    //     message:"Home Page",
    //     meta :null
    // })
    // ending any call
    next() // next middleware / next routing
}
,(req,res,next)=>{
    res.json({
        result:"this is Home page",
        message:"Home Page",
        meta :null
    })
})
app.use(router)
------------------------- [ ---------------------------- ] -----------------------------------
        // 200 = " Successfull request"
         // 204 = " Sucessfully request but not sending data to user"
         // 400 = " Validation"
         // 401 = " Validsation Failure / unAuthenticated"
         // 403 = " Access Denied / unAutholrized"
         // 404 = " not Found"
         // 422 = " Validation "
------------------------- [ ---------------------------- ] -----------------------------------
     //    if(!data.name){
        //     //throw {data:{name:"Name is required"},code :422, message:"Validation Failure"}
        //     errorBody["name"]="Name is required"
        // }
        //    if(!data.email){
        //     //throw {data:{email:"email is required"},code :422, message:"Validation Failure"}
        //     errorBody["email"]="email is required"
        // }
        //     if(!data.role){
        //     //throw {data:{role:"role is required"},code :422, message:"Validation Failure"}
        //     errorBody["role"]="role is required"
        // }else if(!["admin","seller","customer"].includes(data.role)){
        //     //throw {data:{role:"role can only be admin or seller or customer"},code :422, message:"Validation Failure"}
        //     errorBody["name"]="role can only be admin or seller or customer"
        // }

        // if(Object.keys(errorBody).length>0){
        //     throw {data:errorBody,code:422,message:"validation Failure"}
        // }
    ------------------------- [ ---------------------------- ]-----------------------------------
     // validation failure..
            // formatting
            // const errorMsg = {}
            // exception.details.map((error)=>{
            //     console.log(error)
            //     errorMsg[error.path[0]] = error.message
            //     errorMsg[error.context.label] = error.message
            //     errorMsg[error.context.key] = error.message
            // })
            //console.log(exception)
            // next({data:errorMsg,code:422, message:"Validation Failure"})

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

# Register User (token/otp process)
---> Payload get(name,email,role,TODO:iamge)
        ---> User Register data
            ---> validate
                ---> Modeling otp code generate
                    ---> DB Store
                        ---> Email / SMS Sent
                            ---> Response Success

## Error Response :-
    422 ===> Validation Exception with body
    400 ===> Validation Exception without body

name:
    ---> String min: 2, max: 35, should be only alpha value with space, and phonnethic sounds characters(a)  

# Token / OTP  Flow :-
                                            status = inactive
- Data --> Validate --> (Token generate) --> Modeling --> DB Store --> Notification
                        --> Notification email
                        --> Notification email / SMS
                            --> email --> SMTP (Verify Sending Domain)
                            --> SMS --> Country / International GSM Services (Purchased package)
                                        --> NTC / NCELL / SMARTCELL 

# Login Flow :- 
- Data --> validate --> Db Check 
                        --> email , status = active

# node Server                   SMTP Server (live, testing ---> fake Server)
connection ---------------------> Acknowledgement
           <-------------------- 
Email Data ---------------------> verify sender ---> verify ---> Queue 
                                    ----> Process ===> Receiver Mail Send(Internet)
Email Send <-------------------- Acknowledgement <--- 

### STORAGE :-
## - File System Json, CSV, EXCELL
## - DATABASE Server :-
        - Format / Systematic Order 
        - Process Manipulate
                ---> Relational DBMS
                     ===> SQL ---> mySQL, Postgresql, mssql, oracle
                     - table
                        row-column
                    i.e :-
                        user ==> Seller 

                        product ==> Seller

                        product --> Order --> Customer

                        Seller :- i.e of e-commerce
                            Order
                                product
                                    seller 
                                customer

                        Customer :-
                ---> Non - Relational DBMS
                     ===> Non-SQL ---> mongodb, couchdb, orientdb, marklogic Server
                     - document
                     - Redundacy
### DATABASE Package:-
## MONGODB
    --> Store in the form of document(json)

    --> mongodb core driver
    --> mongoose ODM provider

## pgsql 
    --> pgsql, mysql, mssql, oracle
        --> sequelize
        --> typeorm(ts(typeScript))
        --> prism (js(javaScript)/ts(typeScript))
        --> ORM
        
## MONGODB Storaging Facility :-
    - Free
        ---> 1 account 512mb of storage
        ---> configure
            - 1vcpu , 128mb ram
            - mongodb latest host

    - enterprise
        - you can customize everything according to ur own need like ram, storage, cpu, etc...
    // VPS(virtual Private Server) 

## For connecting any Server we need :-
    protocol                        mongodb
    host                            127.0.0.1, localhost ==> ipv6 ---> default value ::1
    port                            27017
    auth        
        username                    not required
        password                    not required


# Protocol 
    localhost : mongodb
    Atals : mongodb+src
# Host 
    localhost : 127.0.0.1
    Atals : @aashish.ratepyj.mongodb.net/
# Port 
    localhost : 27017
    Atlas : 27017
# user 
    localhost : not needed
    Atals : <DBUserName>
# password 
    localhost : not needed
    Atals : <DBUserPassword>

# DataBase
    Table ---> Collection
    Row ---> Document
    (Dataset)
    Column ---> Key

# BSON Data Type (Binary Script Object Notion)
# CRUD
    Create :
        - insertOne(Object)
        - insertMany([Objects])

        e.g for Code :- 
            - <activeDbConnectionObj>.collection("users").insert() --> Depricated this function at Version 6 
            - <activeDbConnectionObj>.collection("users").insertOne()
            - <activeDbConnectionObj>.collection("users").insertMany()
        
        e.g for Shell :-
            - db.collection.insertOne()
            - db.collection.insertMany([{},{}...])
# Read 
    - find(filter,projection,options)
    - findOne(filter,projection,options)
# Update 
    - update(filter,updateBody,options)
    - updateOne(filter,updateBody,options)
# Delete 
    - delete(filter,projection,options)
    - deleteOne(filter,projection,options)
db.users.insertMany([
    {
            "name": "aashish",
            "email": "aashish+admin@gmail.com",
            "role": "admin",
            "file": "1768156837697-2xR4NI0vNF.jpg",
            "otp": null,
            "expiryTime": null,
            "status": "active",
            "authToken" :null,
            "password":"hash"
        } ,
        {
            "name": "aashish",
            "email": "balram+seller@gmail.com",
            "role": "admin",
            "file": "1768156837697-2xR4NI0vNF.jpg",
            "otp": null,
            "expiryTime": null,
            "status": "active",
            "authToken" :null,
            "password":"hash"
        } ,
        {
            "name": "aashish",
            "email": "balram+admin@gmail.com",
            "role": "admin",
            "file": "1768156837697-2xR4NI0vNF.jpg",
            "otp": null,
            "expiryTime": null,
            "status": "active",
            "authToken" :null,
            "password":"hash"
        } ,
        {
            "name": "aashish",
            "email": "aashish@gmail.com",
            "role": "admin",
            "file": "1768156837697-2xR4NI0vNF.jpg",
            "otp": null,
            "expiryTime": null,
            "status": "active",
            "authToken" :null,
            "password":"hash"
        } ,
        {
            "name": "aashish",
            "email": "aashish+custiomoer@gmail.com",
            "role": "admin",
            "file": "1768156837697-2xR4NI0vNF.jpg",
            "otp": null,
            "expiryTime": null,
            "status": "active",
            "authToken" :null,
            "password":"hash"
        } ,
        {
            "name": "aashish",
            "email": "aashish+seller@gmail.com",
            "role": "admin",
            "file": "1768156837697-2xR4NI0vNF.jpg",
            "otp": null,
            "expiryTime": null,
            "status": "active",
            "authToken" :null,
            "password":"hash"
        } 
]   )

db.users.insertOne({
            "name": "aashish",
            "email": "balram@gmail.com",
            "role": "admin",
            "file": "1768156837697-2xR4NI0vNF.jpg",
            "status": "active",
            "password":"hash"
        } )
### Filter 
    -> Where clause
        -> conditions
            -> json format

                e.g :- db.users.find({role:"seller",status:"active"})
                SQL :
                --> Select * From user Where role = "seller" AND Status == "active"

            $gt ===> greater than 
            $gte ===> greater than or equal to 
            $lt ===> less than
            $lte ===> less than or equal to
            $eq ===> equal to
            $ne ===> not equal to 
            $or ===> Or Operation 
            $and ===> And Operation 
            $in ===> In Operation
            $nin ===> Not in operation 

            i.e :-
            {<key>:{$ge:<value>}} //  $gt, $gte,  $lt,  $lte,  $eq,  $ne, 
            {<key>:{$in:[value]}}  // $in, $nin
            {$and:[                 // $and , $or
                {<key>:<value>},
                {<key>:<value>}
            ]} 
            OR
            {<key>:<value>,   
                <key>:<value>}
### Projection 
    {<key>:1 or 0} ==> 1 specify = true/ fetch, 0 specify = false/ do not select
        e.g:-
            db.users.find({},{name:1})
            ---> SELECT _ID, NAME form users
        e.g:-
            db.users.find({role:"admin"},{name:1,_id:0})
            ---> SELECT NAME form users where role = "admin"
### Optional
    {sort:{<key>:<1 or -1 or ASC or Desc or >},limit :<number>,skip:<number>,{upsert:true} // if not exist then  auto create data} 
    {<key>:1, -1, "String"}
        e.g:-
            db.users.find({},{name:1,_id:0},{sort:1}) 
                ---> SELECT NAME form users and giving data in ascending Order
            db.users.find({},{name:1,_id:0},{sort:-1})
                ---> SELECT NAME form users and giving data in descending Order
            db.users.find({},{name:1,_id:0},{sort:"asc"})
                ---> SELECT NAME form users and giving data in ascending Order
            db.users.find({},{name:1,_id:0},{sort:"asc"},{limit:2})
                ---> SELECT NAME form users and giving data in ascending Order and also giving only 2 data  
            db.users.find({},{name:1,_id:0},{sort:"asc"},{limit:2},{skip:3})
            
### ODM :- Object Document Module
        - Mongoose 
            - Model
        - Mongodb
            ---> table/ Column
            ---> App use
        
        - Mongoose 
            ---> ORM/ODM (Object Relational Module)
                    ---> Physical DB Server tables/collections ---> Data Structure Bind
### MODEL / Entity
    ---> table link with model class
    ---> Snake Case
        RULES :-
            1. Model Name ==> Singular form of Tables\ name
                e.g:-
                    collection/tables ===> users
                    Model Name ===> User
            2. All the property of model/entity ===> key/column name of table
                e.g:-
                    columnNames ===> name, email, role, password....
                    Model Properties ===> name, email, role, password....
            3. Every model/entity instance(object) will always points to a row in db
                e.g:-
                    User model name 
                    const userObj = new User() ---> Points to a new row in db
                    // insert/ save operation



