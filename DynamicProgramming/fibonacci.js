/*****************************************************
 * Recursive
 * O(2^n) Space complexity O(n)
 *****************************************************/
const fibonacci = (n) => {
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(7))
console.log(fibonacci(2))
// console.log(fibonacci(50)) // don't run this, it will take a long time!!!

/*****************************************************
 * Memoized version
 * Time O(n); Space O(n)
 *****************************************************/
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log(fib(50))
