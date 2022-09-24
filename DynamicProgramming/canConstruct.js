/*
  Write a function canConstruct that takes in a target string and an array of strings (word bank) as arguments.

  The function should return a boolean indicating whether or not the target string can be constructed by concatenating
  elements of the word bank array.
  You may reuse elements of the word bank array as many times as needed.
  

  canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) => true
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']) => false
*/

/*****************************************************
 * Recursive
 * m = target.length
 * n = array word bank length
 * Time O((n^m) * m); Space O(m^2)
 *****************************************************/
const canConstruct = (target, wordBank) => {
  if (target.length === 0) return true

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length)

      if (canConstruct(suffix, wordBank) === true) return true
    }
  }

  return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']),
) // false
console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']),
) // true
// console.log(
//   canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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
const canConstruct2 = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target.length === 0) return true

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length)

      if (canConstruct2(suffix, wordBank, memo) === true) {
        memo[target] = true
        return true
      }
    }
  }

  memo[target] = false
  return false
}

console.log(canConstruct2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(
  canConstruct2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']),
) // false
console.log(
  canConstruct2('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']),
) // true
console.log(
  canConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ]),
) // false. Fixed runtime with memoization!
