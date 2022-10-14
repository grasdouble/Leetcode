const calculateTime = require("../1165.Single-Row_Keyboard");

describe("calculateTime", () => {
  it("test", () => {
    expect(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba")).toEqual(4);
    expect(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode")).toEqual(73);
  });
});
