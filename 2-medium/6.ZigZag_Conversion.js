/*
Title: 6. ZigZag Conversion
URL: https://leetcode.com/problems/zigzag-conversion/
Personal Submission:
    https://leetcode.com/submissions/detail/488464751/
    1157 / 1157 test cases passed.
    Runtime: 100ms, Your runtime beats 93.17 % of javascript submissions.
    Memory Usage: 45 MB, Your memory usage beats 40.27 % of javascript submissions.

----
Description
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 const convert = function(s, numRows) {
    let t =[];
    let idx = 0;
    let isUp = true;
    s.split('').forEach(elm => {
        if(!t[idx]) t[idx]=[];
        t[idx].push(elm);
        if(idx === numRows-1){
            isUp=false;
        }
        if(idx === 0){
            isUp= true;
        }
        idx= isUp ? idx+1 : idx-1;
    });
    result = [];
    t.forEach(elm =>{
      result.push(...elm)
    });
    return result.join('');
};


module.exports = convert;