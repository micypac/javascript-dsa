/*
  Write a function called fibonacci that accepts an integer parameter and returns an array.
  Given this number, find the first 'n' elements of the Fibonacci sequence.
*/

const fibonacci = (n) => {
  const fib = [0, 1]

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib
}

console.log(fibonacci(11))
