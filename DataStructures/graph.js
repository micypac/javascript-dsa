class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  /*
    adding an edge
    - this function should accept 2 vertices
    - the function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    - the function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    - set aside handling errors or invalid vertices for now
  */
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  /*
    removing an edge
    - this function should accept 2 vertices
    - the function should reassign the key of vertex1 to be an array that does not contain vertex2
    - the function should reassign the key of vertex2 to be an array that does not contain vertex1
    - set aside handling errors or invalid vertices for now
  */
  removeEdge(v1, v2) {
    //*** course solution */
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (item) => item !== v2,
    )
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (item) => item !== v1,
    )
  }

  /*
    removing a vertex
    - the function should accept a vertex to remove
    - the function should loop as long there are any other vertices in the adjacency list for that vertex
    - inside the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
    - delete the key in the adjacency list for that vertex
  */
  removeVertex(v) {
    for (const item of this.adjacencyList[v]) {
      this.removeEdge(item, v)
    }

    delete this.adjacencyList[v]
  }

  /*
    DFS (recursive)
    - function should accept starting vertex/node to traverse (like root for BST)
    - create a list to store the end result and return at end
    - create an object to store visited nodes
    - create a helper function which accepts a node/vertex
      - if node/vertex is empty, return (this is the base case)
      - add vertex to result list and mark them as visited
      - loop over all the values in the adjacencyList for that node/vertex
      - if any of the values is not visited, recursively call the helper function with that node/vertex
  */
  DFSR(start) {
    if (!this.adjacencyList[start]) return null
    const result = []
    const visited = {}
    // preserving the graph since the "this" inside helper function has now different context
    const adjacencyList = this.adjacencyList

    const helper = (node) => {
      result.push(node)
      visited[node] = true
      adjacencyList[node].forEach((element) => {
        if (!visited[element]) {
          return helper(element)
        }
      })
    }

    helper(start)
    return result
  }
}

const flightGraph = new Graph()

// flightGraph.addVertex('Tokyo')
// flightGraph.addVertex('Dallas')
// flightGraph.addVertex('Aspen')
// flightGraph.addVertex('Hong Kong')
// flightGraph.addVertex('Los Angeles')

// flightGraph.addEdge('Tokyo', 'Dallas')
// flightGraph.addEdge('Tokyo', 'Hong Kong')
// flightGraph.addEdge('Dallas', 'Aspen')
// flightGraph.addEdge('Dallas', 'Hong Kong')
// flightGraph.addEdge('Dallas', 'Los Angeles')
// flightGraph.addEdge('Los Angeles', 'Hong Kong')
// console.log(flightGraph)
// console.log(flightGraph)
// flightGraph.removeEdge('Newark', 'Dallas')
// flightGraph.removeEdge('Newark', 'Ontario')
// flightGraph.removeVertex('Hong Kong')
// console.log(flightGraph)

flightGraph.addVertex('A')
flightGraph.addVertex('B')
flightGraph.addVertex('C')
flightGraph.addVertex('D')
flightGraph.addVertex('E')
flightGraph.addVertex('F')

flightGraph.addEdge('A', 'B')
flightGraph.addEdge('A', 'C')
flightGraph.addEdge('B', 'D')
flightGraph.addEdge('C', 'E')
flightGraph.addEdge('D', 'E')
flightGraph.addEdge('D', 'F')
flightGraph.addEdge('E', 'F')

console.log(flightGraph)
console.log(flightGraph.DFSR('M'))
