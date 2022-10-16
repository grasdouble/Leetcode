const lengthOfLastWord = require("../0058.Length_of_Last_Word");

describe("lengthOfLastWord", () => {
  it("test", () => {
    expect(lengthOfLastWord("Hello World")).toEqual(5);
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
    expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
  });
});
