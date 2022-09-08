/*
  Heaps
  Heaps are Trees. They are very similar to binary search tree, that each parent node can have at most 2 child nodes.
  But unlike BST, there is no order such as smaller values should be to the left or higher values should be to the right.

  In a MaxBinaryHeap, parent nodes are always larger than children nodes.
  - each parent has at most 2 child nodes
  - the value of each parent node is always greater than its child nodes
  - the parent is greater than the children, but there are no guarantees between sibiling nodes
  - a binary heap is as compact as possible. All the children of each node are as full as they can be and left children
    are filled out first

                    100
            19                36
      17          3     25          1
  2       7

  In a MinBinaryHeap, parent nodes are smaller than children nodes. 

                    1
            2                3
      17         19     36        7
  25       100

*/

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  /*
    Insert pseudocode
    - push the value into the values property on the heap
    - bubble up
      - create a variable called index which is the length of the values property - 1
      - create a variable called parentIdx which is Math.floor((index - 1) / 2)
      - keep looping as long as the values of the parentIdx is less than the values element at the child index
        - swap the values from parentIdx and child index
        - set the index to be the parentIdx, and start over
  */
  insert(value) {
    this.values.push(value)

    // bubble up; if value has higher value than parent, swap its places to satisfy MaxBinaryHeap rules
    let idx = this.values.length - 1
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      if (value <= parent) {
        break
      } else {
        this.values[parentIdx] = value
        this.values[idx] = parent
        idx = parentIdx
      }
    }
  }

  /*
    Remove pseudocode
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
  extractMax() {
    let temp = this.values[0]
    this.values[0] = this.values[this.values.length - 1]
    this.values[this.values.length - 1] = temp

    let popped = this.values.pop()

    // bubble down
    let idx = 0
    while (true) {
      let leftIdx = 2 * idx + 1
      let rightIdx = 2 * idx + 2
      let value = this.values[idx]
      let leftValue = this.values.length > leftIdx ? this.values[leftIdx] : null
      let rightValue =
        this.values.length > rightIdx ? this.values[rightIdx] : null
      let largerChild = Math.max(leftValue, rightValue)
      let largerChildIdx = this.values.indexOf(largerChild)

      if (largerChild > value) {
        this.values[idx] = largerChild
        this.values[largerChildIdx] = value
        idx = largerChildIdx
      } else {
        break
      }
    }

    return popped
  }
}

const heap = new MaxBinaryHeap()
console.log(heap)
// heap.insert(55)
// console.log(heap)
console.log(heap.extractMax())
console.log(heap)
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap)
