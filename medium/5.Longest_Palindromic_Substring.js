/*
Title: 5. Longest Palindromic Substring
URL: https://leetcode.com/problems/longest-palindromic-substring/
Personal Submission:
    https://leetcode.com/submissions/detail/445098673/
    176 / 176 test cases passed.
    Runtime: 7624 ms, faster than 5.02% of JavaScript online submissions for Longest Palindromic Substring.
    Memory Usage: 45.2 MB, less than 35.08% of JavaScript online submissions for Longest Palindromic Substring.

----
Given a string s, return the longest palindromic substring in s.


Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = s[0];
    for(i=0; i < s.length; i++){
        let str = s[i];
        for(y=i+1; y < s.length; y++){
            str+=s[y];
            if(isPalindrome(str) && str.length > result.length) result = str;
        }
    }
    return result;
};

var isPalindrome = function(str){
    let ok = true;
    let beg = 0;
    let end = str.length -1;
    while(beg<end && ok){
        if(str[beg] != str[end]){
            ok=false;
        }
        beg++;
        end--;
    }
    return ok;
}

module.exports = longestPalindrome;