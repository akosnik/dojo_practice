class MaximumHeap {
  constructor() {
    this.values = [null];
  }

  insert(value) {
    this.values.push(value);
    let i = this.values.length - 1;

    while (this.values[i] > this.values[Math.floor(i / 2)] && i > 1) {
      this.swap( i, Math.floor(i/2) )
      i = Math.floor(i/2);
    }
    console.log(this.values);
    
    return this;
  }

  extractMax() {
    this.swap(1,this.values.length-1);
    let max = this.values.pop()
    let currentIdx = 1;
    let childIdx = '';
    while( this.values[currentIdx]<this.values[currentIdx*2] || this.values[currentIdx]<this.values[(currentIdx*2+1)] ){
        if( this.values[currentIdx*2] > this.values[currentIdx*2+1] ){
            childIdx = currentIdx*2;
        }
        else{
            childIdx = currentIdx*2+1;
        }
        this.swap( currentIdx, childIdx )
        currentIdx = childIdx;
    }
    console.log(this.values)
    console.log('max', max)
    return max;
  }

  swap(a, b) {
    [ this.values[a], this.values[b]] = [this.values[b], this.values[a] ]
  }
}

let heap1 = new MaximumHeap();
heap1.insert(7).insert(5).insert(3).insert(-1).insert(6).insert(10);
heap1.extractMax();
