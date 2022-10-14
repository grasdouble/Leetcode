const decodeMessage = require("../2325.Decode_the_Message");

describe("decodeMessage", () => {
  it("test", () => {
    expect(
      decodeMessage(
        "the quick brown fox jumps over the lazy dog",
        "vkbs bs t suepuv"
      )
    ).toEqual("this is a secret");
    expect(
      decodeMessage(
        "eljuxhpwnyrdgtqkviszcfmabo",
        "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
      )
    ).toEqual("the five boxing wizards jump quickly");
  });
});
