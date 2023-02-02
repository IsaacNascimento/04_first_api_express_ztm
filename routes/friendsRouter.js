const express = require("express");

const friendsRouter = express.Router();

const friendsController = require("../controllers/friendsController");

friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriendById);

module.exports = friendsRouter;
