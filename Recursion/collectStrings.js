/*
  Write a function called collectStrings which accepts an object and 
  returns an array of all the values in the object that have a typeof string.

*/

const collectStrings = (objInput) => {
  let result = []

  for (const key in objInput) {
    let value = objInput[key]

    if (value.constructor.name === 'Object') {
      result = result.concat(collectStrings(value))
    } else {
      if (typeof value === 'string') {
        result.push(value)
      }
    }
  }

  return result
}

const input = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
}

console.log(collectStrings(input))
