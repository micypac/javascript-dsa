/*
  Priority Queue
  A priority queue is an abstract data type that operates similar to a normal queue except that each element has a certain priority.
  The priority of the elements in the queue determines the order in which elements are removed.
*/

class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

// This is MinBinaryHeap, inversed logic of MaxBinaryHeap.
// Usually for priority queues, the smaller the number the higher it has the priority.
class PriorityQueue {
  constructor() {
    this.values = []
  }

  /*
    Add/Enqueue pseudocode
    - push the value into the values property on the heap
    - bubble up
      - create a variable called index which is the length of the values property - 1
      - create a variable called parentIdx which is Math.floor((index - 1) / 2)
      - keep looping as long as the values of the parentIdx is less than the values element at the child index
        - swap the values from parentIdx and child index
        - set the index to be the parentIdx, and start over
  */
  add(value, priority) {
    let newNode = new Node(value, priority)
    this.values.push(newNode)

    // bubble up; if value has higher value than parent, swap its places to satisfy MaxBinaryHeap rules
    let idx = this.values.length - 1

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      if (newNode.priority >= parent.priority) {
        break
      } else {
        this.values[parentIdx] = newNode
        this.values[idx] = parent
        idx = parentIdx
      }
    }
  }

  /*
    Poll/Dequeue pseudocode
    - swap the first value in the values property with the last one
    - pop from the values property, so you can return the value at the end
    - have the new root "bubble down" to the correct spot to preserve heap rules
      - parent index starts at 0 (the root)
      - find the index of the left child: 2n + 1 (make sure its not out of bounds)
      - find the index of the right child: 2n + 2 (make sure its not out of bounds)
      - if the left or right is larger than the parent, swap. if both left and right are larger, swap with the larger child
      - the child index you swapped to now becomes the new parent index
      - keep looping and swapping until neither the child is larger than the parent
      - return the removed root
  */
  poll() {
    let temp = this.values[0]
    this.values[0] = this.values[this.values.length - 1]
    this.values[this.values.length - 1] = temp

    let popped = this.values.pop()

    // bubble down
    let idx = 0
    while (true) {
      let leftIdx = 2 * idx + 1
      let rightIdx = 2 * idx + 2
      let node = this.values[idx]
      let leftNode = this.values.length > leftIdx ? this.values[leftIdx] : null
      let rightNode =
        this.values.length > rightIdx ? this.values[rightIdx] : null

      // console.log(node, leftNode, rightNode)

      let smallerNode, smallerNodeIdx
      if (leftNode?.priority <= rightNode?.priority) {
        smallerNode = leftNode
        smallerNodeIdx = leftIdx
      } else {
        smallerNode = rightNode
        smallerNodeIdx = rightIdx
      }

      if (smallerNode?.priority < node?.priority) {
        this.values[idx] = smallerNode
        this.values[smallerNodeIdx] = node
        idx = smallerNodeIdx
      } else {
        break
      }
    }

    return popped
  }
}

const ER = new PriorityQueue()
ER.add('common cold', 5)
ER.add('gunshot wound', 1)
ER.add('high fever', 4)
ER.add('inflamed apendix', 2)
ER.add('skin laceration', 3)
console.log(ER)
console.log(ER.poll())
console.log(ER)
