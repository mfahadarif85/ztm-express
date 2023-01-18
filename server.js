const express = require("express");
const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

const PORT = 3000;

//Middleware

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

//express built-in middleware
app.use(express.json());

//Route Handlers
app.post("/friends", friendsController.postFriend);
app.get("/friends", friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
