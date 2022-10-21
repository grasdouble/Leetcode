/*
Title: 83. Remove Duplicates from Sorted List
URL: https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
Personal Submission:
    https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/827582702/
    Runtime: 81 ms, faster than 88.68% of JavaScript online submissions for Remove Duplicates from Sorted List.
    Memory Usage: 43.4 MB, less than 99.75% of JavaScript online submissions for Remove Duplicates from Sorted List.

----

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 
Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  if (!head || !head.next) return head;
  let tmp = head;
  let tmpNext = head.next;
  while (tmp.next) {
    if (tmp.val === tmpNext.val) {
      tmp.next = tmpNext.next;
    } else {
      tmp = tmpNext;
    }
    tmpNext = tmp.next;
  }

  return head;
};

module.exports = { deleteDuplicates, ListNode };
