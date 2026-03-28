const mongoose = requie("mongoose");
const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://ayshasana046_db_user:EAobenVruY1IqM9B@ecommerce.brlgobg.mongodb.net/");
        console.log("MongoDB is Successfully connected ✅");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};
module.exports = connectDB;

