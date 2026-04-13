const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog"
  }
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);