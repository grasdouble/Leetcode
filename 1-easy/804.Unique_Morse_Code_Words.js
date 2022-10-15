/*
Title: 804. Unique Morse Code Words
URL: https://leetcode.com/problems/unique-morse-code-words/description/
Personal Submission:
    https://leetcode.com/problems/unique-morse-code-words/submissions/823131580/
    Runtime: 49 ms, faster than 99.97% of JavaScript online submissions for Unique Morse Code Words.
    Memory Usage: 43.5 MB, less than 59.9% of JavaScript online submissions for Unique Morse Code Words.

----

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.

 

Example 1:
Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".

Example 2:
Input: words = ["a"]
Output: 1
 

*/

/**
 * @param {string[]} words
 * @return {number}
 */
 const uniqueMorseRepresentations = (words) => {
  const morseTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const result = [];
  for(i=0; i< words.length; i++){
      let tmpResult = words[i].split('').reduce((total, item) => {
          return total+morseTable[item.charCodeAt(0)-97]
      }, '');
      if(result.indexOf(tmpResult) == -1){
          result.push(tmpResult);
      }
  }
  return result.length;
};

module.exports = uniqueMorseRepresentations;
