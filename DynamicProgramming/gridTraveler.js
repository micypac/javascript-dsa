/*
  Grid Traveler

  Say that you are a traveler on a 2D grid. You begin in the top left corner and your goal is to travel to the bottom right corner.
  You may only move down or right. 
  In how many ways can you travel to the goal on a grid with dimensions m * n?

  Write a function that calculates this.

  gridTraveler(2,3) -> 3 ways
*/

/*****************************************************
 * Recursive
 * Time O(2^n+m); Space O(n+m)
 *****************************************************/

const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6

/*****************************************************
 * Memoized version
 * Time O(m*n); Space O(n+m)
 *****************************************************/

const gridTravelerM = (m, n, memo = {}) => {
  const key = m + ',' + n

  if (key in memo) return memo[key]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  memo[key] = gridTravelerM(m - 1, n, memo) + gridTravelerM(m, n - 1, memo)

  return memo[key]
}

console.log(gridTravelerM(1, 1)) // 1
console.log(gridTravelerM(2, 3)) // 3
console.log(gridTravelerM(3, 2)) // 3
console.log(gridTravelerM(3, 3)) // 6
console.log(gridTravelerM(18, 18)) // 2333606220
