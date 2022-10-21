const climbStairs = require("../0070.Climbing_Stairs");

describe("climbStairs", () => {
  it("test", () => {
    expect(climbStairs(2)).toEqual(2);
    expect(climbStairs(3)).toEqual(3);
    expect(climbStairs(45)).toEqual(1836311903);
  });
});
