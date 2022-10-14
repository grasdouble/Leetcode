const smallerNumbersThanCurrent = require("../1365.How_Many_Numbers_Are_Smaller_Than_the_Current_Number");

describe("smallerNumbersThanCurrent", () => {
  it("test", () => {
    expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3]);
    expect(smallerNumbersThanCurrent([6, 5, 4, 8])).toEqual([2, 1, 0, 3]);
    expect(smallerNumbersThanCurrent([7, 7, 7, 7])).toEqual([0, 0, 0, 0]);
  });
});
