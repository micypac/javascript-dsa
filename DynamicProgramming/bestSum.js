/*
  Write a function bestSum that takes in target number and an array of numbers as arguments.

  The function should return an array containing the shortest combination of numbers that add up to exactly the target sum.
  If there is no combination that adds up to target sum, return null.
  If there is a tie for the shortest combination, you may return any of the shortest.
  
  You may use an element of the array as many times as needed.
  You may assume that all input numbers are nonnegative.

  bestSum(7, [5,3,4,7]) => [7] wins against [3, 4]
  bestSum(8, [2,3,5]) => [3, 5] wins against [2,2,2,2] and [2,3,3]
*/

/*****************************************************
 * Recursive
 * m = target sum
 * n = arr number of elements
 * Time O((n^m) * m); Space O(m^2)
 *****************************************************/

const bestSum = (targetSum, arr) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of arr) {
    const remainder = targetSum - num
    const remainderResult = bestSum(remainder, arr)

    if (remainderResult !== null) {
      const remainderCombo = [...remainderResult, num]

      if (
        shortestCombination === null ||
        remainderCombo.length < shortestCombination.length
      ) {
        shortestCombination = remainderCombo
      }
    }
  }

  return shortestCombination
}

// console.log(bestSum(7, [5, 3, 4, 7]))
// console.log(bestSum(8, [2, 3, 5]))

/*****************************************************
 * Memoized version
 * Time O(n * m^2); Space O(m^2)
 *****************************************************/

const bestSum2 = (targetSum, arr, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of arr) {
    const remainder = targetSum - num
    const remainderResult = bestSum2(remainder, arr, memo)

    if (remainderResult !== null) {
      const remainderCombination = [...remainderResult, num]

      if (
        shortestCombination === null ||
        remainderCombination.length < shortestCombination.length
      ) {
        shortestCombination = remainderCombination
      }
    }
  }

  memo[targetSum] = shortestCombination
  return shortestCombination
}

console.log(bestSum2(7, [5, 3, 4, 7])) // [7]
console.log(bestSum2(8, [2, 3, 5])) // [3,5]
console.log(bestSum2(8, [1, 4, 5])) // [4,4]
console.log(bestSum2(100, [1, 2, 5, 25])) // [25,25,25,25]
