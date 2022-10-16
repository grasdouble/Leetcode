/*
Title: 771. Jewels and Stones
URL: https://leetcode.com/problems/jewels-and-stones/
Personal Submission 1:
    https://leetcode.com/problems/jewels-and-stones/submissions/822563584/
    Runtime: 173 ms, faster than 5.17% of JavaScript online submissions for Jewels and Stones.
    Memory Usage: 45.6 MB, less than 5.12% of JavaScript online submissions for Jewels and Stones.
Personal Submission 2:
    https://leetcode.com/problems/jewels-and-stones/submissions/822564781/
    Runtime: 102 ms, faster than 47.49% of JavaScript online submissions for Jewels and Stones.
    Memory Usage: 43.2 MB, less than 24.24% of JavaScript online submissions for Jewels and Stones.
Personal Submission 3:
    https://leetcode.com/problems/jewels-and-stones/submissions/822573270/
    Runtime: 66 ms, faster than 93.44% of JavaScript online submissions for Jewels and Stones.
    Memory Usage: 42.6 MB, less than 44.19% of JavaScript online submissions for Jewels and Stones.
Personal Submission 4:
    https://leetcode.com/problems/jewels-and-stones/submissions/822574086/
    Runtime: 71 ms, faster than 86.92% of JavaScript online submissions for Jewels and Stones.
    Memory Usage: 42.1 MB, less than 83.31% of JavaScript online submissions for Jewels and Stones.
Personal Submission 5:
    https://leetcode.com/problems/jewels-and-stones/submissions/822579899/
    Runtime: 75 ms, faster than 81.5% of JavaScript online submissions for Jewels and Stones.
    Memory Usage: 42.3 MB, less than 68.68% of JavaScript online submissions for Jewels and Stones.

----

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones1 = (jewels, stones) => {
  let tmpResultFilter;
  let result = 0;
  jewels.split("").forEach((jewel) => {
    tmpResultFilter = stones.split("").filter((item) => {
      return item === jewel;
    });
    result += tmpResultFilter.length;
  });
  return result;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones2 = (jewels, stones) => {
  let tmpResultFilter = [];
  jewels.split("").filter((jewel) => {
    tmpResultFilter.push(
      ...stones.split("").filter((item) => {
        return item === jewel;
      })
    );
  });
  return tmpResultFilter.length;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones3 = (jewels, stones) => {
  let jewelMap = new Map();
  let result = 0;
  jewels.split("").forEach((jewel) => {
    jewelMap.set(jewel, 0);
  });

  stones.split("").forEach((stone) => {
    if (jewelMap.get(stone) >= 0) {
      jewelMap.set(stone, jewelMap.get(stone) + 1);
    }
  });

  Array.from(jewelMap.values()).forEach((count) => (result += count));
  return result;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones4 = (jewels, stones) => {
  let jewelMap = new Map();
  let result = 0;
  jewels.split("").forEach((jewel) => {
    jewelMap.set(jewel, true);
  });

  stones.split("").forEach((stone) => {
    if (jewelMap.get(stone)) {
      result += 1;
    }
  });

  return result;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones5 = (jewels, stones) => {
  let result = 0;
  let mapJ = jewels
    .split("")
    .reduce((jewelMap, jewel) => jewelMap.set(jewel, true), new Map());
  result = stones.split("").reduce((total, stone) => {
    return mapJ.get(stone) ? total + 1 : total;
  }, 0);
  return result;
};

module.exports = {
  numJewelsInStones1,
  numJewelsInStones2,
  numJewelsInStones3,
  numJewelsInStones4,
  numJewelsInStones5,
};
