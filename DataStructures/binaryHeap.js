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
}

const heap = new MaxBinaryHeap()
console.log(heap)
heap.insert(55)
console.log(heap)
