const logger=(req,res,next)=>{
    const time =new Date().toLocaleDateString()
    console.log(`request recieved at ${time}`)
    next() //passes control to next function
}
module.exports=logger