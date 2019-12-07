// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes
// along the longest path from the root
// node down to the farthest leaf node.

// 1. Simple recursion (DFS)
const maxDepth = function(root) {
  return countNodes(root, 0);
};

function countNodes(node, n) {
  if (!node) return n;

  let left = countNodes(node.left, n + 1);
  let right = countNodes(node.right, n + 1);

  return Math.max(left, right);
}

// 2. Short recursion
const maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 3. BFS
const maxDepth = function(root) {
  if (!root) return 0;
  let queue = [root];
  let max = 0;

  while (queue.length > 0) {
    let len = queue.length;
    max++;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return max;
};
