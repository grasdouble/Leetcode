const countPoints = require("../2103.Rings_and_Rods");

describe("countPoints", () => {
  it("test", () => {
    expect(countPoints("B0B6G0R6R0R6G9")).toEqual(1);
    expect(countPoints("B0R0G0R9R0B0G0")).toEqual(1);
    expect(countPoints("G4")).toEqual(0);
  });
});
