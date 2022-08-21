/*
  Write a recursive function called capitalizeWords. 
  Given an array of words, return a new array containing each word capitalized.

  let words = ['i', 'am', 'learning', 'recursion'];
  capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

const capitalizeWords = (arr) => {
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }

  newArr.push(arr[0].toUpperCase())
  newArr = newArr.concat(capitalizeWords(arr.slice(1)))

  return newArr
}

const words = ['i', 'am', 'learning', 'recursion']

console.log(capitalizeWords(words))
