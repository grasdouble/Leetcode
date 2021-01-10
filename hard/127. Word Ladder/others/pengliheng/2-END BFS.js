/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * https://leetcode.com/problems/word-ladder/discuss/781423/2-JAVASCRIPT-SOLUTION
 */

var ladderLength = function(beginWord, endWord, wordList, stack=[beginWord], stack2=[endWord], seen=new Set(), depth=1) {
    if (!wordList.includes(endWord)) return 0
    const dict = new Set(wordList)
    let len = endWord.length
    while(stack2.length>0) {
        let sz = stack.length
        for(let i=0;i<sz;i++) {
            const curr = stack.shift()
            if (stack2.includes(curr)) return depth
            if (seen.has(curr)) continue
            seen.add(curr, true)
            for(let le=0;le<len;le++) {
                const arr = curr.split('')
                for (let letterIndex=97;letterIndex<123;letterIndex++) {
                    arr[le] = String.fromCharCode(letterIndex)
                    const new1 = arr.join('')
                    if (dict.has(new1)) {
                        stack.push(new1)
                    }
                }
            }   
        };
        depth++
        [stack, stack2] = [stack2, stack];
    }
    return 0
  };