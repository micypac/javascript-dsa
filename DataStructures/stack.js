/*
  STACK

  A LIFO data structure
  Last element added to the stack will be first element removed from the stack.
  Push and pop methods is basically shift and unshift since we need time complexity O(1).
  If we pop at end instead of beginning, its going to be O(n) since assigning the new tail will take linear time (we have no 
  reference to node before tail o we have to traverse from the head)

  Where stacks are used:
  - managing function invocations
  - undo/redo in text editores and word processors
  - browser page histories(back/forward)
  - compiler syntax checker for matching brackets and braces
  - can be used to do DFS for Trees and Graph
*/
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    let newNode = new Node(val)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      newNode.next = this.first
      this.first = newNode
    }
    this.size++
    return this.size
  }

  pop() {
    if (!this.first) return null

    let popped = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = popped.next
      popped.next = null
    }

    this.size--
    return popped.val
  }
}
