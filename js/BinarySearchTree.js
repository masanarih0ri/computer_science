class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(arrList) {
    this.sortedList = arrList.sort((a, b) => {return a - b});
    this.root = BinarySearchTree.sortedArrayToBST(this.sortedList);
  }

  static sortedArrayToBST(arr) {
    if(!arr.length) return null;
    return BinarySearchTree.sortedArrayToBSTHelper(arr, 0, arr.length - 1);
  }

  static sortedArrayToBSTHelper(arr, startIndex, endIndex) {
    if(startIndex === endIndex) return new BinaryTree(arr[startIndex], null, null);

    let mid = Math.floor((startIndex + endIndex) / 2);
    let left = null;
    if(mid - 1 >= startIndex) left = BinarySearchTree.sortedArrayToBSTHelper(arr, startIndex, mid - 1);
    let right = null;
    if(mid + 1 <= endIndex) right = BinarySearchTree.sortedArrayToBSTHelper(arr, mid + 1, endIndex);
    let root = new BinaryTree(arr[mid], left, right);
    return root;
  }

  search(key) {
    let iterator = this.root;
    while(iterator !== null) {
      if(iterator.data === key) return iterator;
      if(iterator.data > key) {
        iterator = iterator.left;
      } else {
        iterator = iterator.right;
      }
    }
    return null;
  }

  keyExist(key) {
    let iterator = this.root;
    while(iterator !== null) {
      if(iterator.data === key) return true;
      if(iterator.data > key) {
        iterator = iterator.left;
      } else {
        iterator = iterator.right;
      }
    }
    return false;
  }
}

let balancedBST = new BinarySearchTree([1,2,3,4,5,6,7,8,9,10,11]);
console.log(balancedBST.keyExist(6));
console.log(balancedBST.search(6));
console.log(balancedBST.keyExist(2));
console.log(balancedBST.search(2));
console.log(balancedBST.search(34));