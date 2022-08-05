/*
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity should be - O(n)
*/

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

  const letterCounter1 = {}

  for (const letter of str1) {
    letterCounter1[letter] = (letterCounter1[letter] || 0) + 1
  }

  // letterCounter value will not go lower than 0.
  // if the value is already 0, it will become truthy because of negation and will return false.
  for (const letter of str2) {
    if (!letterCounter1[letter]) {
      return false
    } else {
      letterCounter1[letter] -= 1
    }
  }

  return true
}

console.log(validAnagram('anagram', 'namarag'))
