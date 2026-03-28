const express = require("express");
const router = express.Router();
//const User = require("../models/User");


//CREATE
router.post("/",async(req, res)=>{
    const user = new User(req.body);
    await user.save();
    res.json(user);
});


//READ ALL
router.get("/", async(req,res)=>{
    const user = await User.find();
    res.json(user);
});


//READ ONE 
router.get("/:id",async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
});


//UPDATE
router.put("/:id",async(req,res)=>{
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.json(user);
});


//DELETE
router.delete("/:id",async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({message:"User deleted"});
});

module.exports = router;