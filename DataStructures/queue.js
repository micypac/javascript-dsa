/*
  QUEUE

  A FIFO data structure
  First element added to the stack will be first element removed from the stack.

  Where queues are used:
  - print queue
  - downloading files
  - job execution in a single-threaded computers
  - can be used to do BFS for Trees and Graph
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    let newNode = new Node(val)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this.size
  }

  dequeue() {
    if (!this.first) return null

    let removed = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
      removed.next = null
    }
    this.size--
    return removed.val
  }
}

const myQ = new Queue()
myQ.enqueue('first')
myQ.enqueue('second')
myQ.enqueue('third')
myQ.dequeue()
myQ.dequeue()
myQ.dequeue()
