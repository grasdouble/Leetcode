const longestCommonPrefix = require("../0014.Longest_Common_Prefix");

describe("longestCommonPrefix", () => {
  it("test 1", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  });

  it("test 2", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  });

  it("test 3", () => {
    expect(longestCommonPrefix(["ab", "a"])).toEqual("a");
  });
});
