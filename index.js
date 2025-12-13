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

