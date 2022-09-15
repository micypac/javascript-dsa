/*
  Write a function called findAverageOfSubarrays which accepts an array of integers and a number called K.
  The function should find the average of each subarray of ‘K’ contiguous elements in it.

  Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K: 5

  For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6-1)/5 => 2.2 
  The average of next 5 numbers (subarray from index 1-5) is: (3+2+6-1+4)/5 => 2.8

  Output: [2.2, 2.8, 2.4, 3.6, 2.8]
*/

//*** brute-force solution with time complexity O(n*K) */
const findAverageOfSubarrays = (arr, K) => {
  const result = []
  let sum

  for (let i = 0; i < arr.length - K + 1; i++) {
    sum = 0
    for (let j = i; j < i + K; j++) {
      sum += arr[j]
    }
    result.push(sum / K)
  }

  return result
}

//*** improve solution with time complexity of O(n) */
const findAverageOfSubarrays2 = (arr, K) => {
  const result = []
  let sum = 0

  for (let i = 0; i < K; i++) {
    sum += arr[i]
  }
  result.push(sum / K)

  for (let i = K; i < arr.length; i++) {
    sum = arr[i] + sum - arr[i - K]
    result.push(sum / K)
  }
  return result
}

//*** Grokking solution */
const findAverageOfSubarrays3 = (arr, K) => {
  const result = []
  let sum = 0
  let windowStart = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]

    if (i >= K - 1) {
      result.push(sum / K)
      sum -= arr[windowStart]
      windowStart++
    }
  }

  return result
}

console.log(findAverageOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
console.log(findAverageOfSubarrays2([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
console.log(findAverageOfSubarrays3([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
