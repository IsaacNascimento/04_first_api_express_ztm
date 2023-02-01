const express = require("express");
const app = express();
const PORT = 4000;

const friends = [
  { id: 0, name: "Sir Isaac Newton" },
  { id: 1, name: "Albert Einstein" },
  { id: 2, name: "Nikolas Tesla" },
];

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend not Found!",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Messages</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages...");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
