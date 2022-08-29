/*
  Radix Sort

  PSEUDOCODE
  - define a function that accepts a list of numbers
  - figure out how many digits the largest number has
  - loop from k=0 up to this largest number of digits
  - for each iteration of the loop
    - create buckets for each digit(0-9)
    - place each number on its corresponding bucket based on its kth digit
  - replace our existing array with values in our buckets, starting with 0 until 9
  - return list at end
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

const mostDigits = (nums) => {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]))
  }
  return max
}

const radixSort = (numsArr) => {
  // get the largest number of digits from input
  let count = mostDigits(numsArr)

  // loop count times
  for (let k = 0; k < count; k++) {
    // create an array of empty arrays for digits 0-9
    let digitBuckets = Array.from({ length: 10 }, () => [])

    for (let i = 0; i < numsArr.length; i++) {
      // get digit from kth place using helper function getDigit
      let digit = getDigit(numsArr[i], k)
      // push the array element into its corresponding digit bucket
      digitBuckets[digit].push(numsArr[i])
    }

    // concat the multiple array elements of digitBuckets into 1 single array
    numsArr = [].concat(...digitBuckets)
  }

  return numsArr
}

console.log(getDigit(12345, 2))
console.log(digitCount(12345))
console.log(radixSort([1, 987654332, 11, 456789, 234, 4567, 345, 3]))
