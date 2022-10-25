// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
const { convertToBase10 } = require("./1-convertToBase10");

const convertToBase16 = (element) => {
  const map = {
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };

  let num;
  if (typeof element === "number") num = element;
  else num = convertToBase10(element);

  let result = "";
  while (num !== 0) {
    let rem = map[num % 16] || num % 16;
    result = rem + result;
    num = Math.floor(num / 16);
  }

  return "0x" + result;
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log("––––––");

console.log(convertToBase16("0b1100")); // 0xc
console.log(convertToBase16("0b0101")); // 0x5
console.log(convertToBase16("0b1000")); // 0x8
console.log(convertToBase16("0b0111")); // 0x7

console.log("––––––");

console.log(convertToBase16("0b10100101")); // 0xa5
console.log(convertToBase16("0b11111111")); // 0xff
console.log(convertToBase16("0b01010101")); // 0x55
console.log(convertToBase16("0b00110011")); // 0x33
