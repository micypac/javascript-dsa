const bubbleSort = (arr) => {
  // if array is almost sorted, this additional optimization will remove redundancy of looping.
  let noSwaps // variable to track if no swap happened to short-circuit and cut-off unnecessary iteration.

  // outer loop will start at the right end because each inner loop completion will push the largest value at this end.
  // next iteration, rightmost index shouldn't be compared for swapping.
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }

    if (noSwaps) break
  }

  return arr
}

// let data = Array.apply(null, { length: 10 }).map(Function.call, Math.random)
let data = Array.apply(null, { length: 10 }).map((item) => Math.random())

// console.log(bubbleSort([5, 3, 6, 4, 7, 2, 1, 8]))
console.log(bubbleSort(data))
