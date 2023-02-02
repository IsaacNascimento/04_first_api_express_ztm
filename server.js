const express = require("express");
const app = express();
const PORT = 4000;

const { postFriends, getFriends, getFriendById } = require("./controllers/friendsController");
const { getMessages, postMessage } = require("./controllers/messagesController");

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const end = Date.now() - start;
  console.log(`${req.method} ${req.url} ${end}ms`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to Friend´s API!");
});

app.post("/friends", postFriends);
app.get("/friends", getFriends);
app.get("/friends/:friendId", getFriendById);

app.get("/messages", getMessages);
app.post("/messages", postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
