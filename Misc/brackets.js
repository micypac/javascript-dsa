/*
  Brackets
  Given a string made up of the following brackets: (){}[], determine whether the brackets properly match.
  [{}] // valid
  (()()) // valid
  {] // invalid
  [()]))() // invalid
  []{}({}) // valid
*/

const brackets = (str) => {
  const stack = []
  const bracketPairs = {
    '[': ']',
    '{': '}',
    '(': ')',
  }
  const leftBrackets = Object.keys(bracketPairs)

  for (const char of str) {
    if (leftBrackets.includes(char)) {
      stack.push(char)
    } else {
      // if (!stack.length) return false
      const popped = stack.pop()
      if (char !== bracketPairs[popped]) {
        return false
      }
    }
  }
  return true
}

console.log(brackets('[{}]'))
console.log(brackets('(()())'))
console.log(brackets('{]'))
console.log(brackets('[()]))()'))
console.log(brackets('[]{}({})'))
console.log(brackets(']'))
