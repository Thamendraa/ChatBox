const ejs = require("ejs");
const port = 3000;
const express = require("express");
const socket = require("socket.io");
const app = express();
const chatRoute = require("./Routes/chatroute");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", chatRoute);

app.listen(port, () => {
  console.log(" Hello, chat box");
});
