/*
  PSEUDOCODE

  mergeSort pseudocode
  - break up the array into halves until you have arrays that are empty or have one element
  - one you have those sorted smaller arrays, merge those arrays with other arrays until you are back 
    at the full length array.
  - once the array has been merged back together, return the merged and sorted array.

  merge pseudocode
  - create an empty array, take a look at the smallest values in each input array
  - while there are still values we haven't looked at...
    - if the value from the first array is smaller than the value from the second array, push the value 
      from the first array to the result and move on the next value in the first array.
    - if the value from the first array is larger than the value from the second array, push the value 
      from the second array to the result and move on the next value in the second array.
    - once we exhaust one array, push in all remaining values from the other array.
*/

const merge = (arr1, arr2) => {
  const result = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  let midIdx = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, midIdx))
  let right = mergeSort(arr.slice(midIdx))
  return merge(left, right)
}

const data1 = [1, 4, 6, 7]
const data2 = [2, 5, 8, 11]
const data3 = [4, 1, 6, 3, 7, 5, 2, 8]

console.log(mergeSort(data3))
