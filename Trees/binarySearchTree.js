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
}

const myBst = new BinarySearchTree()
myBst.insert(10)
myBst.insert(5)
myBst.insert(13)
myBst.insert(2)
myBst.insert(7)
myBst.insert(11)
myBst.insert(16)
console.log(myBst)
