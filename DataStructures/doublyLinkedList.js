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

  /*
    pop pseudocode
    - if there is no head, return undefined
    - store the current tail in a variable to return later
    - if the length is 1, set head and tail to be null
    - update the tail to be the previous node
    - set new tail's next to be null
    - set old tail's prev to be null, to absolutely sever the connection
    - decrement length
    - return popped node
  */
  pop() {
    if (!this.head) return undefined

    let popped = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = popped.prev
      // sever all connections to the popped node.
      this.tail.next = null
      popped.prev = null
    }

    this.length--
    return popped
  }
}
