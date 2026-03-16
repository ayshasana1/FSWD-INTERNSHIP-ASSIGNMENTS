const express=require("express")
// const { use } = require("react")
const router=express.Router()

router.get("/",(req,res)=>{
    const users=[
        {id:1,name:"sana",dept:"CS"},
        {id:41,name:"samra",dept:"IS"},
        {id:21,name:"shanoom",dept:"EE"},
    ]
    res.json(users)
})
router.get("./:id",(req,res)=>{
    res.send(`user ID: ${req.params.id}`)
})
module.exports=router