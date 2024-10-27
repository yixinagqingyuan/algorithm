/** @format */

// 给定一个链表，判断链表中是否有环。
const hasCycle = (head) => {
  // 这一题我们是要用快慢指针去做
  // 用快慢指针如果他有环那么那么他一定会相遇
  // 如果他没有环，那么他一定会最后走到 null
  // 先声明一个慢的在声明一个快的
  // 他们初始化都会指向 head
  // 然后每次一个走一步，一个走两步
  let slow = head
  let fast = head
  // 这个时候我们需要用 while 来进行遍历，用 for 循环指定不行，因为他是链表
  // 如果快慢都有那么就继续遍历，如果没有那就说明没有环
  // 走到 null 也说明没有环
  while (slow && fast) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}
