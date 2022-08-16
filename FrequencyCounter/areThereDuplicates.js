/*
  FREQUENCY COUNTER PATTERN
  Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
  and checks whether there are any duplicates among the arguments passed in.  
  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

  Examples:
  areThereDuplicates(1, 2, 3) // false
  areThereDuplicates(1, 2, 2) // true 
  areThereDuplicates('a', 'b', 'c', 'a') // true 
  
  Restrictions:
  Time - O(n)
  Space - O(n)
*/

// const areThereDuplicates = (...args) => {
//   const argsFrequency = {}

//   for (const item of args) {
//     argsFrequency[item] = (argsFrequency[item] || 0) + 1
//   }

//   for (const item of Object.values(argsFrequency)) {
//     if (item > 1) return true
//   }

//   return false
// }

//*** One-liner solution
const areThereDuplicates = (...args) => {
  // create Set using the args array and compare length with original array.
  return new Set(args).size !== args.length
}

console.log(areThereDuplicates('a', 'b', 'c', 'e'))
