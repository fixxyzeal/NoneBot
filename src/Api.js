const axios = require("axios");
const timeout = { timeout: 6000000 };

module.exports = class api {
  constructor() {}

  async Login() {
    let data = { email: process.env.USER, password: process.env.PASS };

    var result = await axios.post(
      process.env.BASE_URL + "api/auth/login",
      data,
      timeout
    );
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + result.data.token;
  }

  async SaveAction(userid, username, platform, message) {
    return await axios.post(
      process.env.BASE_URL + "api/action",
      {
        userId: userid,
        userDisplayName: username,
        message: message,
        platform: platform,
      },
      timeout
    );
  }
  async SaveBrushing(userid) {
    return await axios.post(
      process.env.BASE_URL + "api/BrushingInformation",
      {
        brushingSet: 3,
        lineUserId: userid,
      },
      timeout
    );
  }
  async GetBrushing() {
    return await axios.get(
      process.env.BASE_URL + "api/BrushingInformation?lastest=true",
      timeout
    );
  }
};
