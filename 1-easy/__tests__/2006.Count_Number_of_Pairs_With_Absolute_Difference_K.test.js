const countKDifference = require("../2006.Count_Number_of_Pairs_With_Absolute_Difference_K");

describe("countKDifference", () => {
  it("test", () => {
    expect(countKDifference([1, 2, 2, 1], 1)).toEqual(4);
    expect(countKDifference([1, 3], 3)).toEqual(0);
    expect(countKDifference([3, 2, 1, 5, 4], 2)).toEqual(3);
  });
});
