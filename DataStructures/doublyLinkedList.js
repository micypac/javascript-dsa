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

  /*
    shift pseudocode
    - if there is no head, return undefined
    - store the current head in a variable to return later
    - if the length is 1, set head and tail to be null
    - update the head to be the next node
    - set new head's next to be null
    - set old head's prev to be null, to absolutely sever the connection
    - decrement length
    - return popped node
  */
  shift() {
    if (!this.head) return undefined

    let shifted = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shifted.next
      this.head.prev = null
      shifted.next = null
    }
    this.length--
    return shifted
  }

  /*
    unshift pseudocode
    - create a new node using the value passed to the function
    - if list is empty, set the new node as the head and tail property of the list
    - otherwise, set the prev property of the head to be the new node
    - set the next property of the new node to be the head
    - and set the head property of the list to be the new node
    - increment list
    - return list
  */
  unshift(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  /*
    get pseudocode
    - this function should accept an index
    - if the index is less than zero or greater than or equal to the length of the list, return null
    - if the index is closer to the start of the list, loop through the list beginning at head
    - if the index is closer to the end of the list, loop through the list beginning at tail
    - return node
  */
  get(idx) {
    if (idx < 0 || idx >= this.length) return null

    let listDiff = this.length - idx - 1
    let count = 0
    let currentNode

    if (idx <= listDiff) {
      currentNode = this.head
      while (count < idx) {
        currentNode = currentNode.next
        count++
      }
    } else {
      currentNode = this.tail
      while (count < listDiff) {
        currentNode = currentNode.prev
        count++
      }
    }

    return currentNode
  }

  /*
    set pseudocode
    - this function should accept an index and a value
    - use get function to find specific node
    - if node is not found, return false
    - if found, set the value of that node to be the parameter received and return true
  */
  set(idx, val) {
    let currentNode = this.get(idx)
    if (!currentNode) return false
    currentNode.val = val
    return true
  }

  /*
    insert pseudocode
    - if the index is less than zero or greater than length, return false
    - if the index is same as length, push new node to the end of the list
    - if the index is zero, unshift new node to the beginning of the list
    - otherwise, using the get method, access the node at "index"
    - create another variable accessing the prev property of the retrieved node above
    - set the next property on that beforeNode to be the new node
    - set the prev property of the retrieved node to be the new node
    - set new node's next property to be the retrieved node
    - set new node's prev property to be the beforeNode
    - increment length
    - return true
  */
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false
    if (idx === 0) {
      this.unshift(val)
    } else if (idx === this.length) {
      this.push(val)
    } else {
      let newNode = new Node(val)
      let currentNode = this.get(idx)
      let prevNode = currentNode.prev
      newNode.prev = prevNode
      newNode.next = currentNode
      prevNode.next = newNode
      currentNode.prev = newNode
      this.length++
    }
    return true
  }

  /*
    remove pseudocode
    - if the index is less than zero or greater than or equal to length, return undefined
    - if the index is same as length, pop the list
    - if the index is zero, shift the list
    - otherwise, using the get method, access the removedNode at "index"
    - create additional variables for the previousNode and nextNode
    - connect previousNode and nextNode with each other
    - set null on removedNode next and prev property
    - decrement length
    - return removedNode
  */
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined
    if (idx === 0) return this.shift()
    if (idx === this.length - 1) return this.pop()

    let currentNode = this.get(idx)
    let beforeNode = currentNode.prev
    let afterNode = currentNode.next
    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    currentNode.next = null
    currentNode.prev = null
    this.length--
    return currentNode
  }
}
