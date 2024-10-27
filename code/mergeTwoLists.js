/** @format */

// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4
// 这一题其实就是 比较
const mergeTwoLists = (l1, l2) => {
  // 首先判断空
  // if (!l1 && !l2) return null
  // if (!l1) return l2
  // if (!l2) return l1
  // // 然后就是比较大小，这里就是利用递归去做
  // // 这样就是 在递归中一层层的去判断下一个的大小
  // if (l1 > l2) {
  //   l2.next = mergeTwoLists(l1, l2.next)
  //   return l2
  // } else {
  //   l1.next = mergeTwoLists(l1.next, l2)
  //   return l1
  // }
  // 当然我们也可以尝试一下while ，因为有时候，能用递归解决的还可以用while 解决
  // 当l1有或者l2 有的时候
  // 当然进来的时候要判断空啊
  if (!l1 && !l2) return null
  // 然后要弄一个要合并的链表
  // let result = new ListNode(-1)
  // let prve = result
  // // 然后开始比较
  // while (l1 || l2) {
  //   if (!l1) {
  //     prve.next = l2
  //   }
  //   if (!l2) {
  //     prve.next = l1
  //   }
  //   if (l1 > l2) {
  //     prve.next = l1
  //   } else {
  //     prve.next = l2
  //   }
  //   // 比较方式很简单
  //   prve = prve.next
  // }
  //事实证明上头的方案是有问题的，因为我在 while 里头用或就很坑讲道理
  // 他既然是l1 和 l2 比较，那么就只有一种情况 是或者的情况 有一个链表到底了
  // 所以我们只需要在最后 的时候判断下一个就行了
  let result = new ListNode(-1)
  let prve = result
  while (l1 && l2) {
    if (l2 > l1) {
      prve.next = l1
      l1 = l1.next
    } else {
      prve.next = l2
      l2 = l2.next
    }
    prve = prve.next
  }
  // 然后就是最后的情况， 弄的还有一个的情况
  prve.next = l1 || l2
  // 然后 result 的链表已经形成了，我们给他弄出来就行了
  return result.next
}
