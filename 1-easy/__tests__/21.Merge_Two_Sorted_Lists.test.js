const { mergeTwoLists, ListNode } = require("../21.Merge_Two_Sorted_Lists");

describe("Merge_Two_Sorted_Lists", () => {
  it("test 1", () => {
    const n1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
    const n2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
    const expectedResult = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, null))))
      )
    );

    expect(mergeTwoLists(n1, n2)).toEqual(expectedResult);
  });

  it("test 2", () => {
    const n1 = null;
    const n2 = null;
    const expectedResult = null;

    expect(mergeTwoLists(n1, n2)).toEqual(expectedResult);
  });

  it("test 3", () => {
    const n1 = null;
    const n2 = new ListNode(0, null);
    const expectedResult = new ListNode(0, null);

    expect(mergeTwoLists(n1, n2)).toEqual(expectedResult);
  });
});
