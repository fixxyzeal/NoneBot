const axios = require("axios");

module.exports = class api {
  constructor() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + process.env.APITOKEN;
  }

  async getProduct() {
    var result = await axios.get(process.env.BASE_URL + "products");
    return result.data;
  }
};
