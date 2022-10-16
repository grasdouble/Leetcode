const uniqueMorseRepresentations = require("../0804.Unique_Morse_Code_Words");

describe("uniqueMorseRepresentations", () => {
  it("test", () => {
    expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toEqual(2);
    expect(uniqueMorseRepresentations(["a"])).toEqual(1);
  });
});
