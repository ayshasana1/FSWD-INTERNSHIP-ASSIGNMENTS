const mongoose = require("mongoose");
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://ayshasana046_db_user:ukrcfEVUyXiAogUb@cluster0.wlmqdbx.mongodb.net/")
        console.log("MongoDB Connected");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports=connectDB;