const longestPalindrome = require("../0005.Longest_Palindromic_Substring");

describe("longestPalindrome", () => {
  it("test 1", () => {
    expect(longestPalindrome("babad")).toEqual("bab");
  });

  it("test 2", () => {
    expect(longestPalindrome("cbbd")).toEqual("bb");
  });

  it("test 3", () => {
    expect(longestPalindrome("a")).toEqual("a");
  });

  it("test 4", () => {
    expect(longestPalindrome("ac")).toEqual("a");
  });
});
