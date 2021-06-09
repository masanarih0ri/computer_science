class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBSTHelper(nums, startIndex, endIndex) {
  // ベースケース
  if(startIndex === endIndex) return new BinaryTree(nums[startIndex], null, null)
  // 根ノードは真ん中に設定する
  let mid = Math.floor((startIndex + endIndex) / 2);
  let left = null;
  if(mid - 1 >= startIndex) left = sortedArrayToBSTHelper(nums, startIndex, mid - 1)
  let right = null;
  if(mid + 1 <= endIndex) right = sortedArrayToBSTHelper(nums, mid + 1, endIndex);
  let root = new BinaryTree(nums[mid], left, right);
  return root;
}

function sortedArrayToBST(nums) {
  if(!nums.length) return null;
  return sortedArrayToBSTHelper(nums, 0, nums.length - 1);
}

let balancedBST = sortedArrayToBST([1,2,3,4,5,6,7,8,9,10,11]);
console.log(balancedBST);