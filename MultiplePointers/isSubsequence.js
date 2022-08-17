/*
  MULTIPLE POINTERS PATTERN
  Write a function called isSubsequence which takes in two strings and checks 
  whether the characters in the first string form a subsequence of the characters in 
  the second string. In other words, the function should check whether the characters 
  in the first string appear somewhere in the second string, without their order changing.

  isSubsequence('hello', 'hello world'); // true
  isSubsequence('sing', 'sting'); // true
  isSubsequence('abc', 'abracadabra'); // true
  isSubsequence('abc', 'acb'); // false (order matters)

  Restrictions:
  Time - O(n + m)
  Space - O(n)
*/

//*** First solution
// const isSubsequence = (str1, str2) => {
//   let ptr1 = 0
//   let ptr2 = 0
//   let result = 0

//   while (ptr1 < str1.length && ptr2 < str2.length) {
//     if (str1[ptr1] === str2[ptr2]) {
//       ptr1++
//       ptr2++
//       result++
//     } else {
//       ptr2++
//     }
//   }

//   if (str1.length === result) {
//     return true
//   } else {
//     return false
//   }
// }

//* Refactored solution
const isSubsequence = (str1, str2) => {
  let ptr1 = 0
  let ptr2 = 0

  if (!str1) return true
  while (ptr2 < str2.length) {
    if (str2[ptr2] === str1[ptr1]) ptr1++
    if (ptr1 === str1.length) return true
    ptr2++
  }

  return false
}

console.log(isSubsequence('', 'abc'))
