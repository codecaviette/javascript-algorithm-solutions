/* 
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
    Input: root = [4,2,7,1,3,6,9]
    Output: [4,7,2,9,6,3,1]

Example 2:
    Input: root = [2,1,3]
    Output: [2,3,1]
*/

/* Solution */

var invertTree = function(root) {
    if (!root) return null;
    if (!root.left && !root.right) return root;
    else {
        let leftTree = invertTree(root.left);
        let rightTree = invertTree(root.right);
        
        root.left = rightTree;
        root.right = leftTree;
    }
    return root;
};