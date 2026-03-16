//creating first epress server

const express=require("express")
const logger=require("./middleware/logger")
const userRoutes=require("./routes/UserRoutes")
const app=express()
const PORT=3000

app.use(logger)

/* app.get("/", (req,res)=>{
    res.send("Home Page")
})

app.get("/about", (req,res)=>{
    res.send("About Page")
})

app.get("/contact", (req,res)=>{
    res.send("Contact Page")
})

app.get("/users",(req,res)=>{
    const users=[
        {id:1,name:"navya"},
        {id:2,name:"kavya"},
        {id:3,name:"divya"},
        {id:4,name:"navya H"},
    ]
    res.json(users)
})

app.get("/users/:id", (req,res)=>{
    const userId=req.params.id
    res.send(`user ID is ${userId}`)
}) */


app.use("./users",userRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})