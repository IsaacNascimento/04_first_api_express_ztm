const friendsModel = require('../models/friendsModel');

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "The name field is required",
    });
  }
  const newFriend = {
    name: req.body?.name,
    id: friendsModel.length,
  };
  friendsModel.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(friendsModel);
}

function getFriendById(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friendsModel[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend not Found!",
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriendById,
};
