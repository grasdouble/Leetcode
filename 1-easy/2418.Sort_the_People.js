/*
Title: 2418. Sort the People
URL: https://leetcode.com/problems/sort-the-people/description/
Personal Submission:
    https://leetcode.com/problems/find-anagram-mappings/submissions/823098335/
    Runtime: 146 ms, faster than 47.9% of JavaScript online submissions for Sort the People.
    Memory Usage: 49 MB, less than 12.59% of JavaScript online submissions for Sort the People.

----

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

 

Example 1:
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Example 2:
Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
 

Constraints:

n == names.length == heights.length
1 <= n <= 103
1 <= names[i].length <= 20
1 <= heights[i] <= 105
names[i] consists of lower and upper case English letters.
All the values of heights are distinct.

*/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
  const mapping = new Map();
  for (i = 0; i < names.length; i++) {
    mapping.set(heights[i], names[i]);
  }
  const mappingSorted = new Map([...mapping].sort((a, b) => b[0] - a[0]));
  return [...mappingSorted.values()];
};

module.exports = sortPeople;
