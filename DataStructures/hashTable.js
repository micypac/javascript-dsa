/*
  Hash Tables
  - hash tables are collections of key-value pairs
  - it can find values quickly given a key
  - it can add new key-values quickly
  - hash tables store data in a large array, and work by hashing the keys
  - a good hash should be fast, distribute keys uniformly, and be deterministic
  - seperate chaining and linear probing are two strategies used to deal with 2 or more keys that hash the same index
    - with seperate chaining, at each index in our array we store values using a more sophisticated data structure (can be nested array or linked list)
    - with linear probing, we search through the array to find the next empty slot. This allows us to store a single key-value at each index.
*/
class HashTable {
  constructor(size = 53) {
    this.keymap = new Array(size)
  }

  /*
    the prime number in the hash is helpful in spreading out the keys more uniformly
    its also helpful if the array that you're putting values into has a prime length
    (see Google!)
  */
  _hash(key) {
    let total = 0
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) & this.keymap.length
    }

    return total
  }

  set(key, value) {
    let index = this._hash(key)

    // if current index in keymap is empty, create an empty array
    if (!this.keymap[index]) {
      this.keymap[index] = []
    }
    // push the new key/value with seperate chaining
    this.keymap[index].push([key, value])
  }

  get(key) {
    let index = this._hash(key)
    if (this.keymap[index]) {
      for (let i = 0; i < this.keymap[index].length; i++) {
        if (this.keymap[index][i][0] === key) {
          return this.keymap[index][i][1]
        }
      }
    }

    return undefined
  }

  values() {
    let valuesArr = []

    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        for (let j = 0; j < this.keymap[i].length; j++) {
          if (!valuesArr.includes(this.keymap[i][j][1])) {
            valuesArr.push(this.keymap[i][j][1])
          }
        }
      }
    }

    return valuesArr
  }

  keys() {
    let keysArr = []

    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        for (let j = 0; j < this.keymap[i].length; j++) {
          keysArr.push(this.keymap[i][j][0])
        }
      }
    }

    return keysArr
  }
}

const ht = new HashTable(17)
ht.set('maroon', '#800000')
ht.set('yellow', '#FFFF00')
ht.set('olive', '#808000')
ht.set('salmon', '#FA8072')
ht.set('lightcoral', '#F08080')
ht.set('mediumvioletred', '#C71585')
ht.set('plum', '#DDA0DD')
ht.set('mauve', '#DDA0DD')

console.log(ht)
console.log(ht.get('yellow'))
console.log(ht.get('maroon'))
console.log(ht.keys())
console.log(ht.values())
