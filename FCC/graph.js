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

depthFirstPrintI(graph, 'a')
depthFirstPrintR(graph, 'a')
breadthFirstPrint(graph, 'a')
