class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/*
        a
      /   \
     b     c
    / \.    \
   d.  e.    f
*/

// Depth first search iterative.
const depthFirstSearchI = (root) => {
  if (root === null) return []

  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const current = stack.pop()
    result.push(current.val)

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }

  return result
}

// Depth first search recursive.
const depthFirstSearchR = (root) => {
  if (root === null) return []
  const left = depthFirstSearchR(root.left)
  const right = depthFirstSearchR(root.right)
  return [root.val, ...left, ...right]
}

console.log(depthFirstSearchI(a))
console.log(depthFirstSearchR(a))
