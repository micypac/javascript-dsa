/*
  Write a function called findBinary which accepts a number.
  The function should return the binary equivalent of the received number parameter. 
*/
const findBinary = (num, result = "") => {
  if (num === 0) return result

  result = num % 2 + result
  return findBinary(Math.floor(num / 2), result)
}

console.log(findBinary(15)) // 1111
console.log(findBinary(233)) // 11101001