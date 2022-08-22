const stringSearch = (longStr, shortStr) => {
  let counter = 0

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) {
        break
      }
      if (j === shortStr.length - 1) {
        counter++
      }
    }
  }

  return counter
}

console.log(stringSearch('hiheyhelloolahey', 'hey'))
