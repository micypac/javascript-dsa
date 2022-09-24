/*
  Write a function howSum that takes in target number and an array of numbers as arguments.

  The function should return an array containing any combination of elements that add up to exactly the target sum.
  If there is no combination that adds up to target sum, return null.
  If there are multiple combinations possible, you may return a single one.
  
  You may use an element of the array as many times as needed.
  You may assume that all input numbers are nonnegative.

  howSum(7, [5,3,4,7]) => [3,4]
*/

/*****************************************************
 * Recursive
 * m = target sum
 * n = arr number of elements
 * Time O((n^m) * m); Space O(m)
 *****************************************************/
const howSum = (targetSum, arr) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of arr) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, arr)

    if (remainderResult !== null) {
      return [...remainderResult, num]
    }
  }

  return null
}

console.log(howSum(7, [2, 3])) // [ 3, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])) // [ 4, 3 ]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2,2,2,2]
// console.log(howSum(300, [7, 14])) // null. takes too long to run in brute-force!

/*****************************************************
 * Memoized version
 * Time O(n * m^2); Space O(m^2)
 *****************************************************/
const howSum2 = (targetSum, arr, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of arr) {
    const remainder = targetSum - num
    const remainderResult = howSum2(remainder, arr, memo)

    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num]
      return memo[targetSum]
    }
  }

  memo[targetSum] = null
  return null
}

console.log(howSum2(7, [2, 3]))
console.log(howSum2(7, [5, 3, 4, 7]))
console.log(howSum2(7, [2, 4]))
console.log(howSum2(8, [2, 3, 5]))
console.log(howSum2(300, [7, 14]))
