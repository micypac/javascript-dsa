/*
  Write a function called maxSubarraySum which accepts an array of integers and a number called n.
  The function should calculate the maximum sum of n consecutive elements in the array.

  maxSubarraySum([1,2,5,2,8,1,5], 2) -> 10
  maxSubarraySum([1,2,5,2,8,1,5], 4) -> 17
  maxSubarraySum([4,2,1,6], 1) -> 6
  maxSubarraySum([4,2,1,6,2], 4) -> 13
  maxSubarraySum([], 4) -> null
*/

//*** Naive solution

const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null

  let max = -Infinity // set max to lowest possible value

  for (let i = 0; i < arr.length - num + 1; i++) {
    // condition is set to stop at the element where it should still fulfill the number of elements to be added til the end of the array
    let temp = 0

    for (let j = 0; j < num; j++) {
      // j cant start with the value of i since we always have to iterate with the value of the num parameter.
      // if i index is already bigger than num value, it will not enter this loop.
      // so we formulate the index by adding the current index of i and adding the value of j for each iteration.
      temp += arr[i + j]
    }

    if (temp > max) {
      max = temp
    }
    console.log(temp, max)
  }

  return max
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
