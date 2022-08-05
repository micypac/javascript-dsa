/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair of intergers where the sum is zero.
Return an array that includes both values that sum to zero or undefined if the pair does not exist.

sumZero([-3,-2,-1,0,1,2,3]) -> [-3,3]
sumZero([-2,0,1,3]) -> undefined
*/

const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 5, 6, 8]))
