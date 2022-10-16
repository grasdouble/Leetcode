const reverse = require("../0007.Reverse_Integer");

describe("reverse", () => {
  it("test 1", () => {
    expect(reverse(123)).toEqual(321);
  });

  it("test 2", () => {
    expect(reverse(-123)).toEqual(-321);
  });

  it("test 3", () => {
    expect(reverse(120)).toEqual(21);
  });

  it("test 4", () => {
    expect(reverse(0)).toEqual(0);
  });

  it("test 5", () => {
    expect(reverse(1534236469)).toEqual(0);
  });
});
