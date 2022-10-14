const numIdenticalPairs = require("../1512.Number_of_good_pairs");

describe("numIdenticalPairs", () => {
  it("test", () => {
    expect(numIdenticalPairs([1,2,3,1,1,3])).toEqual(4);
    expect(numIdenticalPairs([1,1,1,1])).toEqual(6);
    expect(numIdenticalPairs([1,2,3])).toEqual(0);
  });
});
