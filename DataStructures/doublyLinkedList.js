class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /*
    push pseudocode
    - create a new node using the value passed to the function
    - if list is empty, set the new node as the head and tail property of the list
    - otherwise, set the next property of the tail to be the new node
    - set the prev property of the new node to be the tail
    - and set the tail list property as the new node
    - increment list
    - return list
  */
  push(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }
}
