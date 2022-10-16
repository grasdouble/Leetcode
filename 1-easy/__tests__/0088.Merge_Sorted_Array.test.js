const merge = require("../0088.Merge_Sorted_Array");

describe("merge", () => {
  it("test", () => {
    var nums1_t1 = [1, 2, 3, 0, 0, 0];
    var nums2_t1 = [2, 5, 6];
    merge(nums1_t1, 3, nums2_t1, 3);
    expect(nums1_t1).toEqual([1, 2, 2, 3, 5, 6]);

    var nums1_t2 = [1];
    var nums2_t2 = [];
    merge(nums1_t2, 1, nums2_t2, 0);
    expect(nums1_t2).toEqual([1]);
  });
});
