const countVowelStrings = require("../1641.Count_Sorted_Vowel_Strings");

describe("countVowelStrings", () => {
  it("test", () => {
    expect(countVowelStrings(1)).toEqual(5);
    expect(countVowelStrings(3)).toEqual(35);
    expect(countVowelStrings(33)).toEqual(66045);
  });
});
