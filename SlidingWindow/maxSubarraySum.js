/*
  SLIDING WINDOW PATTERN
  Write a function called maxSubarraySum which accepts an array of integers and a number called n.
  The function should calculate the maximum sum of n consecutive elements in the array.

  maxSubarraySum([1,2,5,2,8,1,5], 2) -> 10
  maxSubarraySum([1,2,5,2,8,1,5], 4) -> 17
  maxSubarraySum([4,2,1,6], 1) -> 6
  maxSubarraySum([4,2,1,6,2], 4) -> 13
  maxSubarraySum([], 4) -> null
*/

//*** Naive solution O(n^2)
// const maxSubarraySum = (arr, num) => {
//   if (num > arr.length) return null

//   let max = -Infinity // set max to lowest possible value

//   // iteration condition is set to stop at the index where it should still fulfill the number of elements to be added til the end of the array
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0

//     for (let j = 0; j < num; j++) {
//       // j cant start with the value of i since we always have to iterate with the value of the num parameter.
//       // if i index is already bigger than num value, it will not enter this loop.
//       // so we formulate the array index by adding the current index of i and of j for each iteration.
//       temp += arr[i + j]
//     }

//     if (temp > max) {
//       // compare temp with max and if higher, move temp value to max.
//       max = temp
//     }
//     console.log(temp, max)
//   }

//   return max
// }

//*** Efficient/refactored solution O(n)
const maxSubarraySum = (arr, num) => {
  let max = 0
  let temp = 0

  if (num > arr.length) return null

  // to get initial max value, first loop should only iterate through the first consecutive numbers(num) only.
  for (let i = 0; i < num; i++) {
    max += arr[i]
  }

  temp = max

  // for second loop, start at next index where the first loop ended.
  // as for temp, we subtract the first item of the consecutive numbers and add the last item.
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i]
    max = Math.max(max, temp) // compare temp vs max and determince max
  }

  return max
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

//*** Exer#8 solution.
// const maxSubarraySum = (arr, num) => {
//   if (num > arr.length) return null
//   let max = 0
//   for (let i = 0; i < num; i++) {
//     max += arr[i]
//   }

//   let temp = max
//   for (let i = num; i < arr.length; i++) {
//     temp = temp - arr[i - num] + arr[i]
//     max = Math.max(temp, max)
//   }

//   return max
// }
