const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");

function findMinBST(rootNode) {
  if (rootNode.left === null) {
    return rootNode.val;
  }

  return findMinBST(rootNode.left);
}

function findMaxBST(rootNode) {
  if (rootNode.right === null) return rootNode.val;

  return findMaxBST(rootNode.right);
}

function findMinBT(rootNode) {
  let min = undefined;
  const queue = [rootNode];

  while (queue.length > 0) {
    let shifted = queue.shift();
    if (min === undefined || shifted.val < min) {
      min = shifted.val;
    }

    if (shifted.left !== null) queue.push(shifted.left);
    if (shifted.right !== null) queue.push(shifted.right);
  }

  return min;
}

function findMaxBT(rootNode) {
  let max = undefined;
  const stack = [rootNode];

  while (stack.length > 0) {
    let popped = stack.pop();
    if (max === undefined || popped.val > max) {
      max = popped.val;
    }

    if (popped.left !== null) stack.push(popped.left);
    if (popped.right !== null) stack.push(popped.right);
  }

  return max;
}

function getHeight(rootNode) {
  if (rootNode === null) return -1;

  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}

function balancedTree(rootNode) {
  if (rootNode === null) return true;

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);

  let diff = Math.abs(leftHeight - rightHeight);

  if (
    diff <= 1 &&
    balancedTree(rootNode.left) === true &&
    balancedTree(rootNode.right) === true
  )
    return true;
  else return false;
}

// bstRootBig = new TreeNode(8);
// bstRootBig.left = new TreeNode(3);
// bstRootBig.left.left = new TreeNode(2);
// bstRootBig.left.left.left = new TreeNode(1);
// bstRootBig.left.right = new TreeNode(5);
// bstRootBig.left.right.left = new TreeNode(4);
// bstRootBig.left.right.right = new TreeNode(7);
// bstRootBig.left.right.right.left = new TreeNode(6);
// bstRootBig.right = new TreeNode(10);
// bstRootBig.right.right = new TreeNode(11);
// bstRootBig.right.right.right = new TreeNode(12);
// bstRootBig.right.right.right.right = new TreeNode(15);
// bstRootBig.right.right.right.right.left = new TreeNode(14);

// console.log(balancedTree(bstRootBig));

function countNodes(rootNode) {
  if (rootNode === null) return 0;

  const stack = [rootNode];
  let count = 0;

  while (stack.length > 0) {
    let removed = stack.pop();
    count++;

    if (removed.left !== null) stack.push(removed.left);
    if (removed.right !== null) stack.push(removed.right);
  }

  return count;
}

function getParentNode(rootNode, target) {
  if (rootNode.val === target) return null;

  let stack = [rootNode];

  while (stack.length > 0) {
    let parent = stack.pop();

    if (parent.left !== null) {
      if (parent.left.val === target) return parent;
      stack.push(parent.left);
    }

    if (parent.right !== null) {
      if (parent.right.val === target) return parent;
      stack.push(parent.right);
    }
  }

  return undefined;
}

function inOrderPredecessor(rootNode, target) {
  const stack = [];
  let prev = undefined;
  let removed = undefined;

  while (rootNode || stack.length > 0) {
    if (rootNode) {
      stack.push(rootNode);
      rootNode = rootNode.left;
    } else {
      removed = stack.pop();
      if (removed.val === target && !prev) return null;
      else if (removed.val === target && prev) return prev.val;
      rootNode = removed.right;
    }
    prev = removed;
  }
}

bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);

inOrderPredecessor(bstRoot, 4);

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
  if (rootNode === null) return undefined;

  if (target < rootNode.val) {
    rootNode.left = deleteNodeBST(rootNode.left, target);
  } else if (target > rootNode.val) {
    rootNode.right = deleteNodeBST(rootNode.right, target);
  } else {
    // case 1
    if (!rootNode.left && !rootNode.right) {
      return null;
    }

    // case 3
    if (!rootNode.left) return rootNode.right;
    if (!rootNode.right) return rootNode.left;

    // case 2
    rootNode.val = findMinBST(rootNode.right);
    rootNode.right = deleteNodeBST(rootNode.right, rootNode.val);
  }

  if (rootNode.left === undefined || rootNode.right === undefined)
    return undefined;
  else return rootNode;
}

// bstRoot = new TreeNode(4);
// bstRoot.left = new TreeNode(2);
// bstRoot.left.left = new TreeNode(1);
// bstRoot.left.right = new TreeNode(3);
// bstRoot.right = new TreeNode(6);
// bstRoot.right.left = new TreeNode(5);
// bstRoot.right.right = new TreeNode(7);

// console.log(deleteNodeBST(bstRoot, 9));

const preOrder = (rootNode) => {
  const result = [];

  const traverse = (rootNode) => {
    if (!rootNode) return;

    result.push(rootNode.val);
    traverse(rootNode.left);
    traverse(rootNode.right);
  };

  traverse(rootNode);
  return result;
};

btRoot = new TreeNode(1);
// btRoot.left = new TreeNode(2);
btRoot.right = new TreeNode(2);
// btRoot.left.left = new TreeNode(4);
// btRoot.left.right = new TreeNode(5);
// btRoot.right.left = new TreeNode(6);
// btRoot.right.right = new TreeNode(7);

console.log(preOrder(btRoot));

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
