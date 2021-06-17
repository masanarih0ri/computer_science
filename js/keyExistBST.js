class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(arr) {
  if(!arr.length) return null;
  return sortedArrayToBSTHelper(arr, 0, arr.length - 1);
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

function keyExist(key, bst) {
  if(bst === null) return false;
  if(bst.data === key) return true;
  if(bst.data > key)  { 
    return keyExist(key, bst.left) 
  } else {
    return keyExist(key, bst.right);
  }
}

let balancedBST = sortedArrayToBST([1,2,3,4,5,6,7,8,9,10,11]);
console.log(balancedBST);
console.log(keyExist(6, balancedBST));
console.log(keyExist(10, balancedBST));
console.log(keyExist(45, balancedBST));