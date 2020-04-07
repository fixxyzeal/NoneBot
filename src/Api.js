const axios = require("axios");

module.exports = class api {
  constructor() {}

  async Login() {
    let data = { email: process.env.USER, password: process.env.PASS };

    var result = await axios.post(
      process.env.BASE_URL + "api/auth/login",
      data
    );
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + result.data.token;
  }

  async SaveAction(userid, username, platform, message) {
    return await axios.post(process.env.BASE_URL + "api/action", {
      userId: userid,
      userDisplayName: username,
      message: message,
      platform: platform,
    });
  }
};
