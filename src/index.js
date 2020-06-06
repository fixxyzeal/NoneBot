const chat_config = require("./chat.config.js");
const support = require("./service/SupportService");
const api = require("./Api");

var apiService = new api();

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

  await apiService.Login();
  //Save action
  await apiService.SaveAction(
    context.session.user.id,
    "LineUser",
    context.session.platform,
    text
  );

  if (
    text.toLowerCase().includes("support") ||
    text.toLowerCase().includes("สนับสนุน")
  ) {
    await context.sendFlex("ช่วยสนับหนุน น้อน บอท", {
      type: "carousel",
      contents: support.GetSupportList(),
    });
  } else if (text.toLowerCase().includes("ฟัน")) {
    await apiService.SaveBrushing();
    await context.sendText("รับข้อมูลการแปรงฟัน เรียบร้อย");
  } else if (text.toLowerCase().includes("ข้อมูล")) {
    let data = await apiService.GetBrushing();
    let result = data.data[0].brushingRemain;
    let resultText = "";
    if (result === 0) {
      resultText =
        "วันนี้คุณได้แปรงฟันครบแล้ว " + String.fromCodePoint(0x100080);
    } else {
      resultText =
        "คุณยังค้างแปรงฟันอีก " +
        result +
        " ครั้ง " +
        String.fromCodePoint(0x100082);
    }
    await context.sendText(resultText);
  } else {
    await context.sendFlex("แนะนำ iphone11", {
      type: "carousel",
      contents: support.GetIphone(),
    });
  }
}
