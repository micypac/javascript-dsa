// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = (str) => {
  const map = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  // determine if argument is binary or hex based on prefix
  let base = 2;
  if (str.startsWith("0x")) base = 16;

  // remove prefix and extract only the significant digits
  // reverse the string was done so during the iteration, the i variable will correspond as the
  // exponent to be used from least significant digit to most significant.
  let newStr = str.split("").reverse().join("");
  if (str[1] === "b" || str[1] === "x") {
    newStr = str.slice(2).split("").reverse().join("");
  }

  console.log(newStr);

  let sum = 0;
  for (let i = 0; i < newStr.length; i++) {
    let el = newStr[i];
    // convert el to number if its letter using hashmap
    let numEl = isNaN(Number(el)) ? map[el] : Number(el);
    // call helper function to compute initial element value
    let itemSum = computeElementSum(base, i, numEl);
    sum += itemSum;
  }
  return sum;
};

const computeElementSum = (base, exp, el) => {
  return base ** exp * el;
};

module.exports = {
  convertToBase10,
};
/******************************************************************************/

// console.log(convertToBase10("0b1100")); // 12
// console.log(convertToBase10("0b0101")); // 5
// console.log(convertToBase10("0b1000")); // 8
// console.log(convertToBase10("0b0111")); // 7

// console.log("––––––");

// console.log(convertToBase10("0b10100101")); // 165
// console.log(convertToBase10("0b11111111")); // 255
// console.log(convertToBase10("0b01010101")); // 85
// console.log(convertToBase10("0b00110011")); // 51

// console.log("––––––");

// console.log(convertToBase10("0xf")); // 15
// console.log(convertToBase10("0xfa")); // 250
// console.log(convertToBase10("0x1234")); // 4660
// console.log(convertToBase10("0xc9a1")); // 51617
// console.log(convertToBase10("0xbf12")); // 48914
console.log(convertToBase10("0x559aead0")); // 48914
