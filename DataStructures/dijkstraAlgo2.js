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
    Enqueue pseudocode
    - push the value into the values property on the heap
    - bubble up
      - create a variable called index which is the length of the values property - 1
      - create a variable called parentIdx which is Math.floor((index - 1) / 2)
      - keep looping as long as the values of the parentIdx is less than the values element at the child index
        - swap the values from parentIdx and child index
        - set the index to be the parentIdx, and start over
  */
  enqueue(value, priority) {
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
    dequeue pseudocode
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
  dequeue() {
    let temp = this.values[0]
    this.values[0] = this.values[this.values.length - 1]
    this.values[this.values.length - 1] = temp

    let popped = this.values.pop()

    // bubble down / sink down
    let idx = 0
    while (true) {
      let leftIdx = 2 * idx + 1
      let rightIdx = 2 * idx + 2
      let node = this.values[idx]
      let leftNode = this.values.length > leftIdx ? this.values[leftIdx] : null
      let rightNode =
        this.values.length > rightIdx ? this.values[rightIdx] : null

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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight: weight })
    this.adjacencyList[v2].push({ node: v1, weight: weight })
  }

  dijkstraPath(start, end) {
    const queue = new PriorityQueue()
    const distances = {}
    const previous = {}
    let smallest
    const result = []

    // set up initial state for distances, previous and queue
    for (const key in this.adjacencyList) {
      if (key === start) {
        distances[key] = 0
        queue.enqueue(key, 0)
      } else {
        distances[key] = Infinity
        queue.enqueue(key, Infinity)
      }

      previous[key] = null
    }

    // loop until there is anything in the queue
    while (queue.values.length) {
      smallest = queue.dequeue().value

      if (smallest === end) {
        console.log('distances', distances)
        console.log('previous', previous)
        console.log('queue', queue)
        while (smallest) {
          result.push(smallest)
          smallest = previous[smallest]
        }
        break
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor of this.adjacencyList[smallest]) {
          let candidate = distances[smallest] + neighbor.weight
          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate
            previous[neighbor.node] = smallest
            queue.enqueue(neighbor.node, candidate)
          }
        }
      }
    }

    return result.reverse()
  }
}

const graph = new WeightedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

// console.log(graph.adjacencyList)

console.log(graph.dijkstraPath('A', 'E'))
