/*
Title: 1641. Count Sorted Vowel Strings
URL: https://leetcode.com/problems/count-sorted-vowel-strings/
Personal Submission:
    https://leetcode.com/submissions/detail/444286909/
    41 / 41 test cases passed.
    Runtime: 2004 ms, faster than 14.63% of JavaScript online submissions for Count Sorted Vowel Strings.
    Memory Usage: 47.3 MB, less than 14.23% of JavaScript online submissions for Count Sorted Vowel Strings.

----
Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

 

Example 1:

Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
Example 2:

Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
Example 3:

Input: n = 33
Output: 66045
 

Constraints:

1 <= n <= 50 

*/



/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let vowels = "aeiou";
    //let vowels = ['a','e','i','o','u'];
    let result = 0;
    
    function subTask(startIdx, possibleValue){
        //if possibleValues respect the length (n)
        if(possibleValue.length == n){
            result++;
            return;
        }

        //if not continue to searhc possible values
        for(let i=startIdx;i<vowels.length;i++){
            subTask(i, [...possibleValue, i]);
            //subTask(i, [...possibleValue, vowels[i]]);
        }
    }
    
    subTask(0, []);
    return result;
};

module.exports = countVowelStrings;