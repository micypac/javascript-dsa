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
    this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1)
    this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1)
  }
}

const flightGraph = new Graph()

flightGraph.addVertex('Newark')
flightGraph.addVertex('Ontario')
flightGraph.addVertex('Dallas')

flightGraph.addEdge('Newark', 'Ontario')
flightGraph.addEdge('Newark', 'Dallas')

console.log(flightGraph)
flightGraph.removeEdge('Newark', 'Dallas')
flightGraph.removeEdge('Newark', 'Ontario')
console.log(flightGraph)
