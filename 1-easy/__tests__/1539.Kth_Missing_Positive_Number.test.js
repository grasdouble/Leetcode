const findKthPositive = require("../1539.Kth_Missing_Positive_Number");

describe("findKthPositive", () => {
  it("test", () => {
    expect(findKthPositive([2, 3, 4, 7, 11], 5)).toEqual(9);
    expect(findKthPositive([1, 2, 3, 4], 2)).toEqual(6);
  });
});
