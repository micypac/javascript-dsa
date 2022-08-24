/*
  PSEUDOCODE
  1. store the first element's index as the smallest value we've seen so far.
  2. compare this item to the next item/s in the array until you find a smaller number.
  3. if a smaller number is found, designate the element's index as the new smallest number.
  4. if the "smallest number" (index) is not the value you initially began with, swap the 2 values.
*/

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // see note# 1
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
      // compare each element to pick the lowest value
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    // swap smallest element to where each index started per iteration.
    if (i !== min) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }

  return arr
}

console.log(selectionSort([4, 7, 2, 5, 1, 3, 8, 6]))
