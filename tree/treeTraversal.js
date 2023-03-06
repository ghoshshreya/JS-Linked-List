// var inorderTraversal = function (root) {
//   const inorder = [];
//   while (true) {
//     if (root === null) return;
//     inorderTraversal(root.left);
//     console.error(root.val);
//     // inorder.push(root.val);
//     inorderTraversal(root.right);
//   }
// };

// inorderTraversal({
//   val: 1,
//   left: null,
//   right: {
//     val: 2,
//     left: {
//       val: 3,
//       left: null,
//       right: null,
//     },
//     right: null,
//   },
// });
