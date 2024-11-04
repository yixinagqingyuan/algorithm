/** @format */

//找出字符串中连续出现最多的字符和个数
//'abcaakjbb' => {'a':2,'b':2}
//'abbkejsbcccwqaa' => {'c':3}
// 这一道题是为了找连续最长的字符串
const findLongest = (str) => {
  // 首先要有个判空的兜底
  if (!str) return
  // 在开始这道题之前，我们现干嘛？
  // 当然是得有个地方存结果啊
  const answer = {}
  // 接下来一定是 for 循环，因为你要找最长的那当然得 for 循环啊
  // 然后由于是要找最大连续，那么当然得有地方能零时保存最大值
  let maxCount = 0 // 默认值当然是 0
  // 然后还要有个当前正在累加的值
  let count = 0
  // 在然后还要有个当前的字符串
  let curr = ''
  // ok了暂时需要这些辅助变量,暂时齐活了
  // 然后开始遍历，具体遍历里头什么思路呢？
  for (let i = 0; i < str.length; i++) {
    // 其实很简单，利用遍历来往 curr 和 count里头输入内容，然后再跟 maxcount 比较，最终找到对应的内容,
    // 我们现取一下当前的 s 的值
    let s = str[i]
    if (curr == s) {
      // 如果相等，那么此时就开始比较
      // 我们要先给当前的这个一样的加上
      // 此时你可以发现 count 的魅力，他能够记录当前 curr 的连续的子数组的个数。
      // 从而防止，我们对 curr 做累加的问题
      count++
      // 然后要开始跟最大值比较
      if (count > maxCount) {
        // 但是此时问题来了，我们要获取最大的的值的个数啊
        // 现在我们相当于给整个的值遍历了一遍，这不是扯淡吗
        // 我们还需要去重新排序取最大的，取最最大的一个或者多个
        // 显然，这不对
        // 于是我们发现，我们每次直接给整个对象换掉不就行了吗，由于我们判断了，最大的情况
        // 最后留下来的只有一个
        maxCount = count
        res = { [s]: maxCount }
      }
      // 可这样也不对，还有个问题需要搞明白，我特么可能不止有一个最大值啊 ,他有可能相等，这怎么办呢？
      // 凉拌，我们直接整一个相等的情况往里头塞不就行了吗
      // 这样我们就完美的解决了，可能有多个的问题
      // 如果最大的有一样的， 那么就有多个，如果，再有更大的，就直接给替掉，因为是直接替换的对象
      if (maxCount == count) {
        res[s] = maxCount
      }
    } else {
      // 如果不等于那么就要重新开始
      curr = s
      // 注意这里之所以是 1，是因为他有一个已经重新赋值了，所以他的初始值得为 1
      count = 1
    }
  }
}