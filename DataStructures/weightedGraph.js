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
}

const traffic = new WeightedGraph()
traffic.addVertex('A')
traffic.addVertex('B')
traffic.addVertex('C')

traffic.addEdge('A', 'B', 5)
traffic.addEdge('A', 'C', 7)

console.log(traffic.adjacencyList)
