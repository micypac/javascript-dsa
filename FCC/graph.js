const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

/* Directed unweighted graph
      a  → c
      ↓    ↓
      b    e
      ↓
      d  → f
*/

/*****************************************************
 * DEPTH FIRST SEARCH
 *****************************************************/

// Iterative
const depthFirstPrintI = (graph, source) => {
  const stack = [source]

  while (stack.length > 0) {
    const current = stack.pop()
    console.log(current)

    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}

// Recursive
const depthFirstPrintR = (graph, source) => {
  console.log(source)
  for (let neighbor of graph[source]) {
    depthFirstPrintR(graph, neighbor)
  }
}

/*****************************************************
 * BREADTH FIRST SEARCH
 *****************************************************/

const breadthFirstPrint = (graph, source) => {
  const queue = [source]
  while (queue.length > 0) {
    const current = queue.shift()
    console.log(current)
    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
}

// depthFirstPrintI(graph, 'a')
// depthFirstPrintR(graph, 'a')
// breadthFirstPrint(graph, 'a')

const graph2 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
}

/* Directed unweighted graph
      f  → g  → h    
      ↓  ↗   
      i  ← j
      ↓
      k  
*/

/*****************************************************
 * HAS PATH
 * Define a function that takes an object representing the adjacency list of a directed acyclic graph and two nodes (src, and dst).
 * The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
 *****************************************************/

// Recursive
const hasPathR = (graph, src, dst) => {
  if (src === dst) return true

  for (let neighbor of graph[src]) {
    if (hasPathR(graph, neighbor, dst) === true) return true
  }

  return false
}

// Iterative using BFS
const hasPathI = (graph, src, dst) => {
  const queue = [src]

  while (queue.length > 0) {
    const current = queue.shift()

    if (current === dst) return true

    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }

  return false
}

console.log(hasPathR(graph2, 'f', 'j'))
console.log(hasPathI(graph2, 'f', 'k'))

/*****************************************************
 * UNDIRECTED PATH
 * Define a function that takes an array of edges for an undirected graph and two nodes A & B.
 * The function should return a boolean indicating whether or not there exists a path between nodes A & B.
 *****************************************************/

/* Undirected unweighted graph. Usually represented by an array of edges.
      i ---- j   
      |   
      |   
      k ---- l
      |
      m
      
      o ---- n
*/
const graph3 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

// helper function to convert array of edges into adjacency list.
const buildAdjacencyListGraph = (edges) => {
  const graph = {}

  for (let edge of edges) {
    const [a, b] = edge

    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []

    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}

// graph3 converted into adjacency list
const graph3AL = buildAdjacencyListGraph(graph3)
console.log(graph3AL)

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildAdjacencyListGraph(edges)
  return hasUndirectedPath(graph, nodeA, nodeB, new Set())
}

// Recursive
const hasUndirectedPath = (graph, src, dst, visited) => {
  if (src === dst) return true
  if (visited.has(src)) return false

  visited.add(src)

  for (let neighbor of graph[src]) {
    if (hasUndirectedPath(graph, neighbor, dst, visited) === true) return true
  }

  return false
}

console.log(undirectedPath(graph3, 'i', 'm'))
console.log(undirectedPath(graph3, 'i', 'n'))

/*****************************************************
 * CONNECTED COMPONENTS COUNT
 * Define a function that takes in the adjacency list of an undirected graph.
 * The function should return the number of components within the graph.
 *****************************************************/

const connectedComponents = (graph) => {
  const visited = new Set()
  let count = 0

  for (let node in graph) {
    if (explore(graph, node, visited) === true) count += 1
  }

  return count
}

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false

  visited.add(String(current))

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited)
  }

  return true
}

const graph4 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}

/* 
          5
          |  \
    1 --- 0 --- 8
      
    4 --- 2
       \  |
          3
*/

console.log(connectedComponents(graph4)) // 2
