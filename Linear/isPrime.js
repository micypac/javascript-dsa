const isPrime = (n) => {
  if (n < 2) {
    return false
  }

  /*** Optimized primality test
    Integers larger than the square root do not need to be checked because, whenever n=a*b,
    one of the two factors a and b is less than or equal to the square root of n
  */
  // for (let i = 2; i < n; i++) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(1))
console.log(isPrime(6))
console.log(isPrime(11))
