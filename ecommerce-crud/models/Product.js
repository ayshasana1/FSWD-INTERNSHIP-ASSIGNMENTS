const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:[true,"Product name is required."]
    },
    price:{
        type:Number,
        required:true,
        min:[1,"Price must be greater than 0"]
    },
    category:{
        type:String,
        required: true
    },
    stock:{
        type:Number,
        default:0
    }
}, {timestamps:true});

module.exports=mongoose.model("Product",productSchema);