const searchInsert = require("../0035.Search_Insert_Position");

describe("searchInsert", () => {
  it("test", () => {
    expect(searchInsert([1,3,5,6], 5)).toEqual(2);
    expect(searchInsert([1,3,5,6], 2)).toEqual(1);
    expect(searchInsert([1,3,5,6], 7)).toEqual(4);
  });
});
