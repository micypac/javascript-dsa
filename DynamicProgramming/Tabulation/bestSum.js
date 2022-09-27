/*****************************************************
 * DP Tabulation version
 * Time O((m^2) * n); Space O(m^2)
 *****************************************************/

const bestSum = (targetSum, nums) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        const combination = [...table[i], num]

        // check if further position is null/undefined/falsy or value length is longer than current combination.
        if (!table[i + num] || combination.length < table[i + num].length) {
          table[i + num] = combination
        }
      }
    }
  }

  return table[targetSum]
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3,5]
console.log(bestSum(8, [1, 4, 5])) // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25,25,25,25]
