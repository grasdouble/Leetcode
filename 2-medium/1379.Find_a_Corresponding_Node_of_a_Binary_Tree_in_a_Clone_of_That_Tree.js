/*
Title: 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
URL: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
Personal Submission:
    https://leetcode.com/submissions/detail/444244683/
    56 / 56 test cases passed.
    Runtime: 304 ms, faster than 79.57% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
    Memory Usage: 59.6 MB, less than 42.56% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.

----
Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

Follow up: Solve the problem if repeated values on the tree are allowed.

 

Example 1:


Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.
Example 2:


Input: tree = [7], target =  7
Output: 7
Example 3:


Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
Output: 4
Example 4:


Input: tree = [1,2,3,4,5,6,7,8,9,10], target = 5
Output: 5
Example 5:


Input: tree = [1,2,null,3], target = 2
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [1, 10^4].
The values of the nodes of the tree are unique.
target node is a node from the original tree and is not null.

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = function(original, cloned, target) {
    if(cloned.val === target.val){
        return cloned;
    }else{
        return test(cloned.left, cloned.right, target);
    }
};

const test = (r, l, t) =>{
    let result = null;
    if(r?.val === t.val){
        result = r;
    }else if(l?.val == t.val){
        result = l;
    }
    if(!result){
        result = (r?.left || r?.right)? test(r?.left, r?.right, t): null;
    } 
    if(!result){
        result = (l?.left || l?.right) ? test(l?.left, l?.right, t): null;
    }
    return result;
}