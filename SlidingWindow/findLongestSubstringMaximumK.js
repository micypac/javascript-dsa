/*
  Given a string, find the length of the longest substring in it with no more than K distinct characters.

  Input: String="araaci", K=2
  Output: 4
  Explanation: The longest substring with no more than '2' distinct characters is "araa".

  Input: String="araaci", K=1
  Output: 2
  Explanation: The longest substring with no more than '1' distinct characters is "aa".

  Input: String="cbbebi", K=3
  Output: 5
  Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

  Input: String="cbbebi", K=10
  Output: 6
  Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

*/

//*** Grokking solution. Time = O(n), Space = O(K) */
const findLongestSubstringMaximumK = (str, k) => {
  if (!str.length) return 0

  const charFreq = {}
  let max = 0
  let windowStart = 0

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i]
    charFreq[rightChar] = (charFreq[rightChar] || 0) + 1

    while (Object.keys(charFreq).length > k) {
      let leftChar = str[windowStart]
      charFreq[leftChar]--

      if (charFreq[leftChar] === 0) delete charFreq[leftChar]

      windowStart++
    }

    max = Math.max(max, i - windowStart + 1)
  }

  return max
}

console.log(findLongestSubstringMaximumK('araaci', 2))
console.log(findLongestSubstringMaximumK('araaci', 1))
console.log(findLongestSubstringMaximumK('cbbebi', 3))
console.log(findLongestSubstringMaximumK('cbbebi', 10))
