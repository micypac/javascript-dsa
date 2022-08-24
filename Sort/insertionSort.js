const insertionSort = (arr) => {
  let j
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]

    for (j = i - 1; j >= 0; j--) {
      arr[j + 1] = arr[j]

      if (arr[j] < currentVal) {
        break
      }
    }

    arr[j + 1] = currentVal
  }

  return arr
}

console.log(insertionSort([5, 3, 6, 2, 4, 1, 8, 7]))
