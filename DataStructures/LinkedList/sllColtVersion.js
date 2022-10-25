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

  /*
    insert pseudocode
    - if the index is less than zero or greater than length, return false
    - if the index is same as length, push new node to the end of the list
    - if the index is zero, unshift new node to the beginning of the list
    - otherwise, using the get method, access the node at "index - 1"
    - set the next property on that node to be the new node
    - set the next property on the new node to be the previous next
    - increment length
    - return true
  */
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false
    if (idx === this.length) {
      this.push(val)
    } else if (idx === 0) {
      this.unshift(val)
    } else {
      let newNode = new Node(val)
      let prevNode = this.get(idx - 1)
      newNode.next = prevNode.next
      prevNode.next = newNode
      this.length++
    }
    return true
  }

  /*
    remove pseudocode
    - if the index is less than zero or greater than length, return undefined
    - if the index is same as length - 1, use pop method
    - if the index is zero, use shift method
    - otherwise, using the get method, access the node at "index - 1"
    - set the next property of that node to be the next node of the next node
    - decrement length
    - return the value of the node removed
  */
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined
    if (idx === this.length - 1) {
      return this.pop()
    } else if (idx === 0) {
      return this.shift()
    } else {
      let prevNode = this.get(idx - 1)
      let currentNode = this.get(idx)
      prevNode.next = currentNode.next
      currentNode.next = null
      this.length--
      return currentNode.val
    }
  }

  /*
    reverse pseudocode
    - create a variable called "current" and initialize it to the head property
    - swap the head and tail
    - create a variable called "next"
    - create a variable called "prev" and set it to null
    - loop though the list
    - set "next" to be the next property on whatever "current" is
    - set the next property on the "current" to be whtever "prev" is
    - set "prev" to be the value of the "current" variable
    - set the "current" variable to be the value of the "next" variable
  */
  reverse() {
    let currentNode = this.head
    let nextNode
    let prevNode = null
    // swap head and tail
    this.head = this.tail
    this.tail = currentNode

    while (currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
    }
    return this
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
