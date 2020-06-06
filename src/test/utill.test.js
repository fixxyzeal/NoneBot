const App = require("../");
const utill = require("../utill");
const api = require("../Api.js");

let apiservice = new api();

describe("index.js", () => {
  it("should be defined", () => {
    expect(App).toBeDefined();
  });
});

test("Number with comma", () => {
  expect(utill.numberWithCommas(1000)).toBe("1,000");
});

test("Test SCG Api", () => {
  expect(apiservice.Test()).toBeDefined();
});
