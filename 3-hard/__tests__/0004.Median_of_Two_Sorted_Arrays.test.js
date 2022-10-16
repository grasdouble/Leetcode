const findMedianSortedArrays = require("../0004.Median_of_Two_Sorted_Arrays");

describe("findMedianSortedArrays", () => {
  it("test 1", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  });

  it("test 2", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });

  it("test 3", () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toEqual(0);
  });

  it("test 4", () => {
    expect(findMedianSortedArrays([], [1])).toEqual(1);
  });

  it("test 5", () => {
    expect(findMedianSortedArrays([2], [])).toEqual(2);
  });
});
