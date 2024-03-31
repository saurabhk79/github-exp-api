const githubService = require("../services/githubService.js");

const saveUser = async (req, res) => {
  try {
    const { username } = req.params;

    // if user is available on database
    const isUser = await githubService.findUser(username);
    if (isUser) return res.status(200).json(isUser);

    // if not available
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = res.json();

    const userData = {
      username: data.login,
      id: data.id,
      avatar_url: data.avatar_url,
      type: data.type,
      name: data.name,
      company: data.company,
      blog: data.blog,
      location: data.location,
      email: data.email,
      bio: data.bio,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      created_at: data.created_at,
      updated_at: data.updated_at,
    };

    const newUser = await githubService.saveUser(userData);

    return res.status(200).json(newUser);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const findMutuals = async (req, res) => {
  try {
    const { username } = req.params;

    const followerRes = await fetch(
      `https://api.github.com/users/${username}/followers`
    );
    const followers = await followerRes.json();

    const followingRes = await fetch(
      `https://api.github.com/users/${username}/following`
    );
    const following = await followingRes.json();

    const mutuals = await githubService.getSetMutual(
      username,
      followers,
      following
    );

    return res.status(200).json(mutuals);
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

const deleteUser = async (req, res) => {
  try {
    const { username } = req.params;

    const doesUserExists = await githubService.findUser(username);
    if (!doesUserExists)
      return res.status(403).json({ message: "User does not exists!" });

    const user = await githubService.deleteUser(username);
    return res.status(201).json(user);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { username } = req.params;
    const updateData = req.body;

    const doesUserExists = await githubService.findUser(username);
    if (!doesUserExists)
      return res.status(403).json({ message: "User does not exists!" });

    const user = await githubService.updateUser(username, updateData);
    return res.status(201).json(user);
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
