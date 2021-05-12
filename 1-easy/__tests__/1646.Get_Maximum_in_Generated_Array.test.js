const getMaximumGenerated = require("../1646.Get_Maximum_in_Generated_Array");

describe("getMaximumGenerated", () => {
  it("test", () => {
    expect(getMaximumGenerated(7)).toEqual(3);
    expect(getMaximumGenerated(2)).toEqual(1);
    expect(getMaximumGenerated(3)).toEqual(2);
  });
});
