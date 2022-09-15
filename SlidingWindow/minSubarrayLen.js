/*
  SLIDING WINDOW PATTERN
  Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
  This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal 
  to the integer passed to the function. If there isn't one, return 0 instead.

  minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
  minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
  minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
  minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
  minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
  minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

  Restrictions:
  Time - O(n)
  Space - O(1)
*/

//*** naive solution. Also space is O(n) */
const minSubarrayLen = (arr, num) => {
  const totSum = arr.reduce((tot, val) => (tot += val), 0)
  if (num > totSum) return 0

  let min = arr.length
  let tempMin = min

  let sum = 0
  const tempArr = []

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    tempArr.push(arr[i])

    while (sum >= num) {
      tempMin = tempArr.length
      min = Math.min(min, tempMin)
      sum -= tempArr.shift()
    }
  }

  return min
}

//*** Grokking solution */
const minSubarrayLen2 = (arr, num) => {
  let min = Infinity
  let sum = 0
  let windowStart = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]

    while (sum >= num) {
      min = Math.min(min, i - windowStart + 1)
      sum -= arr[windowStart]
      windowStart++
    }
  }

  if (min === Infinity) return 0
  return min
}

console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))
console.log(minSubarrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))
