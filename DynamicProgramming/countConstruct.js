/*
  Write a function countConstruct that takes in a target string and an array of strings (word bank) as arguments.
  The function should return the number of ways that the target string can be constructed by concatenating elements from the word bank array.
  You may reuse elements of the word bank array as many times as needed.

  countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) => 1
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']) => 0
  countConstruct('purple',['purp','p','ur','le','purpl']) => 2
*/

/*****************************************************
 * Recursive
 * m = target.length
 * n = array word bank length
 * Time O((n^m) * m); Space O(m^2)
 *****************************************************/
const countConstruct = (target, wordBank) => {
  if (target.length === 0) return 1

  let totalCount = 0
  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length)

      const count = countConstruct(suffix, wordBank)

      totalCount += count
    }
  }

  return totalCount
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']),
) // 0
console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']),
) // 4
// console.log(
//   countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ]),
// ) // false. It runs a while!!!

/*****************************************************
 * Memoized version
 * Time O(n * m^2); Space O(m^2)
 *****************************************************/
const countConstruct2 = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target.length === 0) return 1

  let totalCount = 0

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length)
      const count = countConstruct2(suffix, wordBank, memo)
      totalCount += count
    }
  }

  memo[target] = totalCount
  return totalCount
}

console.log('Memoize Run!!!')
console.log(countConstruct2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct2('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(
  countConstruct2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']),
) // 0
console.log(
  countConstruct2('enterapotentpot', [
    'a',
    'p',
    'ent',
    'enter',
    'ot',
    'o',
    't',
  ]),
) // 4
console.log(
  countConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ]),
) // false. It runs a while!!!
