const fs = require("fs")
const fileName = "./user.json"
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

const userStr = JSON.stringify(users)

fs.open(fileName,"w",(error,fd)=>{
    if(error){
        console.log(error)
        console.log("Error Opening file")
    }else{
        //open 
        fs.write(fd,userStr,(errorObj,bytes)=>{
            if(errorObj){
                console.log(errorObj)
                console.log("Error while writing in file")
            }else{
                console.log("successfuly written"+bytes,"Butes")
            }

        })
        fs.close(fd)
    }
})

