/*
Title: 12. Integer to Roman
URL: https://leetcode.com/problems/integer-to-roman/
Personal Submission:
    https://leetcode.com/submissions/detail/489313304/
    3999 / 3999 test cases passed.
    Runtime: 168 ms, faster than 45.95% of JavaScript online submissions for Integer to Roman.
    Memory Usage: 46 MB, less than 33.63% of JavaScript online submissions for Integer to Roman.

----
Description

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Example 2:

Input: num = 4
Output: "IV"
Example 3:

Input: num = 9
Output: "IX"
Example 4:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= num <= 3999
*/


const roman = [
    {
        beforeFour:'I',
        equalFour:'IV',
        beforeNine_First:'V',
        beforeNine_Second:'I',
        equalNine:'IX'
    },
    {
        beforeFour:'X',
        equalFour: 'XL',
        beforeNine_First: 'L',
        beforeNine_Second:'X',
        equalNine: 'XC'
    },
    {
        beforeFour: 'C',
        equalFour: 'CD',
        beforeNine_First: 'D',
        beforeNine_Second: 'C',
        equalNine: 'CM'
    },
    {
        beforeFour: 'M',
        equalFour: '',
        beforeNine_First: '',
        beforeNine_Second: '',
        equalNine: ''
    }
    
];

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    const arr = num.toString().split('').reverse();
    const result = [];
    arr.forEach((elm,idx) => {
        const elmInt = parseInt(elm);
        let elmResult = '';
        
        if(elm != '0'){            
            if(elmInt<4){
                elmResult = roman[idx].beforeFour.repeat(elmInt);
            }else if(elmInt === 4){
                elmResult = roman[idx].equalFour;
            }else if(elmInt < 9){
                elmResult = roman[idx].beforeNine_First+roman[idx].beforeNine_Second.repeat(elmInt-5);
            }else {
                elmResult = roman[idx].equalNine;
            }
        }
        result.push(elmResult);
    });
    return result.reverse().join('');
};

module.exports = intToRoman;