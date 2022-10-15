/*
Title: 1165. Single-Row Keyboard
URL: https://leetcode.com/problems/single-row-keyboard/
Personal Submission:
    https://leetcode.com/problems/single-row-keyboard/submissions/822603726/
    Runtime: 85 ms, faster than 77.11% of JavaScript online submissions for Single-Row Keyboard.
    Memory Usage: 44 MB, less than 37.35% of JavaScript online submissions for Single-Row Keyboard.

----

There is a special keyboard with all keys in a single row.

Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

 

Example 1:
Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4. 

Example 2:
Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
Output: 73
 

Constraints:

keyboard.length == 26
keyboard contains each English lowercase letter exactly once in some order.
1 <= word.length <= 104
word[i] is an English lowercase letter.

*/

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
 var calculateTime = function(keyboard, word) {
  let previousIndex = 0;
  return word.split('').reduce((total,item) => {
      const currentIndex = keyboard.indexOf(item);
      const add = Math.abs(currentIndex-previousIndex);
      previousIndex = currentIndex;

      return total + add;
  },0);
  
};

module.exports = calculateTime;