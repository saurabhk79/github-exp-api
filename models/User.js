const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.UUID,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email:String,
    avatarURL: String,
    type: String,
    name: String,
    company: String,
    blog: String,
    location: String,
    bio: String,
    reposCount: Number,
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt: mongoose.Schema.Types.Date,
    updatedAt: mongoose.Schema.Types.Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
