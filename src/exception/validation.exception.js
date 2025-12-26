class ValidationError extends Error{
    constructor({data=null,message="Validation failure"}){
        super() // used because of inheriate === extends
       // return {data,message,code}
        this.data = data
        this.code = 422 
        this.message= message
    }
}
module.exports = ValidationError