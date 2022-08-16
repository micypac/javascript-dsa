/*
  FREQUENCY COUNTER PATTERN
  Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
  Your solution MUST have the following complexities: Time: O(N)

  Sample Input:

  sameFrequency(182,281) // true
  sameFrequency(34,14) // false
  sameFrequency(3589578, 5879385) // true
  sameFrequency(22,222) // false
*/

const sameFrequency = (num1, num2) => {
  const numString1 = num1.toString()
  const numString2 = num2.toString()

  if (numString1.length !== numString2.length) {
    return false
  }

  const obj1Frequency = {}

  for (const char of numString1) {
    obj1Frequency[char] = (obj1Frequency[char] || 0) + 1
  }

  for (const char of numString2) {
    if (!obj1Frequency[char]) {
      return false
    }
  }

  return true
}

console.log(sameFrequency(22, 222))
