/*
Title: 23. Merge k Sorted Lists
URL: https://leetcode.com/problems/merge-k-sorted-lists/
Personal Submission:
    https://leetcode.com/submissions/detail/447351365/
    133 / 133 test cases passed.
    Runtime: 112 ms, faster than 73.72% of JavaScript online submissions for Merge k Sorted Lists.
    Memory Usage: 43.8 MB, less than 68.74% of JavaScript online submissions for Merge k Sorted Lists.

----
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.

*/

/**
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const arr = [];
  let result = null;
  lists.forEach((elm) => {
    let node = elm;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
  });
  arr.sort((a, b) => b - a);
  arr.forEach((elm) => {
    result = new ListNode(elm, result);
  });
  return result;
};

module.exports = { mergeKLists, ListNode };
