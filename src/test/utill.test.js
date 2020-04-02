const App = require("../");
const utill = require("../utill");

describe("index.js", () => {
  it("should be defined", () => {
    expect(App).toBeDefined();
  });
});

test("Number with comma", () => {
  expect(utill.numberWithCommas(1000)).toBe("1,000");
});
