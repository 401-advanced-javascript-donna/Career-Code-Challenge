class Set {
  constructor(array) {
    this.array = array;
  }

  add(value) {
    if(!this.array.includes(value)) this.array.push(value);
  }

  remove(value) {
    if(this.array.includes(value)) {
      const idx = this.array.indexOf(value);
      this.array.splice(idx, 1);
    }
  }

  has(value) {
    return this.array.includes(value);
  }
}

module.exports = {
  Set
};