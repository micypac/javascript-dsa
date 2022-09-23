/*
  Write a function canSum that takes in target number and an array of numbers as arguments.

  The function should return a boolean indicating whether or not it is possible to generate the target using the numbers from the array.
  You may use an element of the array as many times as needed.
  You may assume that all input numbers are nonnegative.

  canSum(7, [5,3,4,7]) => true
*/

/*****************************************************
 * Recursive
 * m = target sum
 * n = arr number of elements
 * Time O(n^m); Space O(m)
 *****************************************************/

const canSum = (targetSum, arr) => {
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let num of arr) {
    const remainder = targetSum - num
    if (canSum(remainder, arr) === true) return true
  }

  return false
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(7, [2, 4]))
console.log(canSum(7, [2, 3, 5]))
// console.log(canSum(300, [7, 14])) // takes too long!

/*****************************************************
 * Memoized version
 * Time O(m*n); Space O(m)
 *****************************************************/

const canSum2 = (targetSum, arr, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let num of arr) {
    const remainder = targetSum - num
    if (canSum2(remainder, arr, memo) === true) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false
  return false
}

console.log(canSum2(7, [2, 3]))
console.log(canSum2(7, [5, 3, 4, 7]))
console.log(canSum2(7, [2, 4]))
console.log(canSum2(7, [2, 3, 5]))
console.log(canSum2(300, [7, 14]))
