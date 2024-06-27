/** @format */

// 判断是否有环
// 这一题就就很简单，快慢指针
const hasLoop = (head) => {
  // 所谓快慢指针，就是我弄一个快指针，弄一个慢指针 循环这个链表  如果最后能遇上，那就说明有环
  // 如果遇不上，那就残废了
  // 首先 我们当然要声明快慢指针了
  // 首先要判空
  if (head == null || head.next == null) {
    return false
  }
  let slow = head
  let fast = head
  // 然后 while 循环，条件是什么呢？ 他们都还有
  // 这时候如果没有了，那就说明指定没有环，如果一直有，那么就等他们相遇
  while (slow && fast) {
    // 这个地方的赋值就是快慢指针的妙用
    slow = slow.next
    fast = fast.next ? fast.next.next : fast.next
    // 相等就代表遇上了，
    if (slow === fast) {
      return true
    }
  }
  // 最后循环完了，还没搞定，那就说明真没有环了
  return false
}
hasLoop([3, 2, 0, -4])
