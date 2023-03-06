var maxpathSum = function (root) {
  let globalMax = -Infinity;
  let connectedPathsMax = dfs(root, 'root');

  return Math.max(globalMax, connectedPathsMax);

  function dfs(node, val) {
    console.log(val);
    if (!node) return 0;

    let left = dfs(node.left, 'left');
    let right = dfs(node.right, 'right');
    console.log(left, right);

    globalMax = Math.max(
      globalMax,
      node.val,
      left + node.val,
      right + node.val,
      left + right + node.val
    );

    // there might be a bigger solution as we bubble up.
    // there's only 3 possible paths to return:
    // the current node val only, node val + the left path or the node val + right path.
    // you cannot return node + left + right, b/c that would create a split in the path for the recursion.
    return Math.max(node.val, left + node.val, right + node.val);
  }
};

let root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};

console.log('Hello', maxpathSum(root));
