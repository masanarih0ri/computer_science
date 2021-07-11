class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  printInOrder() {
    this.inOrderWalk(this);
    console.log("");
  }

  inOrderWalk(tRoot) {
    if(tRoot !== null) {
      this.inOrderWalk(tRoot.left);
      process.stdout.write(tRoot.data + " ");
      this.inOrderWalk(tRoot.right);
    }
  }
}

class BinarySearchTree {
  constructor(arrList) {
    let sortedList = arrList.sort((a, b) => { return a - b; });
    this.root = BinarySearchTree.sortedArrayToBST(sortedList);
  }

  static sortedArrayToBST(array) {
    if(!array.length) return null;
    return BinarySearchTree.sortedArrayToBSTHelper(array, 0, array.length - 1);
  }

  static sortedArrayToBSTHelper(arr, start, end) {
    if(start === end) return new BinaryTree(arr[start], null, null);

    let mid = Math.floor((start + end) / 2);

    let left = null;
    if(mid - 1 >= start) left = BinarySearchTree.sortedArrayToBSTHelper(arr, start, mid - 1);

    let right = null;
    if(mid + 1 <= end) right = BinarySearchTree.sortedArrayToBSTHelper(arr, mid + 1, end);

    let root = new BinaryTree(arr[mid], left, right)

    return root;
  }

  keyExist(key) {
    let iterator = this.root;
    while(iterator !== null) {
      if(iterator.data === key) return true;
      if(iterator.data > key) iterator = iterator.left;
      else iterator = iterator.right;
    }
    return false;
  }

  search(key) {
    let iterator = this.root;
    while(iterator !== null) {
      if(iterator.data === key) return iterator;
      if(iterator.data > key) iterator = iterator.left;
      else iterator = iterator.right;
    }
    return null;
  }

  printSorted(){
    this.root.printInOrder();
  }
}

let balancedBST = new BinarySearchTree([1,2,3,4,5,6,7,8,9,10,11]);
let balancedBST2 = new BinarySearchTree([4,43,36,46,32,7,97,95,34,8,96,35,85,1010,232]);
console.log(balancedBST);
balancedBST.printSorted();
balancedBST2.printSorted();