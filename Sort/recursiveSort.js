const recursiveSort = arr => {
  // base case means an array with length of 0 or 1 is already sorted.
  if (arr.length <= 1) return arr

  // get and remove the max value in the array.
  let maxIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIdx]) maxIdx = i;
  }

  const maxVal = arr[maxIdx];
  arr.splice(maxIdx, 1);

  // recursively call the remaining elements until it reach base case.
  arr = recursiveSort(arr)

  // put the max value at the end.
  arr.push(maxVal)

  return arr
}

let data1 = [5,3,4,6,1,8,2,7];

console.log(recursiveSort(data1))