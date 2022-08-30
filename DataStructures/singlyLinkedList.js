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
    push pseudocode
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

  /*
    pop pseudocode
    - if there are no nodes in the list, return undefined
    - loop through the list until you reached the tail
    - set the next property of the 2nd to last node to be null
    - set the tail to be the 2nd to the last node
    - decrement the length of the list by 1
    - return the value of the node removed
  */
  pop() {
    if (this.length === 0) return undefined
    let current = this.head
    let beforeCurrent = current

    while (current.next) {
      beforeCurrent = current
      current = current.next
    }

    this.tail = beforeCurrent
    this.tail.next = null

    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current.val
  }

  /*
    shift pseudocode
    - if there are no node, return undeifned
    - store the current head property in a variable
    - set the head property to be the current head's next property
    - decrement length by 1
    - return value of the node removed
  */
  shift() {
    if (!this.head) return undefined

    let shifted = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return shifted.val
  }

  /*
    unshift pseudocode
    - this function should accept a value
    - create a new node using the value passed to the function
    - if list is empty, set the new node to be the new head and tail property of the list
    - otherwise, set the newly created  node's next property to be the current head property on the list
    - set the head property on the list to be the newly created node
    - increment list by 1
    - return the list
  */
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
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
    - loop through the list until you reach the index and return the node at that specific index
  */
  get(idx) {
    if (idx < 0 || idx >= this.length) return null
    let current = this.head
    for (let i = 0; i < this.length; i++) {
      if (i === idx) break
      current = current.next
    }
    return current
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

  traverse() {
    let current = this.head
    while (current) {
      console.log(current.val, current.next)
      current = current.next
    }
  }
}

// const myList = new SinglyLinkedList()
// myList.push('monica')
// myList.push('jenny')
// myList.push('jerlyn')
// myList.push('marissa')

// myList.traverse()

// let pop1 = myList.pop()
// console.log('pop', pop1)
// myList.traverse()
// myList.pop()
// myList.pop()
// myList.pop()

// console.log(myList)
