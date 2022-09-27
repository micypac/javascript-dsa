/*
Write a function allConstruct that takes in a target string and an array of strings (word bank) as arguments.
The function should return a 2D array containing all of the ways that the target can be 
constructed by concatenating elements from the word bank array. 
Each element of the 2D array should represent one combination that constructs the target.

You may reuse elements of the word bank array as many times as needed.
*/

/*****************************************************
 * Recursive
 * m = target.length
 * n = array word bank length
 * Time O(n^m); Space O(m)
 *****************************************************/
const allConstruct = (target, wordBank) => {
  if (target.length === 0) return [[]]

  const result = []

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct(suffix, wordBank)
      // console.log('suffixWays', suffixWays)
      const targetWays = suffixWays.map((way) => [word, ...way])
      // console.log('targetWays', targetWays)
      result.push(...targetWays)
    }
  }

  return result
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))

/*****************************************************
 * Memoized version
 * Time O(n^m); Space O(m)
 *****************************************************/

const allConstruct2 = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target.length === 0) return [[]]

  const result = []

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct2(suffix, wordBank, memo)

      const targetWays = suffixWays.map((way) => [word, ...way])

      result.push(...targetWays)
    }
  }

  memo[target] = result
  return result
}

console.log(allConstruct2('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(
  allConstruct2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']),
)
console.log(
  allConstruct2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']),
)
console.log(
  allConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ]),
)
