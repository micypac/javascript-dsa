/*
  Dijkstra's algorithm pseudocode
  - the function should accept start and end vertex
  - create an object called distances and set each key to be every vertex from the adjacency list with the value of infinity,
    except for the start vertex which should have a value of 0. This will store and keep the distance values from start to each vertex.
  - after setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the start vertex,
    which should have a priority of 0 because that's where we begin.
  - create another object variable called previous and set each key to be every vertex from the adjacency list and their value to null.
  - start looping as long as is anything in the priority queue
    - dequeue a vertex from the queue
    - if that vertex is same as end parameter, we are done - base case
    - otherwise loop each value in the adjacency list for that vertex
      - calculate the distance to that vertex from the start vertex
      - if calculated distance is < what is current value in distance object
        - update new value in distance object
        - update previous object variable to have vertex        
        - enqueue the vertex with the total distance from the start vertex

  *** this version will use a "Priority Queue" class using an array. Version 2 will use the minBinaryHeap we implemented earlier.
*/

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
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
      smallest = queue.dequeue().val

      if (smallest === end) {
        // console.log(distances)
        // console.log(previous)
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

console.log(graph.dijkstraPath('A', 'E'))
