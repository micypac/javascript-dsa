/*  
  FREQUENCY COUNTER PATTERN
  This pattern uses objects or sets to collect values/frequencies of values.
  This can often avoid the need for nested loops or O(n^2) operations with arrays or strings.
*/

/*  Write a function called same, which accepts two arrays. The function should return true if every value in the array
    has its corresponding squared value in the second array. The frequency of values must be the same. Order mix up is ok.
*/

//***  Naive solution using O(n^2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2)

//     if (correctIndex === -1) {
//       return false
//     }
//     arr2.splice(correctIndex, 1)
//   }
//   return true
// }

//***  Efficient solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  const frequencyCounter1 = {}
  const frequencyCounter2 = {}

  for (const item of arr1) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1 // check if key exist, if not initialized to 0. // if key exist, increment value by 1.
  }

  for (const item of arr2) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1
  }

  console.log(frequencyCounter1)
  console.log(frequencyCounter2)

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      // check if key in obj1 exist as key**2 in obj2.
      return false
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      // check if frequency values are the same for both objects.
      return false
    }
  }

  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
