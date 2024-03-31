const githubService = require("../services/githubService.js");

const saveUser = async (req, res) => {
  try {
    const {username} = req.params;

    
    const res = await axios.get(`https://api.github.com/users/${username}`);

    // Extract required user data
    const userData = {
      username: response.data.login,
      id: response.data.id,
      avatar_url: response.data.avatar_url,
      type: response.data.type,
      name: response.data.name,
      company: response.data.company,
      blog: response.data.blog,
      location: response.data.location,
      email: response.data.email,
      bio: response.data.bio,
      public_repos: response.data.public_repos,
      followers: response.data.followers,
      following: response.data.following,
      created_at: response.data.created_at,
      updated_at: response.data.updated_at,
    };
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const findMutuals = (req, res) => {
  try {
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const searchUsers = (req, res) => {
  try {
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const deleteUser = (req, res) => {
  try {
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const updateUser = (req, res) => {
  try {
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const listUser = (req, res) => {
  try {
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = {
  saveUser,
  findMutuals,
  searchUsers,
  deleteUser,
  updateUser,
  listUser,
};
