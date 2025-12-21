const express = require("express")
// Routing
const authRouter = require("../app/auth/auth.router")

// Express Application
// Application Level Middleware
const app = express()
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
// router load
app.use("/auth",authRouter)


module.exports = app