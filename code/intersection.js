/** @format */

// 编写一个函数计算多个数组的交集
// 他的核心就是比较两个数组，比完了拿到共有值和下一个数组比较

// const intersection = (...arg) => {
//   const public = []
//   // 正常的就是双重 for 循环啊，所以现假模假式的搞个
//   for (let i = 0; i < arg.length - 1; i++) {
//     //第一个弄一个公共数组
//     const pub = []
//     // 然后便利俩数组
//     for (let j = 0; j < arr[i].length; i++) {
//       // includes 方法，判断是否存在
//       // 首先得判断最外层的 public
//       // 这只是为了处理第一次的时候的问题
//       if (public.length) {
//         // 然后判断 public 里面是否存在 arr[i][j]
//         if (public.includes(arr[i][j])) {
//           // 就 push 进去，相当于在公共的地方，在筛选一层
//           pub.push(arr[i][j])
//         }
//       } else {
//         if (arr[i].includes(arr[i][j])) {
//           pub.push(arr[i][j])
//         }
//       }
//     }
//     public = pub
//   }
// }
// 刚才不算，从头来过
const intersection = (...arg) => {
  // 上来先搞第0个
  let pub = arg[0];
  for (let i = 1; i < arg.length; i++) {
    // 这里有个非常有意思的，就是我直接将第一个复制到公共里头，相当于让然后开始遍历，相当于让第二个跟第一个比
    // 公共的就和第三个比，解决了所有的问题
    const public = [];
    for (let j = 0; j < arg[i].length; j++) {
      if (pub.includes(arg[i][j])) {
        public.push(arg[i][j]);
      }
    }
    pub = public;
  }
  console.log(pub);
};
intersection([2, 1, 6], [6, 3], [6, 5]);
