/** @format */
// 翻转链表
// 这一题的主要思路就是给之前的线断了，建立新的线
const ReverseList = (head) => {
  // 这里主要是为了给上一个保留，方便断了线之后，能重新关联
  let prev = null
  let curr = head
  while (curr) {
    // 先存一个,防止到时候找不到了
    const next = curr.next
    // 然后 就给当前的 next 变成 prve
    //这时候就能反转了
    curr.next = prev
    //然后移动到下一个,就这么一个个挪，直到挪不动为止
    prev = curr
    curr = next
  }
  return prev
}

// 重写一次反转链表

const reverselist1 = (head) => {
  // 按照之前的逻辑，找到下一个，然后存起来，然后给当前的这个的 next 改一下，
  let prev = null
  let curr = head
  while (curr) {
    // 先给下一个存起来，为了 next能被找到
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

// 重写第二次

const reverselist2 = (head) => {
  // 按照之前的思路，要反转就要给当前的这个指向挂到上一个去
  // 所以得弄个之前的，在弄个现在的
  let prev = null
  let curr = head
  // 然后就是 while 循环啊，所以现假模假式的搞个
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
}
