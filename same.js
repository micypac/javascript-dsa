/*  Frequency Counter Pattern
    This pattern uses objects or sets to collect values/frequencies of values.
    This can often avoid the need for nested loops or O(n^2) operations with arrays or strings.
 */

/*  Write a function called same, which accepts two arrays. The function should return true if every value in the array
    has its corresponding squared value in the second array. The frequency of values must be the same. Order mix up is ok.
*/

// Naive solution using O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)

    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
