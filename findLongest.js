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
  const maxCount = 0 // 默认值当然是 0
  // 然后还要有个当前正在累加的值
  const count = 0
  // 在然后还要有个当前的字符串
  const curr = ''
  // ok了暂时需要这些辅助变量,暂时齐活了
  // 然后开始遍历，具体遍历里头什么思路呢？
  for (let i = 0; i < str.length; i++) {
    // 其实很简单，利用遍历来往 curr 和 count里头输入内容，然后再跟 maxcount 比较，最终找到赌对应的内容，然后再
  }
}
