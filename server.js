const express = require("express");
const app = express();
const path = require("path");

const PORT = 4000;

const friendsRouter = require("./routes/friendsRouter");
const messagesRouter = require("./routes/messagesRouter");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const end = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${end}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Friends",
    caption: "Let's go skiing!",
  });
});
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
