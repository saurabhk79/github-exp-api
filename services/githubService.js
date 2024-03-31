const User = require("../models/User");

const findUser = async (username) => {
  try {
    const availUser = await User.findOne({ username });

    return availUser;
  } catch (error) {
    throw error;
  }
};

const saveUser = async (userData) => {
  try {
    const availUser = await User(userData);
    availUser.save();

    return availUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { findUser, saveUser };
