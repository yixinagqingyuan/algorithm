/**
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 * 示例 1：
 *
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 * 示例 2：
 *
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 * 提示：
 *
 * 0 <= word1.length, word2.length <= 500
 * word1 和 word2 由小写英文字母组成
 *
 * @format
 */

//首先我们给动态规划五部曲弄上去
//1. 确定状态，也就是动态规划数组以及下标的含义
//2. 确定转移方程，也就是固定的推导公式
//3. 确定初始条件和边界情况，也就是动态规划数组初怎么初始化
//4. 确定计算顺序，也就是遍历for循环顺序
//5. 消除冗余，也就是推导动态规划数组看对不对

// 有了这五部我就就可以开始了
// 虽然理解了这五步，但是我们还需要去确定我们动态规划的这个规划是什么
// 我们要很明确的知道，我们动态规划规划的是我们达到目的用的步骤数，最终在比较的时候取一个最小的，来解决问题
// 所以我们的 dp 数组保存的就是从 word1 到 word2 用的最少步骤数
const minDistance = (word1, word2) => {
  // 五步走战略
  // 刚才第一步我们已经搞定解决了，我们就需要一个 dp 数组
  const dp = new Array(word1.length + 1)
    .fill(0)
    .map(() => new Array(word2.length + 1).fill(0))
  // dp 数组其实从空间上就是一个二维数组
  // 然后这里其实还要做一步，干啥呢? 其实也是确定状态
  // 当我们便利从0 开始的时候，我们要做删除操作的时候，我们拿到上一个动态规划的内容就需要特殊处理
  // 所以我们需要干什么呢？ 假设一个什么都没有的情况来解决问题，也就是当我凭空从一个单词到另一个单词的时候   我们需要多少步
  // 于是就有了如下代码：
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }
  // 初始化 x 轴 和y 轴
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }

  // 动态规划填充矩阵
  // 第二步，我们需要确定转移方程
  // 我们第二部确定转移方程式首先我们需要脑子里有一个二维数组的概念，照着那个数组解决问题

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 初始化边界条件：空字符串转换成任意长度的字符串至少需要该字符串的长度次操作
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] // 如果两个字符相等，则不需要消耗操作次数
      } else {
        // 这两个便利到的数字不想等，那么这时候就需要去做计算了，也就是我究竟干那个步骤最省事
        // 之前说过了，具体的步骤有三个，插入，替换删除
        // 他这个替换删除操作的意思是， 我在每一步的过程中看以x、y 坐标为基准
        // 如果以 x 坐标为基准，那 往右走，就是插入操作 ，往下走就是 删除操作 往右下走，那就是替换操作，因为 对比之下都更新了，如果不想等的话
        // 那么就看前一步的步骤达到一样用了几步，最后求个最小的，这样总体就是最小的了
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1, // 替换操作
          Math.min(
            dp[i][j - 1] + 1, // 插入操作
            dp[i - 1][j] + 1,
          ), // 删除操作
        )
      }
    }
  }
}

minDistance('horse', 'ros')

// 现在思路有了，可以重写一遍了

const minDistance1 = (word1, word2) => {
  const m = word1.length
  const n = word2.length
  // 确定 dp  也就是初始值，这里我们是个二维数组,这里要确定的是我一个二维数组的内容是啥，是保存的，每次的最小步骤
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  // 当然还没完，为了方便代码书写，重新写一下初始化条件，也就是默认给什么都没有的情况搞进来，这么做是为了，防止用-1 的时候需要处理
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }
  // 然后就是确定递推公式，以及边界情况，这里我们可以确定的是，如果相等那么就什么都不用干直接去上次的最小的步骤就行了
  // 上来当然要双重 for 循环
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 之所以要从 1 开始，是最开始初始化的时候给 没有的部分都初始化完了，不用在这处理了
      // 这里就要开始比较word1 和word2 了 当相等的时候就 直接等于上一个的最小步骤
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 否则就是正常的去计算了，处理三种情况，插入，删除，替换
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1, // 替换操作
          dp[i][j - 1] + 1, // 插入操作
          dp[i - 1][j] + 1, // 删除操作
        )
      }
    }
  }

  return dp[m][n] // 最终答案位于dp数组右下角
}
minDistance1('horse', 'ros')

// 现在可以写第三遍了
const minDistance2 = (word1, word2) => {
  // 长度确定了之后，我们就要确定 dp 数组的内容了，也就是我们的状态
  const m = word1.length
  const n = word2.length
  // 初始化 dp 数组，整理 dp 指定是个二维数组全部搞成 0
  const dp = new Array(m - 1).fill(0).map(() => new Array(n - 1).fill(0))
  // 然后就处理边界条件，给之前的填满
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }
  // 然后就开始遍历，双重 for循环
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // 这里就是开始比较了 如果两个单词相同是就加大dp 的步骤了
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 否这就取一个当下最小的
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
        )
      }
    }
  }
}

// 再写第四遍
const minDistance3 = (word1, word2) => {
  // 我们一看到这题就要用动态规划做，那么就是五部曲
  // 首先最大的 length
  const m = word1.length
  const n = word2.length
  // 我先得有个数组啊

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  // 然后我们要确定边界状态
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }
  // 然后开始遍历，主要就是为了解决动态规划在每一个情况下的最小步骤
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 如果相等的话，那么就不需要解决了，直接等于上一个最小步骤就行了
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 不想等的话就要找一个最小值了
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
        )
      }
    }
  }
}
