/*****************************************************
 * DP Tabulation version
 * Time O(mn); Space O(mn)
 *****************************************************/

const gridTraveler = (m, n) => {
  // create table and initialize postion values.
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0))

  table[1][1] = 1

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      let current = table[i][j]
      if (j + 1 <= n) table[i][j + 1] += current // add current ro right neighbor
      if (i + 1 <= m) table[i + 1][j] += current // add current to down neighbor
    }
  }

  return table[m][n]
}

console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220
