/*
  Climbing Staircase
  Given a staircase of 'n' steps, count the number of distinct ways to climb to the top.
  You can either climb 1 step or 2 steps at a time.

  e.g.:
  n=1 // 1                | (1)
  n=2 // 2                | (1,1) (2)
  n=3 // 3                | (1,1,1) (1,2) (2,1)
  n=4 // 5                | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) (2,2)

  Climbing Staircase Idea:
  - at any given time, you can climb either 1 step or 2 steps at a time
  - if you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2'
  - calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two
  - similar to Fibonacci series, we can conclude that climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)
*/

const climbingStaircase = (n) => {
  // this is the constraint we have, 1 or 2 steps at a time
  const numOfWays = [1, 2]

  // populate array with rest of elements given the formula
  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2]
  }

  // we used 'n-1' as index since our array is zero-based(i.e. n=1 should return value in index 0)
  return numOfWays[n - 1]
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))
