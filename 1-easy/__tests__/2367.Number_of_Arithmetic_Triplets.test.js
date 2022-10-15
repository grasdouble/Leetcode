const arithmeticTriplets = require("../2367.Number_of_Arithmetic_Triplets");

describe("arithmeticTriplets", () => {
  it("test", () => {
    expect(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)).toEqual(2);
    expect(arithmeticTriplets([4,5,6,7,8,9], 2)).toEqual(2);
  });
});
