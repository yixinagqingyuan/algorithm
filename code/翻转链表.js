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

// 重写第三次

const reverselist3 = (head) => {
  // 这是之前的思路，然后给当前的这个线干掉，然后重新搞一个新的线
  // 所以得有这一个当前，和 当前这个
  let prev = null
  let curr = head
  // 然后双重 for 循环啊
  while (curr) {
    // 先给下一个存起来
    const next = curr.next
    // 然后给当前的这个的 next 指向 prev，这样老的建就断了，新的就建立了
    curr.next = prev
    // 然后移动到下一个，上一个也搞定，下一个也搞定
    prev = curr
    curr = next
  }
}

// 重写第四次
const reverselist4 = (head) => {
  // 记住一个思路，碰见当前，给下一个的 next 存起来，然后给当前的指向上一个
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

// 重写一次反转链表
const reverselist5 = (head) => {
  // 首先要有个 curr 和 prev 来解决中间值的问题
  const prev = null
  const curr = head
  // 然后开始遍历，
  while (curr) {
    // 我们遍历就走到下一个了
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
}
reverselist5()
