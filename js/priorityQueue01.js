class HeapLibrary {
  static buildMaxHeap(arr) {
    let mid = HeapLibrary.parent(arr.length);
    for(let i = mid; i >= 0; i--) {
      HeapLibrary.maxHeapify(arr, arr.length - 1, i);
    }
  }

  static maxHeapify(arr, heapEnd, i) {
    let l = HeapLibrary.left(i);
    let r = HeapLibrary.right(i);

    let biggest = i;

    if(l <= heapEnd && arr[l] > arr[biggest]) biggest = l;
    if(r <= heapEnd && arr[r] > arr[biggest]) biggest = r;

    if(biggest !== i) {
      let temp = arr[i];
      arr[i] = arr[biggest];
      arr[biggest] = temp;
      return HeapLibrary.maxHeapify(arr, heapEnd, biggest);
    }
  }

  static left(i) {
    return 2 * i + 1;
  }

  static right(i) {
    return 2 * i + 2;
  }

  static parent(i) {
    return Math.floor((i - 1) / 2);
  }
}

class PriorityQueue {
  constructor(arr) {
    this.maxHeap = [...arr];
    // this.maxHeapを最大ヒープにする
    HeapLibrary.buildMaxHeap(this.maxHeap);
  }

  top() {
    return this.maxHeap[0];
  }
}

let pq = new PriorityQueue([2,3,43,2,53,6,75,10]);
console.log(pq.maxHeap);
console.log(pq.top());