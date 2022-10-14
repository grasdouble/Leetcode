/*
Title: 2325. Decode the Message
URL: https://leetcode.com/problems/decode-the-message/
Personal Submission:
    https://leetcode.com/problems/decode-the-message/submissions/822621435/
    Runtime: 78 ms, faster than 90.33% of JavaScript online submissions for Decode the Message.
    Memory Usage: 44.8 MB, less than 58.80% of JavaScript online submissions for Decode the Message.

----

You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.

 

Example 1:
Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

Example 2:
Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".

*/

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 const decodeMessage = (key, message) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';

  const keyTab = key.split('').reduce((temp, item) => {
      if(temp.indexOf(item) == -1 && item != ' '){
          temp.push(item);
      }
      return temp
  },[]);
  return message.split('').reduce((result, item) => {
      return keyTab.indexOf(item) > -1 ? result + abc[keyTab.indexOf(item)] : result + item;
  }, '')
};

module.exports = decodeMessage;
