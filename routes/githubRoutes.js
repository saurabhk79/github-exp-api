const router = require("express").Router();
const githubController = require("../controllers/githubController.js");

router.get("/save-user/:username", githubController.saveUser);
router.get("/find-mutual-followers/:username", githubController.findMutuals);
router.get("/search-users", githubController.searchUsers);
router.delete("/delete-user/:username", githubController.deleteUser);
router.patch("/update-user/:username", githubController.updateUser);
router.get("/list-users", githubController.listUser);

module.exports = router;
