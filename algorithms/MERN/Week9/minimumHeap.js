class MaximumHeap {
  constructor() {
    this.values = [null];
  }

  insert(value) {
    this.values.push(value);
    let i = this.values.length - 1;

    while (this.values[i] > this.values[Math.floor(i / 2)] && i > 1) {
      [this.values[i], this.values[Math.floor(i / 2)]] = [this.values[Math.floor(i / 2)], this.values[i]];
      i = Math.floor(i/2);
    }
    console.log(this.values);
    
    return this;
  }

}

let heap1 = new MaximumHeap();
heap1.insert(7).insert(5).insert(3).insert(-1).insert(6);
