class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /*
    pushing pseudocode
    - this function should accept a value
    - create a new node using the value passed to the function
    - if there is no head property on the list, set the head and tail to be the newly created node
    - otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    - increment length by one
  */
  push(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++

    return this
  }
}
