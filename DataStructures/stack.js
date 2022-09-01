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
