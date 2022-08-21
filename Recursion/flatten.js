/*
  Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

  flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  flatten([[1],[2],[3]]) // [1,2,3]
  flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
*/

// const flattern = (arr) => {
//   const result = []

//   const helperFunc = (helperInput) => {
//     if (helperInput.length === 0) {
//       return
//     }

//     if (Array.isArray(helperInput[0])) {
//       helperFunc(helperInput[0])
//     } else {
//       result.push(helperInput[0])
//     }
//     helperFunc(helperInput.slice(1))
//   }

//   helperFunc(arr)
//   return result
// }

//*** Course solution
const flatten = (oldArr) => {
  let newArr = []
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
