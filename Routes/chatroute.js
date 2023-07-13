const { renderChatPage } = require("../Controller/chatController");

const router = require("express").Router();
router.route("/chat").get(renderChatPage);

module.exports = router;
