const threeSum = require("../15.3Sum");

describe("threeSum", () => {
  it("test 1", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it("test 2", () => {
    expect(threeSum([])).toEqual([]);
  });

  it("test 3", () => {
    expect(threeSum([0])).toEqual([]);
  });
});
