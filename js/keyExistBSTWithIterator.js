class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBSTHelper(nums, startIndex, endIndex) {
  if(startIndex === endIndex) return new BinaryTree(nums[startIndex], null, null);

  let mid = Math.floor((startIndex + endIndex) / 2);
  let left = null;
  if(mid - 1 >= startIndex) left = sortedArrayToBSTHelper(nums, startIndex, mid - 1);
  let right = null;
  if(mid + 1 <= endIndex) right = sortedArrayToBSTHelper(nums, mid + 1, endIndex);
  let root = new BinaryTree(nums[mid], left, right);
  return root;
}

function sortedArrayToBST(arr) {
  if(!arr.length) return null;
  return sortedArrayToBSTHelper(arr, 0, arr.length - 1)
}

function keyExist(key, bst) {
  if(bst === null) return false;
  let iterator = bst;
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

let balancedBST = sortedArrayToBST([1,2,3,4,5,6,7,8,9,10,11]);
console.log(balancedBST);
console.log(keyExist(6, balancedBST));
console.log(keyExist(10, balancedBST));
console.log(keyExist(45, balancedBST));