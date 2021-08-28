class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;    
  }

  printInOrdr() {
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
    let sortedList = arrList.sort((a, b) => { return a - b });
    this.root = BinarySearchTree.sortedArrayToBST(sortedList);
  }

  static sortedArrayToBST(arr) {
    if(!arr.length) return null;
    return this.sortedArrayToBSTHelper(arr, 0, arr.length - 1);
  }

  static sortedArrayToBSTHelper(arr, start, end) {
    if(start === end) return new BinaryTree(arr[start], null, null);

    let mid = Math.floor((start + end) / 2);

    let left = null;
    if(mid - 1 >= start) left = BinarySearchTree.sortedArrayToBSTHelper(arr, start, mid - 1);

    let right = null;
    if(mid + 1 <= end) right = BinarySearchTree.sortedArrayToBSTHelper(arr, mid + 1, end);

    let root = new BinaryTree(arr[mid], left, right);
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
    return iterator;
  }

  insert(value) {

  }

  transplant(nodeParent, node, target) {

  }

  deleteNode(node) {

  }

  findParent(node) {

  }

  findSuccessor(node) {

  }

  minimumNode(node) {
    
  }

  printSorted() {
    this.root.printInOrdr();
  }
}

let balancedBST = new BinarySearchTree([4,43,36,46,32,7,97,95,34,8,96,35,85,1010,232]);

balancedBST.printSorted();
// balancedBST.deleteNode(4);
// balancedBST.printSorted();
// balancedBST.deleteNode(97);
// balancedBST.printSorted();
// balancedBST.deleteNode(232);
// balancedBST.printSorted();
// // 77はないので何も消されない
// balancedBST.deleteNode(77);
// balancedBST.printSorted();