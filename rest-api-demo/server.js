const express=require("express");
const app=express();

//middleware
app.use(express.json());

const PORT = 3000;

//dummy database
let users=[
    {id:1,name:"sana"},
    {id:2,name:"samra"}
];

//============= GET METHOD =============
app.get("/users",(req,res)=>{
    res.status(200).json(users)
});

//============= POST METHOD ============
app.post("/users",(req,res)=>{
    const{name}=req.body;

    //validation
    if(!name){
        return res.status(400).json({message:"Name is required"});

    }
    //create new user
    const newUser={
        id:users.length+1,
        name:name
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

//================== PUT METHOD =============
app.put("/users/:id",(req,res)=>{
    const id=parseInt(req,params.id);

    const {name}=req.body;

    const user=users.find(u=>u.id===id);

    if(!user){
        return res.status(404).json({message:"user not found"});
    }

    user.name=name;

    res.status(200).json(user);
});

//============== DELETE METHOD ==============
app.delete("/users/:id",(req,res)=>{
    const id=parseInt(req.params.id);

    users=users.filter(u=>u.id!==id);
    res.status(200).json({message:"user deleted successfully"});
});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});