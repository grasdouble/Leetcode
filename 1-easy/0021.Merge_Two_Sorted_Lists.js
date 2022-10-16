/*
Title: 21. Merge Two Sorted Lists
URL: https://leetcode.com/problems/merge-two-sorted-lists/
Personal Submission:
    https://leetcode.com/submissions/detail/532706352/
    208 / 208 test cases passed.
    Runtime: 80 ms, faster than 85.60% of JavaScript online submissions for Merge Two Sorted Lists.
    Memory Usage: 40.9 MB, less than 16.86% of JavaScript online submissions for Merge Two Sorted Lists.

----
Description
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const toArray = (lnode) => {
  let node = lnode;
  let arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
};

const toListNode = (arr) => {
  let result = null;
  arr.forEach((elm) => {
    result = new ListNode(elm, result);
  });
  return result;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  } else {
    const arr = [];
    arr.push(...toArray(l1));
    arr.push(...toArray(l2));
    arr.sort((a, b) => b - a);

    return toListNode(arr);
  }
};

module.exports = { mergeTwoLists, ListNode };
