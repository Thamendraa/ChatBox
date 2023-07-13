const { name, render } = require("ejs");

exports.renderChatPage = async (req, res) => {
  res.render("chatPage");
};
