const randomString = (length =100)=>{
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ"
    const len = chars.length
    let random = ""

    for(let i=1; i<=length; i++){
        const positn = parseInt(Math.random() * (len-1))
        random += chars[positn]
    }
    return random
}
module.exports = {randomString}