/*
  Write a recursive function called nestedEvenSum. 
  Return the sum of all even numbers in an object which may contain nested objects.

  nestedEvenSum(obj1) // 6
  nestedEvenSum(obj2) // 10
*/

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
}

const nestedEvenSum = (objInput) => {
  let result = 0

  const helperFunc = (helperInput) => {
    for (const item in helperInput) {
      let value = helperInput[item]

      if (typeof value !== 'object') {
        // check if object property value is not an object
        if (!isNaN(value)) {
          // check if object prop value is a number
          result += value % 2 === 0 ? value : 0
        }
      } else {
        // if value is object, recurse using helperFunc
        helperFunc(value)
      }
    }
  }

  helperFunc(objInput)

  return result
}

console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10
