const findSpecialInteger = require("../1287.Element_Appearing_More_Than_25%_In_Sorted_Array");

describe("findSpecialInteger", () => {
  it("test", () => {
    expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])).toEqual(6);
  });
});
