const isPalindrome = require("../0009.Palindrome_Number");

describe("reverse", () => {
  it("test 1", () => {
    expect(isPalindrome(121)).toEqual(true);
  });

  it("test 2", () => {
    expect(isPalindrome(-121)).toEqual(false);
  });

  it("test 3", () => {
    expect(isPalindrome(10)).toEqual(false);
  });

  it("test 4", () => {
    expect(isPalindrome(-101)).toEqual(false);
  });
});
