/** @format */

//一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

//机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

//问总共有多少条不同的路径？

// 动态规划：O(m*n) 时间，O(n) 空间
const uniquePaths = (m, n) => {
  if (m <= 0 || n <= 0) return 0
  // dp[j] 表示当前行到列 j 的走法数
  const dp = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 这个一维数组不太好理解，为什么呢？因为你感觉你找到的不是上头的或者左边的啊，但是其实，它是只是给二维数组里头的上头和左边
      // 给放在一维数组里头了，因为二维数组里头有好多重复的，所以就通过以为数组结局问题了
      dp[j] = dp[j] + dp[j - 1]
    }
  }
  return dp[n - 1]
}

// 重写多少条不同路径，这题可以确定用动态规划去做，所以我们就套公式
const uniquePaths1 = (m, n) => {
  // 首先要有个兜底情况，m 和n 不同的情况
  if (m == 0 && n == 0) {
    return 0
  }
  // 接下来就开始动态规划了,首先还得 dp
  const dp = []
  // 你也可以花哨一点， dp=new Array(m).fill(1),相当于给一排先安排上，剩下的都是在这一排 的每一个的基础上，往上累加前面的所有和
  for (let i = 0; i < m; i++) {
    dp[i] = 1
    for (let j = 1; i < n; j++) {
      // 为什么这个要从1 开始，很简单，为了让他不重叠
      dp[j] = dp[j] + dp[j - 1]
    }
  }
}
// 但是吧这样可能不好理解，我们还是脑子里又那个图，然后用二维数组来解决吧

const uniquePaths2 = (m, n) => {
  // 先来个兜底
  if (m == 0 && n == 0) {
    return 0
  }
  // 首先要搞个二维数组
  // const dp = new Array(m).fill(new Array(n).fill(1))
  // 前面这个初始化有问题
  const dp = new Array(m).map((item) => {
    return new Array(n).fill(1)
  })
  // 然后就是老步骤双重 for 循环，因为你要拿到他的每一步的步骤啊
  for (let i = 1; i < m; i++) {
    // 这里只所有要都从一开始，因为我们最开始走路的步骤都是 1 条路径没有别的选择
    for (let j = 1; j < n; j++) {
      // 核心步骤就是上一个，和左边的一个累加，来动态的取他后面的内容
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}

// 再求个最小路径和
//给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
//说明：一个机器人每次只能向下或者向右移动一步。
// 这道题求他的最小路径，首先指定是动态规划，之前是求所有路径，这一次是求最小路径
// 也就是从求数量变成求最小长度
const sum = (n, m) => {
  // 这个指定也是动态规划
  if (n == 0 && m == 0) {
    return 0
  }

  // 然后还是 dp 开始，我只需要求每一个位置的最短路径就可以了
  const dp = new Array(m).fill(0).map((item) => {
    return new Array(n).fill(0)
  })
  // 好了要开始求最短路径了
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 接下来就开始求路径了,最短路径就是之前的最短加上 1 对吧
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
    }
  }
  return dp[m - 1][n - 1]
}
// 重写那个带路径的
const sum1 = (arr) => {
  // 首先要想那种格子，然后在格子里头，累加数字
  // 首先就是动态规划四部曲
  // 第一步确定 dp 上来全部干掉
  const n = arr.length
  const m = arr[0].length
  const dp = new Array(n).fill(0).map((i) => new Array(m).fill(0))

  // 然后就是边界条件，这我们可以先不管，直接第三部，开始规划
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 这里要开始确定边界条件了
      // 首先，如果横着等于0
      // 或者竖着等于 0 的情况
      if (i == 0 && j == 0) {
        dp[i][j] = arr[i][j]
      } else if (i === 0) {
        dp[i][j] = arr[i][j] + dp[i][j - 1]
      } else if (j === 0) {
        dp[i][j] = arr[i][j] + dp[i - 1][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + arr[i][j]
      }
    }
  }
}
