// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val, currentNode = this.root) {
    if (currentNode === null) {
      this.root = new TreeNode(val)
      return
    }

    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val)
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = new TreeNode(val)
      } else {
        this.insert(val, currentNode.right)
      }
    }
  }

  search(val) {
    let currentNode = this.root

    while (currentNode) {
      if (val === currentNode.val) {
        return true
      } else if (val < currentNode.val) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  preOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return

    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }

  inOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return

    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right)
  }

  postOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return

    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val)
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [this.root]

    while (queue.length > 0) {
      let shifted = queue.shift()
      console.log(shifted.val)

      if (shifted.left !== null) queue.push(shifted.left)
      if (shifted.right !== null) queue.push(shifted.right)
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root]

    while (stack.length > 0) {
      let popped = stack.pop()
      console.log(popped.val)

      if (popped.left !== null) stack.push(popped.left)
      if (popped.right !== null) stack.push(popped.right)
    }
  }
}

module.exports = { BinarySearchTree, TreeNode }
