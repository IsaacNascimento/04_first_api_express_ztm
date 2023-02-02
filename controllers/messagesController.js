const path = require("path");

function getMessages(req, res) {
  // const fileToSend = path.join(
  //   __dirname,
  //   "..",
  //   "public",
  //   "images",
  //   "skimountain.jpg"
  // );
  // res.sendFile(fileToSend);
  res.render("messages", {
    title: "Messages to My Friends",
    friend: "Stephen Hawking",
  });
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
