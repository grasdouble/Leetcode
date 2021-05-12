const isMatch = require("../10.Regular_Expression_Matching");

describe("isMatch", () => {
  it("test 1", () => {
    expect(isMatch("aa", "a")).toEqual(false);
  });

  it("test 2", () => {
    expect(isMatch("aa", "a*")).toEqual(true);
  });

  it("test 3", () => {
    expect(isMatch("ab", ".*")).toEqual(true);
  });

  it("test 4", () => {
    expect(isMatch("aab", "c*a*b")).toEqual(true);
  });

  it("test 5", () => {
    expect(isMatch("mississippi", "mis*is*p*.")).toEqual(false);
  });
});
