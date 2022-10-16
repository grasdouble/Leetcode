const anagramMappings = require("../0760.Find_Anagram_Mappings");

describe("anagramMappings", () => {
  it("test", () => {
    expect(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28])).toEqual(
      [1, 4, 3, 2, 0]
    );
    expect(anagramMappings([84, 46], [84, 46])).toEqual([0, 1]);
    expect(anagramMappings([40, 40], [40, 40])).toEqual([1, 1]);
  });
});
