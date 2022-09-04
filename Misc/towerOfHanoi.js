/*
  Tower of Hanoi
  The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
  - only one disk may be moved at a time
  - each move consists of taking the upper disk from one of the stacks and placing it on top of another stack
    or an empty rod
  - no disk may be placed on top of a disk that is smaller
  
  Tower of Hanoi idea/pseudocode:
  - shift 'n-1' disks from A to B, using C(when required)
  - shift last disk from A to C -> this is the base case
  - shift 'n-1' disks from B to C, using A(when required)
*/

const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod)
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
  towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

console.log(towerOfHanoi(3, 'A', 'C', 'B'))
