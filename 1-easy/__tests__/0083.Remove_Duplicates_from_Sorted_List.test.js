const {
  deleteDuplicates,
  ListNode,
} = require("../0083.Remove_Duplicates_from_Sorted_List");

describe("deleteDuplicates", () => {
  it("test", () => {
    expect(
      deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, null))))
    ).toEqual(new ListNode(1, new ListNode(2, null)));
    expect(
      deleteDuplicates(
        new ListNode(
          1,
          new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(3, null)))
          )
        )
      )
    ).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
    expect(deleteDuplicates(new ListNode())).toEqual(new ListNode());
    expect(deleteDuplicates(new ListNode(1, null))).toEqual(
      new ListNode(1, null)
    );
  });
});
