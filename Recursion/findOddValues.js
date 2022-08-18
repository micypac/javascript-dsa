//*** Recursion with helper functions.
// const findOddValues = (arr) => {
//   const result = []

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return
//     }

//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0])
//     }

//     helper(helperInput.slice(1))
//   }

//   helper(arr)
//   return result
// }

//*** Pure recursion
const findOddValues = (arr) => {
  let newArr = []

  if (arr.length === 0) return newArr

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(findOddValues(arr.slice(1)))

  return newArr
}

console.log(findOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))
