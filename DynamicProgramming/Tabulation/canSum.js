/*****************************************************
 * DP Tabulation version
 * Time O(mn); Space O(m)
 *****************************************************/

const canSum = (targetSum, nums) => {
  const table = Array(targetSum + 1).fill(false)

  table[0] = true

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of nums) {
        table[i + num] = true
      }
    }
  }

  return table[targetSum]
}

console.log(canSum(7, [2, 3])) // T
console.log(canSum(7, [5, 3, 4, 7])) // T
console.log(canSum(7, [2, 4])) // F
console.log(canSum(8, [2, 3, 5])) // T
console.log(canSum(300, [7, 14])) // F
