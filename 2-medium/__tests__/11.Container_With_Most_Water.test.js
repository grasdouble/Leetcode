const maxArea = require("../11.Container_With_Most_Water");

describe("maxArea", () => {
  it("test 1", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });

  it("test 2", () => {
    expect(maxArea([1, 1])).toEqual(1);
  });

  it("test 3", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toEqual(16);
  });

  it("test 4", () => {
    expect(maxArea([1, 2, 1])).toEqual(2);
  });
});
