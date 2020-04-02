function GetSupportList() {
  let result = [];
  result.push(
    SetBubble(
      "https://s.isanook.com/hi/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMjk2LzE0ODAwNjkvbGF6ei5qcGc=.jpg",
      "Lazada",
      "https://cl.accesstrade.in.th/001dvb000h3h"
    )
  );
  result.push(
    SetBubble(
      "https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/assets/ca5d12864c12916c05640b36e47ac5c9.png",
      "Shopee",
      "https://cl.accesstrade.in.th/001jan000h3h"
    )
  );
  result.push(
    SetBubble(
      "https://a.ipricegroup.com/trends-article/%E0%B8%9C%E0%B8%B2%E0%B8%99%E0%B9%84%E0%B8%9B%E0%B9%84%E0%B8%95%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%AA%E0%B8%81%E0%B8%A7%E0%B8%B2-%E0%B9%86-jd-central-%E0%B8%A3%E0%B8%87-%E0%B8%AB%E0%B8%A3%E0%B8%AD%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B8%81%E0%B8%99%E0%B9%81%E0%B8%99-%E0%B8%A1%E0%B8%B2%E0%B8%94%E0%B8%81%E0%B8%99-medium.jpg",
      "JD Central",
      "https://cl.accesstrade.in.th/000g7w000h3h"
    )
  );
  result.push(
    SetBubble(
      "https://static1-velaeasy.readyplanet.com/www.suapatrang.com/images/content/original-1546581170365.png",
      "Banana ShopingOnline",
      "https://cl.accesstrade.in.th/001pae000h3h"
    )
  );
  result.push(
    SetBubble(
      "https://d1j36w0bax18n0.cloudfront.net/media/wysiwyg/Partnership/Bank/rbs-squre_copy_2x.png",
      "Robinson",
      "https://cl.accesstrade.in.th/001lt5000h3h"
    )
  );
  return result;
}

function SetBubble(imageurl, text, link) {
  return {
    type: "bubble",
    hero: {
      type: "image",
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
      url: imageurl
    },
    body: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "text",
          text: text,
          wrap: true,
          weight: "bold",
          size: "xl"
        }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "primary",
          action: {
            type: "uri",
            label: "ซื้อเลย",
            uri: link
          }
        }
      ]
    }
  };
}

module.exports = { GetSupportList };
