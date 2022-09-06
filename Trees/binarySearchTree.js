/*
  Trees
  A data structure consist of nodes in a parent/child relationship.

  root - top node of a tree
  child - a node connected directly to another node when moving away from the root
  parent - the converse notion of a child
  siblings - a group of nodes with the same parent
  leaf - a node with no children
  edge - the connection between one node and another


  e.g.
  - HTML Dom
  - Computer file systems
  - Abstract syntax tree
  - JSON object structure

  Binary Search Tree
  How BST work:
  - every parent node has at most 2 children( can be 0, 1, or 2)
  - every node to the left of a parent node should be less than the parent
  - every node to the right of a parent node should be greater than the parent
*/

class Node {
  constructor(val) {
    this.val = val
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /*
    Insert pseudocode
    - create a new node
    - starting at the root
      - check if there is root, if not, new node becomes the root
      - if there's root, check the value of the new node is greater than or less than the value of the root
      - if greater
        - check to see if there is a node to the right
          - if there is, move to that node and repeat these steps
          - if theres not, add that node as the right property
      - if it is less
        - check to see if there is a node to the left
          - if there is, move to that node and repeat these steps
          - if theres not, add that node as the left property

    e.g.:
                  10
              5         13
          2      7   11    16
  */
  insert(val) {
    let newNode = new Node(val)

    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let currentNode = this.root

      while (true) {
        if (val === currentNode.val) return undefined

        if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  /*
    Find/Search pseudocode
    - starting at the root
      - check if there is root, if not, we're done searching
      - if there's root, check if the value is the value we're looking for. If found, we're done
      - if greater
        - check to see if there is a node to the right
          - if there is, move to that node and repeat these steps
          - if theres not, we're done searching
      - if it is less
        - check to see if there is a node to the left
          - if there is, move to that node and repeat these steps
          - if theres not, we're done searching
  */
  find(val) {
    if (!this.root) return false

    let current = this.root
    let found = false

    while (current && !found) {
      // if (val === current.val) return current

      if (val < current.val) {
        // if (current.left === null) return false
        current = current.left
      } else if (val > current.val) {
        // if (current.right === null) return false
        current = current.right
      } else {
        found = true
      }
    }

    if (!found) return undefined
    return current
  }

  /*
    BFS (Breadth first search) pseudocode
    - create a queue (can be an array) and a variable to store the values of nodes visited
    - place the root node in the queue
    - loop as long as there is anything in the queue
      - dequeue a node from the queue and push the value of the node into the variable that stores the node
      - if there is a left property on the node dequeued, add it to the queue
      - if there is a right property on the node dequeued, add it to the queue
    - return the variable that stored the nodes visited
  */
  BFS() {
    const result = []
    const queue = []
    let node = this.root

    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      result.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return result
  }

  /*
    DFS (Depth first search) PreOrder pseudocode
    - create a variable to store the values of nodes visited
    - store the root of the BST in a variable called current
    - write a helper function which accepts a node
      - push the value of the node to the variable that stores the values
      - if the node has a left property, call the helper function with the left property on the node
      - if the node has a right property, call the helper function with the right property on the node
    - invoke the helper function with the current helper variable
    - return the array of values
  */
  DFSPreOrder() {
    const result = []
    let current = this.root

    const traverse = (node) => {
      result.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)

    return result
  }

  /*
    DFS (Depth first search) PostOrder pseudocode. This is like the opposite order for DFS Pre Order, children nodes will be visited first,
    next are the parents and last is the root node.
    - create a variable to store the values of nodes visited
    - store the root of the BST in a variable called current
    - write a helper function which accepts a node
      - if the node has a left property, call the helper function with the left property on the node
      - if the node has a right property, call the helper function with the right property on the node
      - push the value of the node to the variable that stores the values
    - invoke the helper function with the current helper variable
    - return the array of values
  */
  DFSPostOrder() {
    const result = []
    let current = this.root

    const traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.val)
    }

    traverse(current)

    return result
  }
}

const myBst = new BinarySearchTree()
myBst.insert(10)
myBst.insert(5)
myBst.insert(13)
myBst.insert(2)
myBst.insert(7)
myBst.insert(11)
myBst.insert(16)
console.log(myBst.BFS())
console.log(myBst.DFSPreOrder())
console.log(myBst.DFSPostOrder())
