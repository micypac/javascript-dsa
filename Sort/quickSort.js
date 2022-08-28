/*
  Quick Sort

  - in order to implement quick sort, its useful to first implement a function responsible arranging elements 
    in an array on either side of a pivot
  - given an array, this helper function should designate an element as the pivot
  - it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot,
    and all values greater than the pivot are moved to the right
  - the order of elements on either side of the pivot doesn't matter
  - the helper function should do this in place, that is, it should not create a new array
  - when complete, the helper should return the index of the pivot

  Pivot pseudocode
  - it will help to accept 3 arguments: array, start index, and end index(these can default to 0 and array.length - 1 respectively)
  - grab the pivot from the start of the array
  - store the current pivot index ina variable (this will keep track of where the pivot index should end up)
  - loop through the array from the start to end
    - if the pivot is greater than the current element, increment the pivot index variable and then swap the current element
      with the element at the pivot index
  - swap the starting element("the pivot") with the pivot index
*/

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    // [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  // we are assuming the pivot is always the first element
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  // swap the pivot from the start to the swap point
  swap(arr, start, swapIdx)
  // console.log(arr)
  return swapIdx
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
  }

  return arr
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
