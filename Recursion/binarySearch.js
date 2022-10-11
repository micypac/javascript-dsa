const binarySearch = (arr, targetNum, left = 0, right = arr.length - 1 ) => {
  if (left > right) return -1

  let mid = Math.floor((left + right) / 2)

  if (targetNum > arr[mid]) {
    return binarySearch(arr,targetNum, mid + 1, right)
  } else if (targetNum < arr[mid]) {
    return binarySearch(arr, targetNum, left, mid - 1)
  } else {
    return mid
  }
}

console.log(binarySearch([1, 3, 5, 7, 8, 15, 18, 20, 25, 30, 32], 20)) // 7
console.log(binarySearch([1, 3, 5, 7, 8, 15, 18, 20, 25, 30, 32], 5)) // 2
console.log(binarySearch([1, 3, 5, 7, 8, 15, 18, 20, 25, 30, 32], 12)) // -1