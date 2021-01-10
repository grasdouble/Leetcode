/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * https://leetcode.com/problems/word-ladder/discuss/781423/2-JAVASCRIPT-SOLUTION
 */

var ladderLength = function(beginWord, endWord, wordList, stack = [beginWord], seen={beginWord:true}, depth=1,sz = endWord.length) {
    const dict = wordList.reduce((m,e)=>(m[e]=true)&&m, {})
    while(stack.length>0) {
        let len = stack.length
        for(let i=0;i<len;i++) {
            const curr = stack.shift()
            if (curr==endWord) return depth
            for(let le=0;le<sz;le++) {
                const arr = curr.split('')
                for (let letterIndex=97;letterIndex<123;letterIndex++) {
                    arr[le] = String.fromCharCode(letterIndex)
                    const new1 = arr.join('')
                    if (!seen[new1] && dict[new1]) {
                        stack.push(new1)
                        seen[new1] = true
                    }
                }
            }   
        }
        depth++
    }
    return 0
  };