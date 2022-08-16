/*
  MULTIPLE POINTERS PATTERN
  Write a function called countUniqueValues which accepts a sorted array,
  and counts the unique values in the array.
  There can be negative values in the array, but it will always be sorted.

  countUniqueValues([1,1,1,1,2]) -> 2
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) -> 7
  countUniqueValues([]) -> 0
  countUniqueValues([-2, -1, -1, 0, 1]) -> 4

  Time Complexity - O(n)
*/

// const countUniqueValues = (arr) => {
//   if (!arr.length) return 0
//   let i = 0
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++
//       arr[i] = arr[j]
//     }
//   }
//   return i + 1
// }

//*** Solution using array.reduce
const countUniqueValues = (arr) => {
  if (!arr.length) return 0

  let prevItem = arr[0]

  return (
    arr.reduce((tot, item) => {
      if (item !== prevItem) {
        tot++
      }
      prevItem = item
      return tot
    }, 0) + 1
  )
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]))
