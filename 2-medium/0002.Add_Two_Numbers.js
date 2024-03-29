/*
Title: 2. Add Two Numbers
URL: https://leetcode.com/problems/add-two-numbers/
Personal Submission:
    https://leetcode.com/submissions/detail/444234402/
    1568 / 1568 test cases passed.
    Runtime: 180 ms, faster than 13.14% of JavaScript online submissions for Add Two Numbers.
    Memory Usage: 45.3 MB, less than 15.69% of JavaScript online submissions for Add Two Numbers.
----
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const transformNode = (node, arr) => {
  if (node.next) {
    arr = transformNode(node.next, arr);
    arr = arr.concat(node.val);
  } else if (node.val > 0) {
    arr = arr.concat(node.val);
  }
  return arr;
};

const transformToNode = (value, next) => {
  const node = new ListNode(value);
  node.next = next;
  return node;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const l1Value = BigInt(transformNode(l1, "") || 0);
  const l2Value = BigInt(transformNode(l2, "") || 0);
  const calcResult = BigInt(l1Value + l2Value).toString();
  let finalResult = null;
  calcResult.split("").forEach((elm) => {
    finalResult = transformToNode(elm, finalResult);
  });
  return finalResult;
};
