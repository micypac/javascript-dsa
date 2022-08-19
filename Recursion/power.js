/*
  Write a function called power which accepts a base and an exponent. 
  The function should return the power of the base to the exponent. 
  This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

const power = (base, num) => {
  if (num === 1) return base
  return base * power(base, num - 1)
}

console.log(power(2, 4))
