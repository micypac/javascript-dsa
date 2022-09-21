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
