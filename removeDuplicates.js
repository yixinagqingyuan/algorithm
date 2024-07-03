/** @format */

// 删除字符串中的所有相邻重复项
//输入："abbaca"
//输出："ca"
//解释：
//例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
// 这一题的难点是到他删除了以后，他纸面删除了以后，可能还会有动态的隐藏的重复的
// 如何解决这一问题，其实就很重要
const removeDuplicates = (str) => {
  // 首先我们先给第一个装进去，为啥呢？ 原因很简单，他第一个指定不重复啊
  let stack = [str[0]]
  // 首先我们指定要遍历
  for (let i = 1; i < str.length; i++) {
    // 我们先给取出来，然后后头备用
    let s = str[i]
    // 如果判断出来和数组的最后一个一样，那么就要给他吐出来
    // 这里就解决了一个问题，解决了当动态重复的问题
    if (s == stack[stack.length - 1]) {
      stack.pop()
    }
    // 因为前头的删除了，那么每次就要 push进去
    stack.push(s)
  }
  console.log(stack)
}
//removeDuplicates('abbbcdddddaaa')

const removeDuplicates1 = (str) => {
  // 当然上述代码是错误的,对然代码没有报错，可是他写的不符合题意，所以我们要重新写
  const stack = [str[0]]
  for (let i = 1; i < str.length; i++) {
    let s = str[i]

    // 这时候如果发现 bb 那么其实 bb 都要被干掉，而不是干掉一个，于是，我们在发现相同的时候，可以直接干掉
    // 我们就是要把当前的 s 和 stack的最后一个值比较 之所以，要这么样比较，是因为，当前的这个
    // 和上一个去比，而恰巧上一个，就是 stack 的最后一个
    if (s == stack[stack.length - 1]) {
      // 这时候当等于的时候，我们直接不 push 并且给他拿出来就行
      stack.pop()
    } else {
      // 否则就往 stack 里头推
      stack.push(s)
    }
  }
  console.log(stack)
}
removeDuplicates1('abbaca')
