/*
  PSEUDOCODE
  1. start by picking the second element of the array.
  2. compare the picked second element with the one before it and swap if necessary.
  3. continue to the next element and if its in incorrect order, iterate through the sorted portion(i.e. the left side of the picked value) 
     to place the element in its proper place.
  4. repeat until the array is sorted.
*/

// const insertionSort = (arr) => {
//   let j
//   for (let i = 1; i < arr.length; i++) {
//     let pickedVal = arr[i]

//     for (j = i - 1; j >= 0; j--) {
//       arr[j + 1] = arr[j]

//       if (pickedVal > arr[j]) {
//         break
//       }
//     }

//     arr[j + 1] = pickedVal
//   }

//   return arr
// }

const insertionSort = (arr) => {
  // pick each element to be inserted/placed in its proper index. We started with the second element since we will treat
  // the left portion of it as the sorted portion.
  for (let i = 1; i < arr.length; i++) {
    let pickedVal = arr[i]

    // This is the sorted portion!!! Iterate the "sorted portion" from the right to left by comparing the "picked value" to each one.
    for (let j = i - 1; j >= 0; j--) {
      let currentVal = arr[j]

      // compare the "picked value" from the outer loop to each value of the "sorted portion"
      // if "picked value" is < current value, we move the current value 1 space to the right
      if (currentVal > pickedVal) {
        arr[j + 1] = arr[j]
        // we reached the point where "picked value" is > current value
        // this can also be interpreted that this inner loop wasn't executed because "picked value" > than "sorted portion" on the left.
      } else if (currentVal < pickedVal) {
        arr[j + 1] = pickedVal
        break
      }
      // scenario where "picked value" is inserted to the leftmost end of the sorted portion
      if (j === 0) {
        arr[j] = pickedVal
      }
    }
  }

  return arr
}

//*** Codevolution implementation */
const insertionSort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = numberToInsert
  }

  return arr
}

const data1 = [8, 20, -2, 4, -6]
console.log(insertionSort([2, 1, 9, 76, 20]))
console.log(insertionSort2(data1))
