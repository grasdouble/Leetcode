/*
Title: 412. Fizz Buzz
URL: https://leetcode.com/problems/fizz-buzz/
Personal Submission:
    https://leetcode.com/submissions/detail/444299925/
    8 / 8 test cases passed.
    Runtime: 116 ms, faster than 7.76% of JavaScript online submissions for Fizz Buzz.
    Memory Usage: 40.6 MB, less than 56.57% of JavaScript online submissions for Fizz Buzz.

----
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var res = [];
    for(i=1; i<=n;i++){
        var mod3 = i%3 == 0;
        var mod5 = i%5 == 0;
        if( mod3 && mod5){
            res.push('FizzBuzz');
        }else if(mod3){
            res.push('Fizz');
        }else if(mod5){
            res.push('Buzz');
        }else{
            res.push(i.toString());
        }
    }
    return res;
};

module.exports = fizzBuzz;