class HashTable {
  constructor(size = 53) {
    this.keymap = new Array(size)
  }

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
}
