// Given two binary trees and imagine that when you
//  put one of them to cover the other, some nodes of
//  the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge
// rule is that if two nodes overlap, then sum node values
// up as the new value of the merged node. Otherwise, the
// NOT null node will be used as the node of new tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// 1. Recursive
const mergeTrees = function(t1, t2) {
  if (t1 && t2) {
    const newNode = new TreeNode(t1.val + t2.val);
    newNode.left = mergeTrees(t1.left, t2.left);
    newNode.right = mergeTrees(t1.right, t2.right);
    return newNode;
  }

  return t1 || t2;
};

// 2. Recursive (more checks)
const mergeTrees = (t1, t2) => {
  if (t1 === null && t2 === null) {
    return null;
  } else if (t1 === null) {
    t1 = new TreeNode(0);
  } else if (t2 === null) {
    t2 = new TreeNode(0);
  }
  const newNode = new TreeNode(t1.val + t2.val);
  newNode.left = mergeTrees(t1.left, t2.left);
  newNode.right = mergeTrees(t1.right, t2.right);

  return newNode;
};
