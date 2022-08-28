/*
  DIVIDE AND CONQUER PATTERN
  Write a function called binarySearch which accepts an array of integers and a number called val.
  The function should find the number argument if exist in the array and return its index or -1 otherwise.

  Time Complexity - O(Log n)
*/

// const binarySearch = (arr, val) => {
//   let minIndex = 0
//   let maxIndex = arr.length - 1

//   while (minIndex <= maxIndex) {
//     let middleIndex = Math.floor((minIndex + maxIndex) / 2)

//     if (arr[middleIndex] < val) {
//       minIndex = middleIndex + 1
//     } else if (arr[middleIndex] > val) {
//       maxIndex = middleIndex - 1
//     } else {
//       return middleIndex
//     }
//   }

//   return -1
// }

//*** Recursive version */
const binarySearch = (arr, val) => {
  const search = (arr, val, left, right) => {
    if (left > right) {
      return -1
    }

    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === val) {
      return mid
    }

    if (val < arr[mid]) {
      return search(arr, val, left, mid - 1)
    } else {
      return search(arr, val, mid + 1, right)
    }
  }

  return search(arr, val, 0, arr.length - 1)
}

console.log(binarySearch([1, 3, 5, 7, 8, 15, 18, 20, 25, 30, 32], 20))
