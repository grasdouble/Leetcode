const countConsistentStrings = require("../1684.Count_the_Number_of_Consistent_Strings");

describe("countConsistentStrings", () => {
  it("test", () => {
    expect(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"])).toEqual(2);
    expect(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])).toEqual(7);
    expect(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"])).toEqual(4);
  });
});
