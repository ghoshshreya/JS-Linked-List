var inorderTraversal = function (root) {
  const inorder = [];
  let i = 0;
  while (true && i < 100) {
    if (root === null) return;
    inorderTraversal(root.left);
    console.error(root.val);
    // inorder.push(root.val);
    inorderTraversal(root.right);
    i++;
  }
};

inorderTraversal({
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
});
