/*
  Radix Sort
*/

//*** helper function */
// const getDigit = (num, place) => {
//   let i = 0
//   let result = 0
//   let divisor = 10

//   while (i <= place) {
//     // Math.abs is used so even if negative number is passed, it will still get the digit as positive

//     result = (Math.abs(num) % divisor) / (divisor / 10)
//     divisor *= 10
//     i++
//   }

//   return Math.floor(result)
// }

//*** helper function course solutions */
const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

const digitCount = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = (arr) => {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]))
  }
  return max
}

console.log(getDigit(12345, 2))
console.log(digitCount(12345))
console.log(mostDigits([1, 11, 234, 4567, 345, 456789, 3, 987654332]))
