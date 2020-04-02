const chat_config = require("./chat.config.js");
const support = require("./service/SupportService");

module.exports = async function App(context) {
  if (context.event.isFollow) {
    return HandleFollow;
  }
  if (context.event.isUnfollow) {
    return HandleUnfollow;
  }
  if (context.event.isText) {
    return HandleText;
  }
};

async function HandleFollow(context) {
  await context.sendText(chat_config.chat.welcome);
}

async function HandleUnfollow(context) {
  await context.sendText(chat_config.chat.unfollow);
}

async function HandleText(context) {
  var text = context.event.text;

  if (
    text.toLowerCase().includes("support") ||
    text.toLowerCase().includes("สนับสนุน")
  ) {
    await context.sendFlex("ช่วยสนับหนุน น้อน บอท", {
      type: "carousel",
      contents: support.GetSupportList()
    });
  } else {
    await context.sendText(text);
  }
}
