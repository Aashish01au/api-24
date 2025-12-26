class GeneralValidationError extends Error{
    constructor({message="Validation failure"}){
        super() // used because of inheriate === extends
       // return {data,message,code}
        this.data = 400 
        this.message= message
    }
}
module.exports = GeneralValidationError