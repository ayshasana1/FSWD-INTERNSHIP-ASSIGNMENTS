const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// 🔥 YOUR ATLAS CONNECTION STRING
mongoose.connect("mongodb+srv://ayshasana046_db_user:cqTFAufpr0bGA9ju@cluster0.ym1pwcp.mongodb.net/")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});