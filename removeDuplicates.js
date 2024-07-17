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
//removeDuplicates1('abbaca')

// 给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。
//你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。
//在执行完所有删除操作后，返回最终得到的字符串。

//输入：s = "deeedbbcccbdaa", k = 3
//输出："aa"
//解释：
//先删除 "eee" 和 "ccc"，得到 "ddbbbdaa"
//再删除 "bbb"，得到 "dddaa"
//最后删除 "ddd"，得到 "aa"
// 这一类型的题有很多衍生的题目 带一个 k 就是很重要的并且常考的题目之一
const removeDuplicates2 = (str, k) => {
  // 首先得有个 stack 存结果
  const stack = []
  // 接下来指定要遍历
  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    // 这时候prve 可能多个值的情况并且相加的时候都是一样的
    // 每次遍历，就会取前一个，这样就能满足当这个删除之后，后头的和前头的又续上了
    const prve = stack.pop()
    // 当 prve没有，或者，prve不等于当前的值,所以我们取一个标本，0 的位置
    if (!prve || prve[0] !== s) {
      // 现在我取出来了，那么现在我要在存进去，因为都不一样了
      stack.push(prve)
      stack.push(s)
    } else if (prve.length < k - 1) {
      // 相当于给当前这个地方累加
      stack.push(prve + s)
    }
    // 如果不满足，那么我已经取出来了，就不要在放进去了,这时候就能筛选出来有问题超过3个的情况
  }
  console.log(stack.join(''))
}

removeDuplicates2('deeedbbcccbdaa', 3)
