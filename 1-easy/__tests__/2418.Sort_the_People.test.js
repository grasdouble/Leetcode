const sortPeople = require("../2418.Sort_the_People");

describe("sortPeople", () => {
  it("test", () => {
    expect(sortPeople(["Mary","John","Emma"], [180,165,170])).toEqual(["Mary","Emma","John"]);
    expect(sortPeople(["Alice","Bob","Bob"], [155,185,150])).toEqual(["Bob","Alice","Bob"]);
  });
});
