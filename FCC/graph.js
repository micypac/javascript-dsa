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

console.log('Has path from f -> j? ', hasPathR(graph2, 'f', 'j'))
console.log('Has path from f -> k? ', hasPathI(graph2, 'f', 'k'))

/*****************************************************
 * UNDIRECTED PATH
 * Define a function that takes an array of edges for an undirected graph and two nodes A & B.
 * The function should return a boolean indicating whether or not there exists a path between nodes A & B.
 *****************************************************/

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

// graph3 converted into adjacency list
// const graph3AL = buildAdjacencyListGraph(graph3)
// console.log(graph3AL)

console.log('Has path from i -> m? ', undirectedPath(graph3, 'i', 'm'))
console.log('Has path from i -> n? ', undirectedPath(graph3, 'i', 'n'))

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

console.log(
  'Number of connected components/islands: ',
  connectedComponents(graph4),
) // 2

/*****************************************************
 * LARGEST COMPONENT COUNT
 * Define a function that takes in the adjacency list of an undirected graph.
 * The function should return the number of components within the graph.
 *****************************************************/

const largestComponent = (graph) => {
  let max = 0
  const visited = new Set()

  for (let node in graph) {
    const size = exploreSize(graph, node, visited)
    max = Math.max(max, size)
  }

  return max
}

const exploreSize = (graph, current, visited) => {
  if (visited.has(String(current))) return 0

  visited.add(String(current))
  let size = 1

  for (let neighbor of graph[current]) {
    size += exploreSize(graph, neighbor, visited)
  }

  return size
}

console.log('Largest number of components: ', largestComponent(graph4))

/*****************************************************
 * SHORTEST PATH
 * Define a function that takes in an array of edges for an undirected graph and 2 nodes A & B.
 * The function should return the length of the shortest path between A & B. If theres is o path, return -1.
 *****************************************************/

const edges1 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
]

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildAdjacencyListGraph(edges)
  const visited = new Set([nodeA])
  const queue = [[nodeA, 0]]

  while (queue.length > 0) {
    const [current, distance] = queue.shift()

    if (current === nodeB) return distance

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, distance + 1])
      }
    }
  }

  return -1
}

console.log(`Shortest path from w to z: `, shortestPath(edges1, 'w', 'z')) // 2
console.log(`Shortest path from w to a: `, shortestPath(edges1, 'w', 'a')) // -1

/*****************************************************
 * ISLAND COUNT
 * Define a function that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should
 * return the number of islands on the grid. An island is a vertically and horizontally connected region of land.
 * Time complexity O(rc) = row x col
 *****************************************************/

const islandGrid1 = [
  ['w', 'l', 'w', 'w', 'w'],
  ['w', 'l', 'w', 'w', 'w'],
  ['w', 'w', 'w', 'l', 'w'],
  ['w', 'w', 'l', 'l', 'w'],
  ['l', 'w', 'w', 'l', 'l'],
  ['l', 'l', 'w', 'w', 'w'],
]

const islandCount = (grid) => {
  const visited = new Set()
  let count = 0

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (exploreIsland(grid, r, c, visited) === true) count++
    }
  }

  return count
}

const exploreIsland = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= c && c < grid[0].length

  if (!rowInbounds || !colInbounds) return false

  if (grid[r][c] === 'w') return false

  const pos = r + ',' + c
  if (visited.has(pos)) return false

  visited.add(pos)

  exploreIsland(grid, r - 1, c, visited)
  exploreIsland(grid, r + 1, c, visited)
  exploreIsland(grid, r, c - 1, visited)
  exploreIsland(grid, r, c + 1, visited)

  return true
}

console.log('Grid island count: ', islandCount(islandGrid1))

/*****************************************************
 * MINIMUM ISLAND COUNT
 * Define a function that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should
 * return the size of the smallest island on the grid. An island is a vertically and horizontally connected region of land.
 * You may assume the grid contains at least one island.
 * Time complexity O(rc) = row x col
 *****************************************************/

const minIslandCount = (grid) => {
  const visited = new Set()
  let min = Infinity

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreIsland2(grid, r, c, visited)
      if (size !== 0) min = Math.min(min, size)
    }
  }

  return min
}

const exploreIsland2 = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= c && c < grid[0].length

  if (!rowInbounds || !colInbounds) return 0

  if (grid[r][c] === 'w') return 0

  const pos = r + ',' + c
  if (visited.has(pos)) return 0
  visited.add(pos)

  let size = 1

  size += exploreIsland2(grid, r - 1, c, visited)
  size += exploreIsland2(grid, r + 1, c, visited)
  size += exploreIsland2(grid, r, c - 1, visited)
  size += exploreIsland2(grid, r, c + 1, visited)

  return size
}

console.log('Minimum number of island count: ', minIslandCount(islandGrid1))
