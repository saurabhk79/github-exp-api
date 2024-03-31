const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.UUID,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatarURL: String,
    type: String,
    name: String,
    company: String,
    blog: String,
    location: String,
    bio: String,
    reposCount: Number,
    followers: [{ login: String }],
    following: [{ login: String }],
    createdAt: mongoose.Schema.Types.Date,
    updatedAt: mongoose.Schema.Types.Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;