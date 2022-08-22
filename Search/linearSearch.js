/*
  Write a function called linearSearch that accepts an array of number and a target number value.
  Return the index of the element from the array if the target number is found. Return -1 if not.
*/

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }

  return -1
}

console.log(linearSearch([1, 4, 6, 3, 8, 11, 15], 11))
