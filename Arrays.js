class ArrElem {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    if (this.length === 0) return undefined;
    const lastitem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastitem;
  }
  shift() {
    const firstitem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length--];
    this.length--;
    return firstitem;
  }
  delete(index) {
    const deleteIndex = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deleteIndex;
  }
}
const newArr = new ArrElem();
newArr.push("apple");
newArr.push("pineapple");
newArr.push("bananna");
newArr.push("watermilon");
// newArr.get((0))
// newArr.pop();
// newArr.delete()

newArr.shift();
console.log(newArr);
