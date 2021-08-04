const fn = require("../26.Remove_Duplicates_from_Sorted_Array");

describe("template", () => {
  it("test 1", () => {
    let nums = [1,1,2];
    const expectedNums = [1,2];
    expect(fn(nums)).toEqual(2);
    expect(nums).toEqual(expectedNums);
  });

  it("test 2", () => {
    let nums = [0,0,1,1,1,2,2,3,3,4];
    const expectedNums = [0,1,2,3,4];
    expect(fn(nums)).toEqual(5);
    expect(nums).toEqual(expectedNums);
  });
});
