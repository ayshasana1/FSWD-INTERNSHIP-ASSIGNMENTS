const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());
app.use("api/products",require("./routes/productRoutes"));


app.listen(3000,()=>{
    console.log("Server running on Port 3000");
});