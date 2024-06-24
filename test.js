/** @format */

const { count, time } = require('console')

const mapsrot = (a, b) => {
  // const arr = a.split('')
  // const brr = b.split('')
  // while (arr.length && brr.length) {
  //   const current1 = arr.shift().charCodeAt()
  //   const
  current2 = arr.shift().charCodeAt()
  //   return current1 - current2
  // }
  return a.localeCompare(b)
}

// 这个函数不需要候选人实现
function md5(data) {
  return crypto.createHash('md5').update(data).digest('hex')
}
const reg = /([^=&>?]+)=([^&]+)/g

const queryString = (str) => {
  const obj = {}
  str.replace(reg, (_, k, v) => {
    obj[k] = v
  })
  const token = obj.token
  delete obj.token
  return [obj, token]
}
const getParamsFromUrl = (url) => {
  const [obj, token] = queryString(url)
  const serialize = Object.keys(obj).sort(mapsrot)
  let data = ''
  serialize.forEach((item) => {
    data += item + '=' + obj[item] + '&'
  })
  const newtoken = md5(`${data}key=a1s2d3f4`)
  if (newtoken === token) {
    return obj
  } else {
    return {}
  }
}

// getParamsFromUrl(
//   'name=alice&age=19&address=nanshan&token=5a864844e914514561aff395dde18ed1',
// )

// 按name排列

// var users = [
//   { name: 'has', age: 17, height: 165 },

//   { name: 'saf', age: 20, height: 172 },

//   { name: 'gngh', age: 45, height: 182 },

//   { name: 'yjerw', age: 42, height: 156 },

//   { name: 'cvb', age: 22, height: 176 },

//   { name: 'wetty', age: 32, height: 178 },

//   { name: 'aDNY', age: 34, height: 175 },
// ]

// const a = users.sort(function (a, b) {
//   console.log(a.name - b.name)
//   return a.name - b.name
// })
// console.log(a)
// 结果：

/*

name:aDNY age:34 height:175

name:cvb age:22 height:176

name:gngh age:45 height:182

name:has age:17 height:165

name:saf age:20 height:172

name:wetty age:32 height:178

name:yjerw age:42 height:156

*/
// 合并两个有序链表
function mergeTwoLists(l1, l2) {
  // 如果第一个没有，直接都第二个，不用排序，这样直接能确定下一个
  if (!l1) {
    return l2
  }
  // 如果第二个没有，直接第一个，也能确定下一个
  if (!l2) {
    return l1
  }
  // if (l1.val >= l2.val) {
  //   l2.next = mergeTwoLists(l1, l2.next)
  //   return l1
  // }
  // if (l1.val < l2.val) {
  //   l1.next = mergeTwoLists(l1.next, l2)
  //   return l2
  // }
  const res = null
  const answer = res
  // 如果有l1 还有 l2
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      res.next = l2
      l2 = l2.next
    } else {
      res.next = l1
      l1 = l1.next
    }
    res = res.next
  }
  // 处理剩余的情况
  res.next = list1 ? list1 : list2
  return answer.next
}
// 重写两个有序链表
function mergeTwoList23(l1, l2) {
  // 如果没有l1，那么直接就返回l2
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let res = null
  // 之所以要复制一个，所以 res 要一被赋值，所以要有一个头，来吧这个链表从头开始
  let answter = res
  // 需要对l1 和l2 重新赋值，所以就是 l1 和 l2 遍历
  while (l1 && l2) {
    if (l1.val > l2.val) {
      res.next = l2
      l2 = l2.next
    } else {
      res.next = l1
      l1 = l1.next
    }
    // 当然还有一种情况 可能还会有一个l1 有l2 没有的情况，或者反之
    // 链表形成之后，要赋值下一个所以，对 res 重新赋值
    res = res.next
  }
  // 一定会有这情况，因为最后只会剩下一个
  res.next = l1 ? l1 : l2
  return answter.next
}

// 迭代
// 时间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度。因为每次调用递归都会去掉 l1 或者 l2 的头节点（直到至少有一个链表为空），函数 mergeTwoList 至多只会递归调用每个节点一次。因此，时间复杂度取决于合并后的链表长度，即 O(n+m)
// 空间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度。递归调用 mergeTwoLists 函数时需要消耗栈空间，栈空间的大小取决于递归调用的深度。结束递归调用时 mergeTwoLists 函数最多调用 n+m 次，因此空间复杂度为 O(n+m)。
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2
  }
  if (!list2) {
    return list1
  }
  // 定义一个空的链表
  let res = new ListNode(-1)
  // 复制该链表，因为迭代过程中会改变链表
  let ans = res
  // 迭代结束条件为当一个链表遍历结束即停止
  while (list1 && list2) {
    // 当list1节点大，则先指向list2 节点
    if (list1.val >= list2.val) {
      res.next = list2
      // 同时改变 list2 指针为下一个继续对比
      list2 = list2.next
    } else {
      res.next = list1
      list1 = list1.next
    }
    // 每次迭代，改变当前链表的指向，以进行正确指向
    res = res.next
  }
  // 最后迭代结束后，可能会有一个链表还有剩余，且由于是递增的，所以直接等于剩余的链表头节点即可
  res.next = list1 ? list1 : list2
  // 返回空节点的下一个即为最终的结果
  return ans.next
}

// const mypromise = (arg) => {
//   return new Promise((resolve, reject) => {
//     console.log(arg)
//     // 目的是数组拷贝
//     const newpromise = Array.from(arg)
//     const answer = []
//     let count = 0
//     for (let i = 0; i < newpromise.length; i++) {
//       newpromise[i]().then((res) => {
//         answer[i] = res
//         count++
//         if (count == newpromise.length) {
//           resolve(answer)
//         }
//       })
//     }
//   })
// }
// const sleep = (seconds) =>
//   new Promise((resolve) => setTimeout(() => resolve(seconds), seconds))
// mypromise([sleep(3000), sleep(2000), sleep(1000)])

//合并两个有序数组
// 给第二个插入到第一个就完事了
function twoNumConcat(nums1, m, nums2, n) {
  //获取下标总数
  m = m - 1
  n = n - 1
  num = m + n - 1
  // 因为我要处理的nums1 所以，我只需要给 nums2全部插入就行，只需要维护 nums2的状态
  while (n >= 0) {
    if (m < 0) {
      nums1[num] = nums2[n]
      n--
    } else {
      if (nums1[m] > nums2[n]) {
        nums1[num] = nums1[m]
        m--
      } else {
        nums1 = nums2[n]
        n--
      }
    }

    num--
  }
  console.log(nums1)
}
// 重写合并两个有序数组
function twoNumConcat(nums1, m, nums2, n) {
  // 这种问题，首先第一点，一定是一定要找到下标
  let len1 = m - 1
  let len2 = n - 1
  let len = m + n - 1
  //  我们使用的是插入法，所以我们就判断 nums2 的 len 还有没有值就行了
  while (len2 > 0) {
    // 如果第一个nums1 都插入没了，就说明，全部都比 nums2 小了，所以都插入 nums2 就好了
    if (len1 < 0) {
      nums1[len] = nums2[len2]
      len2--
    } else {
      if (nums1[len1] > nums2[len2]) {
        nums1[len] = nums1[len1]
        len1--
      } else {
        nums1[len] = nums2[len2]
        len2--
      }
    }
    len--
  }
}
// const merge = (nums1, m, nums2, n) => {
//   // 找到len1总下标
//   let len1 = m - 1,
//     // 找到len2 总下标
//     len2 = n - 1,
//     // 总体的下标
//     len = m + n - 1
//   // 既然是插入法，就需要遍历 nums2 这样一来就能拿到其中的数字有序插入,直到给len2 干空为止
//   while (len2 >= 0) {
//     // 达到零界条件退出循环，也就是 len 数组的值都没了，那么说明都比较完了，只能剩余的赋值num2 的，直到给 num2 干空
//     if (len1 < 0) {
//       nums1[len--] = nums2[len2--]
//       continue
//     }
//     // 争夺最后一个值,将最后一个值，放在最后一位
//     nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
//   }
//   console.log(nums1)
// }
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// twoNumConcat([1, 2, 4, 0, 0, 0], 3, [3, 5, 6], 3)

var climbStairs = (n) => {
  if (n <= 2) {
    return n
  } else {
    dp = [1, 2, 3]
    for (var i = 3; i < n; i++) {
      dp[n] = dp[n - 1] + dp[n - 2]
    }
  }
  dp[n]
}

const lengthOfLongestSubstring = (s) => {
  var max = 0
  var arr = []
  for (const str of s) {
    if (arr.includes(str)) {
      var index = arr.findIndex((i = str))
      arr.splice(0, index + 1)
    }
    arr.push(str)

    max = Math.max(arr.length, max)
  }
  return max
}

// lengthOfLongestSubstring('abcabcbb')

//
var spiralOrder = (arr) => {
  var top = 0
  var left = 0
  var right = arr[0].length - 1
  var bottom = arr.length - 1
  var res = []
  while (left < right && top < bottom) {
    for (var i = left; i <= right; i++) {
      res.push(arr[top][i])
    }
    for (var i = top; i <= bottom; i++) {
      res.push(arr[i][right])
    }
    for (var i = right; i >= left; i--) {
      res.push(arr[bottom][i])
    }
    for (var i = bottom; i >= top; i--) {
      res.push(arr[i][left])
    }
    left++
    top++
    right--
    bottom--
  }
  res
}
//[1,2,3,4,8,12,11,10,9,5,6,7]
// spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ])

// const add = (str, str2) => {
//   const length1 = str.length
//   const length2 = str2.length
//   const maxLength = length1 > length2 ? length1 : length2
//   const answer = []
//   let Base = 0
//   for (var i = maxLength - 1; i > 0; i--) {
//     let res = str[maxLength] + str[maxLength] + Base
//     if (res >= 10) {
//       answer.unshift(res.splice('')[1])
//       Base = res.splice('')[0]
//     } else {
//       Base = 0
//       answer.unshift(res)
//     }
//   }
//   answer.join(',')
// }
// add('2222', '1111')

//juejin.cn/post/7298218459795734582
//【代码题】实现一个拼手气抢红包算法

//           class RedPackage {
//   money = 0
//   count = 0
//   _remain = 0

//   constructor(money, count) {
//     this.money = money
//     this.count = count
//     this._remain = money
//   }

//   openRedPackge() {
//     //  已经抢完了
//     if (this.count <= 0) {
//       console.log('红包已经被抢完啦~')
//       return
//     }

//     //  只剩一个红包
//     if (this.count === 1) {
//       this.count--
//       console.log(this._remain)
//       return
//     }

//     const ratio = Math.random() * (this._remain / this.money)
//     //  这里会涉及到一个JS计算精度的问题
//     //  正常应该用第三方库或者字符串算法实现一个精准的加减乘除
//     //  这里为了简单就这么直接做了
//     let youGet = (this.money * ratio).toFixed(2)
//     const tempRemain = +(this._remain - youGet).toFixed(2)
//     const allLeast = this.count * 0.01

//     //  如果剩余的金额不够每人一分钱，那么需要减少本次获得的金额
//     if (tempRemain < allLeast) {
//       youGet = +(this._remain - allLeast).toFixed(2)
//       this._remain = allLeast
//     } else {
//       this._remain = tempRemain
//     }
//     console.log(youGet)
//     this.count--
//   }
// }
//提供了一个RedPackage的类，初始化时传入红包金额和个数，需要实现一个openRedPackage方法，每调一次都进行一次“抢红包”，并以console.log的形式输出抢到的红包金额。
// class newRedPackage {
//   money = 0
//   count = 0
//   _remain = 0
//   constructor(money, count) {
//     this.money = money
//     this.count = count
//     this._remain = money
//   }
//   // 思路，先不考虑极端情况，直接开抢
//   openRedPackge() {
//     //  剩余次数抢一次少一次
//     // 因为每次都要降低比例所以，要剩余的钱在除以总钱数在乘以一个系数
//     const money =
//       this.money * Math.floor(Math.random(), 2) * (this._remain / this.money)
//     this._remain = this._remain - money
//     const minimum = this.count * 0.01
//     // 然后在看看钱够不够分,不够分就给钱减少一点
//     if (this._remain < minimum) {
//       this._remain = this._remain - minimum
//     } else {
//     }
//     this.count--
//     console.log(money)
//   }
// }

//【代码题】数字转字符串

//样例输入：1234567890
//样例输出：1,234,567,890

// const numtostr = (num) => {
//   let str = num + ''
//   const res = []
//   for (var i = 0; i < str.length; i++) {
//     if (i % 3 == 1) {
//       res.push(',')
//     }
//     res.push(str[i])
//   }
//   console.log(res)
// }
// numtostr(1234567890)
//样例输入：versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
//输出：['0.1.1', '0.302.1', '2.3.3', '4.3.4.5', '4.3.5']

function setversions(arr) {
  return arr.sort((a, b) => {
    const arr1 = a.split('.')
    const arr2 = b.split('.')
    let max = arr1.length > arr2.length ? arr1.length : arr2.length
    for (var i = 0; i < max; i++) {
      if (arr1[i] > arr2[i]) {
        return -1
      } else if (arr1[i] < arr2[i]) {
        return 1
      }
    }
  })
}

// console.log(
//   setversions(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']),
// )

// sort 解决问题
////  最害怕这种题目了，总是想不明白，一开始说了结果是3，后来面试官让我再想想
//  仔细缕了一下后发现，fn() 里的函数声明虽然会提前，但不会提前到最外层，只会到 fn() 的顶层
//  里面的 foo = 3 修改的其实是里面函数的那个声明，不会影响到外部，所以最终的结果应该是 1
// var foo = 1
// function fn() {
//   foo = 3
//   // 声明提前给提升到作用域的顶部
//   function foo() {
//     // todo
//   }
//   return
// }
// fn()
// console.log(foo)

//输入：nums = [5,7,7,8,8,10], target = 8
// function getTarget(arr, target) {
//   // 用二分法求解，找一个中位数
//   // 所谓二分法用其实就是从中间或者从哪里掰开
//   // 所以我们只需要动态的赋值就可以了，这样别人说的，二分法从哪开始查找，我们就知道是从前向后查找
//   // 因为，我们虽然肉眼可见的从哪里开始，但是程序不知道，所以我们还需要自行查找
//   let start = 0
//   let end = arr.length - 1

//   while (start < end + 1) {
//     let mid = Math.floor(start + end / 2)
//     if (arr[mid] < target) {
//       start = mid
//     } else {
//       end = mid
//     }
//   }
// }
const findLast2 = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  while (right > left + 1) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  console.log(right, left)
  if (nums[right] === target) {
    return right
  }
  if (nums[left] === target) {
    return left
  }
  return -1
}
// findLast2([5, 7, 7, 8, 8, 8, 10], 8)
class RedPackage {
  money = 0
  count = 0
  _remain = 0

  constructor(money, count) {
    this.money = money
    this.count = count
    this._remain = money
  }

  openRedPackge() {
    // 获取比例 ，要根据剩余钱得多少，要再次稀释比例
    const proportion = Math.random() * (this._remain / this.money)
    // 要出去的钱
    let money = this.money * proportion
    // 剩余的钱
    let Remaining = this._remain - money
    // 如果剩下的钱不够分的得处理
    // 看看剩余还需要多少钱
    const must = this.count * 0.01
    // 如果钱不够了
    if (Remaining < must) {
      money = this._remain - must
      // 剩下的钱
      this._remain = must
    } else {
      this._remain = Remaining
    }

    this.count--
    // //  已经抢完了
    // if (this.count <= 0) {
    //   console.log('红包已经被抢完啦~')
    //   return
    // }

    // //  只剩一个红包
    // if (this.count === 1) {
    //   this.count--
    //   console.log(this._remain)
    //   return
    // }

    // const ratio = Math.random() * (this._remain / this.money)
    // //  这里会涉及到一个JS计算精度的问题
    // //  正常应该用第三方库或者字符串算法实现一个精准的加减乘除
    // //  这里为了简单就这么直接做了
    // let youGet = (this.money * ratio).toFixed(2)
    // const tempRemain = +(this._remain - youGet).toFixed(2)
    // const allLeast = this.count * 0.01

    // //  如果剩余的金额不够每人一分钱，那么需要减少本次获得的金额

    // if (tempRemain < allLeast) {
    //   youGet = +(this._remain - allLeast).toFixed(2)
    //   console.log('ceshi' + youGet)
    //   // console.log(youGet, tempRemain, this._remain, allLeast)
    //   this._remain = allLeast
    // } else {
    //   this._remain = tempRemain
    // }
    // console.log(youGet)
    // this.count--
  }
}

// const a = new RedPackage(100, 10)
// a.openRedPackge()
// a.openRedPackge()
// a.openRedPackge()
// a.openRedPackge()
// a.openRedPackge()
// a.openRedPackge()
// a.openRedPackge()
// a.openRedPackge()
// a.openRedPackge()
// a.openRedPackge()

//给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。返回容器可以储存的最大水量。

//查找多个字符串中最长公共前缀

const profix = (arr) => {
  let fix = ''
  for (var i = 0; i < arr[0].length; i++) {
    // let isOverlap = true
    const a = arr[0][i]
    fix += a
    for (var j = 1; j < arr.length; j++) {
      if (a != arr[j][i]) {
        console.log(fix.slice(0, i))
        return fix.slice(0, i)
      }
    }
  }
}

const profix1 = (arr) => {
  let fix = ''
  for (var i = 0; i < arr[0].length; i++) {
    // 主要思想遍历字母就行
    // 然后再遍历数组，发现一旦不一样，那就说明有不一样了，
    let s = arr[0][i]
    for (var j = 0; j < arr.length; j++) {
      if (s != arr[i][j]) {
        return fix.slice(0, i)
      }
    }
  }
}

// profix(['abcdef', 'abdefw', 'abc'])

// 反转链表

// function reverseList(head) {
//   let prev = null
//   let curr = head
//   while (curr) {
//     curr.next.next = curr
//     prev = curr
//     curr = curr.next
//   }
//   return prev
// }

const mypromise = (arr) => {
  return new Promise((resolve, reject) => {
    let anwser = []
    let count = 1
    for (let i = 0; i < arr.length; i++) {
      arr[i].then((res) => {
        anwser[i] = res
        count++
        if (count == arr.length) {
          resolve(anwser)
        }
      })
    }
  })
}
// 1=>2=>3=>4=>5
function reverseList(head) {
  let prev = null
  let curr = head
  while (curr) {
    // curr.next.next = curr
    // prev = curr
    // curr = curr.next
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}
// 重写反转链表

function reverseList1(head) {
  // 这个反转链表的本质是什么，就是给当前的顺序翻回来
  let prev = null
  let curr = head
  while (curr) {
    // 先存一个 next
    const next = curr.next
    // 给赋值给当前的这个 next 上一个选项
    curr.next = prev
    // 赋值完了就是开始下一个了，这时候就是 之前保存的 next 就是 prve
    prev = curr
    // 然后prev就变成 curr
    curr = next
  }
  // 如果没有了那就表示 prve 就是最有一个了，但是同事他也是反转后的第一个
  return prev
}

//给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。返回容器可以储存的最大水量。
//1 (0,0) ()
// const maxArea = (height) => {
//   // 双指针夹逼
//   let left = 0
//   let right = height.length
//   let answer = 0
//   while (left < right) {
//     answer = Math.max(
//       answer,
//       Math.min(height[left], height[right]) * (right - left),
//     )
//     if (height[left] < height[right]) {
//       left++
//     } else {
//       right--
//     }
//   }
// }

//样例输入：s = "3[a2[c]]"
//样例输出：accaccacc
//有一个数组 [[1, 2, 3], [4, 5, 6], [-1, 12, 13], [6, 18, 0], [5, 5, 5], [6, 9, 3]],找出其中和最大的三个子数组
// const arr = [
//   { id: 12, parent_id: 1, name: '朝阳区' },
//   { id: 241, parent_id: 24, name: '田林街道' },
//   { id: 31, parent_id: 3, name: '广州市' },
//   { id: 13, parent_id: 1, name: '昌平区' },
//   { id: 2421, parent_id: 242, name: '上海科技绿洲' },
//   { id: 21, parent_id: 2, name: '静安区' },
//   { id: 242, parent_id: 24, name: '漕河泾街道' },
//   { id: 22, parent_id: 2, name: '黄浦区' },
//   { id: 11, parent_id: 1, name: '顺义区' },
//   { id: 2, parent_id: 0, name: '上海市' },
//   { id: 24, parent_id: 2, name: '徐汇区' },
//   { id: 1, parent_id: 0, name: '北京市' },
//   { id: 2422, parent_id: 242, name: '漕河泾开发区' },
//   { id: 32, parent_id: 3, name: '深圳市' },
//   { id: 33, parent_id: 3, name: '东莞市' },
//   { id: 3, parent_id: 0, name: '广东省' },
// ]
// const arrayToTree = (arr) => {
//   // 首先我的思路是找到id 对应的爹存起来
//   var map = {}
//   var newarr = []
//   for (var i = 0; i < arr.length; i++) {
//     map[arr.id] = arr.parent_id
//   }
//   for (var j = 0; j < arr.length; j++) {
//     if (map[arr[j].id]) {
//       arr[j].child.push(arr[j])
//     } else {
//       newarr.push(arr[j])
//     }
//   }
// }

// const arrayToTree1 = (arr) => {
//   const arr = []
//   const map = {}
//   for (item of arr) {
//     const { id, parent_id } = item
//     if (!map[id]) {
//       map[id] = {}
//     }
//     // 如果有 children 说明儿子已经存进去了
//     map[id] = map[id].children
//       ? { ...item, children: map.id.children }
//       : { ...item }

//     if (parent_id) {
//       map[parent_id].children.push(item)
//     } else {
//       tree.push(time)
//     }
//   }
// }
//有一个数组 [[1, 2, 3], [4, 5, 6], [-1, 12, 13], [6, 18, 0], [5, 5, 5], [6, 9, 3]],找出其中和最大的三个子数组

// const search = (arr) => {
//   // 利用空数组的能力是，往里头塞进去三个数
//   var a = [arr[0]]
//   for (var i = 1; i < arr.length; i++) {
//     if (arr.length < 3) {
//       if (arr[i] < a[0]) {
//         a.unshift(i)
//       } else {
//         a.push(i)
//       }
//     } else {
//     }
//   }
// }

// function lengthOfLongestSubstring(str) {
//   const arr = []
//   let length = 0
//   for (var i = 0; i < str.length; i++) {
//     if (arr.includes(i)) {
//       const index = arr.findIndex((item) => {
//         item == str[i]
//       })
//       arr.splice(0, index + 1)
//     }
//     arr.push(str[i])

//     length = Math.max(length, arr.length)
//   }
// }
// 暴力破解
// const longestPalindrome = (str) => {
//   const isPalindrome = (child) => {
//     return child.split('').reverse().jion(',')
//   }
//   let long = ''
//   let new1 = ''
//   for (var i = 0; i < str.length; i++) {
//     new1 = ''
//     for (var j = i; j < str.length - i; j++) {
//       new1 += str[j]
//       if (isPalindrome(new1) == new1) {
//         long = long.length > new1.length ? long : new1
//       }
//     }
//   }
// }
//中心扩展函数

//本题主函数
// function longestPalindrome(s) {
//   function search(s, l, r) {
//     let left = l
//     let right = r
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       left--
//       right++
//     }
//   }
//   var start = (end = 0)
//   for (let i = 0; i < s.length; i++) {
//     let len1 = search(s, i, i)
//     let len2 = search(s, i, i + 1)
//     let len = Math.max(len1, len2)
//     if (len > end - start) {
//       start = i - Math.floor((len - 1) / 2)
//       end = i + Math.floor(len / 2)
//     }
//   }
//   console.log(s.slice(start, end + 1))
// }

// function longestPalindrome(str) {
//   function search(str, l, r) {
//     while (l >= 0 && r < str.length && str[l] === str[r]) {
//       l--
//       r++
//     }
//     return [l + 1, r - 1]
//   }
//   let max = ''
//   // 遍历的时候散开已中心点散开，并且有单个中心点，和多个中心点的请款
//   for (let i = 0; i < str.length; i++) {
//     // 单个中心的
//     const len = search(str, i, i)
//     // 两个中心
//     const len1 = search(str, i, i + 1)
//     const len2 = len[1] - len[0] > len1[1] - len1[0] ? len : len1
//     const new1 = str.slice(len2[0], len2[1] + 1)
//     max = new1.length > max ? new1 : max
//   }
//   console.log(max)
//   // return str.splice(start, end)
// }
// longestPalindrome('ababbad')

// function findThreeLargestIndices(arr) {
//   let largestIndices = []
//   for (let i = 0; i < arr.length; i++) {
//     if (largestIndices.length < 3 || arr[i] > arr[largestIndices[0]]) {
//       largestIndices.unshift(i) // 添加到数组前面，保持顺序
//       if (largestIndices.length > 3) {
//         largestIndices.pop() // 移除数组最后一个元素
//       }
//     }
//   }
//   return largestIndices
// }

// // 示例使用
// let arr1 = [4, 10, 3, 5, 1, 4, 2]
// const indices = findThreeLargestIndices(arr1)
// console.log(indices) // 输出最大的三个数的下标

// const findThreeLargestIndices = (arr) => {
//   var max = 0
//   var max1 = 0
//   var max2 = 0
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[max] < arr[i]) {
//       max1 = max
//       max2 = max1
//       max = i
//     } else if (arr[max1] < arr[i]) {
//       max2 = max1
//       max1 = i
//     } else if (arr[max2] < arr[i]) {
//       max2 = i
//     }
//   }
//   console.log(max, max1, max2)
// }
// arr1 = [4, 10, 3, 5, 1, 4, 2]
// findThreeLargestIndices(arr1)
// 无重叠子数组的最大和

//样例输入：s = "3[a2[c]]"
//样例输出：accaccacc

const output = (ss) => {
  var str = ''
  var arr1 = []
  var arr2 = []
  for (let j = 0; j < ss.length; j++) {
    // console.log('i-' + j)
    if (!isNaN(Number(ss[j]))) {
      arr1.push(ss[j])
    } else if (isNaN(Number(ss[j])) && ss[j] != '[' && ss[j] != ']') {
      arr2.push(ss[j])
    } else if (ss[j] == ']') {
      let newstr = arr2.pop() + str
      str = ''
      let num = arr1.pop()
      let content = ''
      for (let i = 0; i < Number(num); i++) {
        //console.log('i-' + i)
        content += newstr
      }
      str = content + str
    }
  }
  console.log(str)
}
// output('3[a2[c]]')

// function aaa() {
//   for (var i = 0; i < 4; i++) {
//     console.log('i-' + i)
//     if (i == 2) {
//       for (var j = 0; j < 5; j++) {
//         console.log('j-' + j)
//       }
//     }
//   }
// }
// aaa()

// 输入：nums = [3,30,34,5,9]
//输出："9534330"
// //示例 3：
// function maxNum(nums) {
//   // 相当于是动态规划，两个比较的时候最大的是,给两个拼一块，当然是大的好啊，然后给所有的大的都一排列
//   // 就会变成总的最大
//   nums
//     .sort((a, b) => {
//       return a + '' + b - (b + '' + a)
//     })
//     .join(',')
// }
// nums = [2, 2, 2, 2, 2]
const findLengthOfLCIS = (nums) => {
  const dp = []
  for (var i = 0; i < nums.length; i++) {
    // 最低是 1
    dp[i] = 1
    for (var j = i; j < i; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
}
// findLengthOfLCIS(nums)

//找出字符串中连续出现最多的字符和个数
//'abcaakjbb' => {'a':2,'b':2}
//'abbkejsbcccwqaa' => {'c':3}

const getStrMaxLengthObj = (str) => {
  // var answer = {}
  // var currcount = 0
  // var maxcount = 0
  // for (var i = 0; i < str.length; i++) {}
  if (!str) return {}
  let count = 0
  let maxCount = 0
  let cur = str[0]
  let res = {}
  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    if (s === cur) {
      count++
      if (count > maxCount) {
        res = { [s]: count }
        maxCount = count
      }
      if (count === maxCount) {
        res[s] = count
      }
    } else {
      count = 1
      cur = s
    }
  }
  return res
}

//var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

//编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

// const toarr = (arr) => {
//   Array.from(new Set(arr.flat(infinity))).sort()
// }

// var b = 10
// ;(function b() {
//   b = 20
//   console.log(b)
// })()
//随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。

// const towDArray = (arr) => {}

// // 得到一个两数之间的随机整数，包括两个数在内
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min)
//   max = Math.floor(max)
//   return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
// }
// // 随机生成10个整数数组, 排序, 去重
// let initArr = Array.from({ length: 10 }, (v) => {
//   return getRandomIntInclusive(0, 99)
// })
// initArr.sort((a, b) => {
//   return a - b
// })
// initArr = [...new Set(initArr)]

// // 放入hash表
// let obj = {}
// initArr.map((i) => {
//   const intNum = Math.floor(i / 10)
//   if (!obj[intNum]) obj[intNum] = []
//   obj[intNum].push(i)
// })

// // 输出结果
// const resArr = []
// for (let i in obj) {
//   resArr.push(obj[i])
// }
// console.log(resArr)

//找出字符串中连续出现最多的字符和个数
//'abcaakjbb' => {'a':2,'b':2}
//'abbkejsbcccwqaa' => {'c':3}
// function findLongest(str) {
//   if (!str) return
//   let count = 0
//   let maxcount = 0
//   let curr = ''
//   let res = {}
//   for (var i = 0; i < str.length; i++) {
//     const s = str[i]
//     if (curr == s) {
//       // 之所以要这样，是为了解决有两个字母一样的情况
//       if (count > maxcount) {
//         res = { [s]: count }
//       }
//       if (count == maxcount) {
//         res[s] = count
//       }
//     } else {
//       curr = s
//       count = 1
//     }
//   }
// }

// findLongest('abbkejsbcccwqaa')
// 请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
function concat(arr1, arr2) {
  // 这个问题的思路，首先应该以第二个为准，然后去遍历，在第一个里头找
  var res = arr2.shift()
  var answer = []
  for (var i = 0; i < arr1.length; i++) {
    // console.log(arr1[i + 1])
    if (arr1[i].indexOf(res) > -1) {
      console.log(arr1[i + 1].indexOf(res))
      if (arr1[i + 1] && !arr1[i + 1].indexOf(res) > -1) {
        answer.push(res)
      } else if (!arr1[i + 1]) {
        answer.push(res)
      }
      res = arr2.shift()
    }
    answer.push(arr1[i])
  }
  console.log(answer)
}

// concat(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], ['A', 'B', 'C', 'D'])

// 求多个数组交集

// const intersection = (...arrs) => {
//   arrs.reduce((total, arr) => {
//     console.log(total)
//     // item.filter((i) => item1.includes(i))
//     return arr.filter((i) => total.includes(i))
//   })
// }
// const intersection = (...arrs) => {
//   // 拿到第一个和第二个的值然后去比较
//   let res = []
//   for (var i = 0; i < arrs.length - 1; i++) {
//     let res1 = []
//     for (var t = 0; i < arrs[i + 1].length; i++) {}
//     // 第一次如果 res 没有值，那么就比较前两个数组
//     if (res.length) {
//       if (arrs[i].includes(arr[i + 1][t])) {
//         res1.push(arr[i + 1][t])
//       }
//     } else {
//       if (res.includes(arr[i + 1][t])) {
//         res1.push(arr[i + 1][t])
//       }
//     }
//     res = res1
//   }
//   return res
// }
// intersection([2, 1, 6], [6, 3], [6, 5])

// 例如 ’AbC' 变成 'aBc'

const processString = (str) => {
  return str
    .split('')
    .map((item) => {
      return item === item.toUpperCase()
        ? item.toLowerCase()
        : tem.toUpperCase()
    })
    .join(',')
}

//
const cvtNum = (digit) => {}

//loadsh.get
// function get(obj, key) {
//   var newkey = key.replace(/\[(\d+)\]/, '.$1').split('.')
//   let answer = ''
//   for (var i = 0; i < newkey.length; i++) {
//     answer = obj[newkey[i]]
//   }
//   return answer
// }

//计算二叉树的最大深度

//岛屿的最大面积
grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]
function maxAreaOfIsland(grid) {
  // 这道题要用深度优先遍历做
  const row = grid.length
  const col = grid[0].length
  const dfs = (i, j) => {
    let count = 0
    if (i >= 0 && j >= 0 && i < row && j < col && grid[i][j] === 1) {
      count++
      count += dfs(i - 1, j)
      count += dfs(i, j - 1)
      count += dfs(i + 1, j)
      count += dfs(i, j + 1)
    }
    return count
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 等于一的时候在走遍历，防止0白白浪费时间
      if (grid[i][j] === 1) {
        dfs(i, j)
      }
    }
  }
  return count
}

//最大子数组和
//给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
//输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
//输出：6
//解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
const MaxSubSum3 = (arr) => {
  // // 贪心算法
  // let count = 0
  // let max = 0
  // for (var i = 0; i < arr.length; i++) {
  //   count += nums[i]
  //   if (count > max) {
  //     max = count
  //   }
  //   if (count < 0) {
  //     count = 0
  //   }
  // }
  // 动态规划
}
//最长回文子串
const Palindrome = (str) => {
  const search = (left, right, str) => {
    const arr = [left, right]
    while (left == right && left >= 0 && right < str.length) {
      arr[0] = left
      arr[1] = right
      left--
      right++
    }
    return arr
  }
  const max = [0, 0]
  for (var i = 0; i < str.length; i++) {
    // 思路就是从头去找，并且找到一个中心点，和两个中心点 ,然后从中心点扩散
    const len1 = search(i, i, str)
    const len2 = search(i, i + 1, str)
    const length1 = len1[1] - len1[0]
    const length2 = len2[1] - len2[0]
    const newMax = length2 > length1 ? len2 : len1
    max = max[1] - max[0] > newMax ? newMax : max
  }
  return str.slice(max[0], max[2] + 1)
}

//K 个一组翻转链表

//计算二叉树的最大深度

// const tree = (node) => {
//   if (node == null) {
//     return 0
//   }
//   if (node.left == null && node.right == null) {
//     return 0
//   }
//   // 有一侧的情况
//   if (node.right == null) {
//     return 1 + tree(node.left)
//   }
//   if (node.left == null) {
//     return 1 + tree(node.right)
//   }
//   // 两侧都有的情况
//   const left = tree(node.left)
//   const right = tree(node.right)
//   return Math.max(left, right)
// }

//random实现返回一个长度为num 元素值在[min, max]区间的整数数组

function random_num(arr, num) {
  const Range = arr[1] - arr[0]
  const newarr = new Array(num).fill(1).map((_) => {
    return Math.round(Math.random() * Range + arr[0])
  })
  console.log(newarr)
}

// random_num([10, 30], 5)

const debounce = (fn, delay) => {
  // 防抖函数就是定时器版本
  let timmer = null
  return (...arg) => {
    if (timmer) clearTimeout(timmer)
    timmer = setTimeout(() => {
      fn.apply(this, ...arg)
    }, delay)
  }
}

const throttle = (fn, delay) => {
  let timmer = null
  return (...arg) => {
    if (timmer) {
      timmer = false
      fn(...arg)
      setTimeout(() => {
        timmer = true
      }, delay)
    }
  }
}

// var foo = function (...args) {} // 要求实现函数体
// var f1 = foo(1, 2, 3)
// f1.getValue() // 6 输出是参数的和
// var f2 = foo(1)(2, 3)
// f2.getValue() // 6
// var f3 = foo(1)(2)(3)(4)
// f3.getValue() // 10
// function foo(...args) {
//   const target = (...arg1s) => foo(...[...args, ...arg1s])
//   target.getValue = () => args.reduce((p, n) => p + n, 0)
//   return target
// }

// 把数组平分，实现 fn
// const fn = (arr, num) => {
//   let result = []
//   let subarray = []
//   for (let i = 0; i < arr.length; i++) {
//     subarray.push(arr[i])
//     if (subarray.length == num || (i == arr.leng - 1 && subarray.length)) {
//       result.push(JSON.parse(JSON.stringify(subarray)))
//       subarray = []
//     }
//   }
//   return result
// }
// fn([1, 2, 3, 4, 5], 2)

// 实现 get 方法
var obj = { a: { b: { c: 2 } } }
const newget = (obj, str) => {
  let newobj = obj
  const arr = str.replace(/(\[\d+\])/, '.$1').split('.')
  for (let i = 0; i < arr.length; i++) {
    newobj = newobj[arr[i]]
  }
  return newobj
}

console.log(newget(obj, 'a.b.c')) // 输出 2

// 找出字符串中连续重复次数最多的字符，输出该字符，开始位置，结束位置
const repeat = (str) => {
  let maxposition = [0, 1]
  let s = str[0]
  let position = [0, 1]
  for (let i = 1; i < str.length; i++) {
    if (str[i] == s) {
      position[1] = i
    } else {
      s = str[i]
      curr = 1
      position = [i, i + 1]
    }
    maxposition =
      maxposition[1] - maxposition[0] > position[1] - position[0]
        ? maxposition
        : position
  }
  console.log(maxposition)
  return maxposition
}

// repeat('bsssssssbssseeee')

// var template = "{{name}}很厉害，才{{age}}岁"
//var context = {name:"bottle",age:"15"}
//输入：template context
//输出：bottle很厉害，才15岁

const render = (template, content) => {
  // 使用非贪婪匹配
  const reg = /\{\{(.*?)\}\}/g
  template.replace(reg, (match, $1) => {
    return content[$1]
  })
  return template
}

// 截取地址栏

const getUrl = (url) => {
  // ?a=b&c=1
  const reg = /([^?&=])=([^&])/g
}

//给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
//输出: [3,3,5,5,6,7]
// var nums = [1, 3, -1, -3, 5, 3, 6, 7]
var maxSlidingWindow = (nums, K) => {
  let max = []
  for (var i = 0; i < nums.length - K + 1; i++) {
    var winArr = [nums[i], nums[i + 1], nums[i + 2]]
    max[i] = Math.max(...winArr)
  }
  console.log(max)
}
// maxSlidingWindow(nums, 3)

// 输入："abbbaca"
//输出："ca"
//解释："abbbaca" => "aaca"=>"ca"

// var removeDuplicates = (str, k) => {
//   const stack = []
//   for (s of str) {
//     let prve = stack.pop()
//     if (!prve || prve[0] !== s) {
//       stack.push(prve)
//       stack.push(s)
//     } else if (prve.length <= k) {
//       stack.push(prve + s)
//     }
//   }
//   console.log(stack)
// }
// removeDuplicates('abbbaca', 3)
// var removeDuplicates = function (s, k) {
//   var stack = []
//   for (c of s) {
//     let prev = stack.pop()
//     // 他第一次进来，后面就不校验了
//     // 相当于是如果没有值，那就是返回 true ，或者有值第一个返回 false 在校验第二个
//     // 第二个不等于的时候，就塞进去
//     if (!prev || prev[0] !== c) {
//       stack.push(prev)
//       stack.push(c)
//     } else if (prev.length < k - 1 || prev[0] === s[i + 1]) {
//       // 否则拼接上去
//       // 由于之前已经取出来了，所以，在装上去还是原来的位置
//       stack.push(prev + c)
//     }
//   }
//   console.log(stack)
// }
// removeDuplicates('abbbaca', 2)

var removeDuplicates = function (s, k) {
  let stock = []
  for (let i = 0; i < s.length; i++) {
    let prev = stock.pop()
    if (!prev || prev[0] !== s[i]) {
      // 取第一个字符比较
      stock.push(prev)
      stock.push(s[i])
    } else if (prev.length < k - 1 || prev[0] === stock[i + 1]) {
      // 如果长度达不到删除数量 或者与下一个字符相同则继续累加
      // 之所以与下一个想听的情况下也不累家，是为了干掉消掉了前面的之后，剩余独一份，就不能在累加了
      console.log(prev + s[i])
      stock.push(prev + s[i]) // 相同字符拼接在一起
    }
  }
  console.log(stock)
}
// removeDuplicates('abbbaca', 2)

// 时间复杂度: O(n), n 为字符的个数
// 空间复杂度: O(n), 栈所用的空间

/**
 * 删除字符串中出现次数 >= 2 次的相邻字符
 * @param {string}s
 */
function removeDuplicate(s) {
  const stack = [] // Space: O(n)
  let top
  let next
  let i = 0
  while (i < s.length) {
    // Time: O(n)
    top = stack[stack.length - 1]
    next = s[i]
    if (next === top) {
      // 字符串中出现了相邻字符
      // 1. 移除栈顶字符
      // 2. 移动指针, 指向下一个不同的字符
      stack.pop()
      while (s[i] === top) i += 1
    } else {
      stack.push(next)
      i += 1
    }
  }

  return stack.join('') // Time: O(n)
}

// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

let permute = (nums) => {
  // 全排列 回溯算法
  const answer = []
  const dfs = (arr) => {
    if (arr.length == nums.length) {
      answer.push(arr.slice())
    }
    for (var i = 0; i < nums; i++) {
      // 因为三个数字不能一样，所以，要有一个防止重复的机会
      if (arr.includes(nums[i])) {
        continue
      }
      arr.push(nums[i])
      dfs(arr)
      arr.pop()
    }
  }
  dfs([])
}
// permute([1, 2, 3])

// 这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：
//a) 生成一个长度为5的空数组arr。
//b) 生成一个（2－32）之间的随机整数rand。
//c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
//d) 最终输出一个长度为5，且内容不重复的数组arr。

const getarr = () => {
  const arr = new Array(5).fill(null)
  let index = 0
  const recursion = () => {
    if (index == 4) {
      return
    }
    const num = Math.floor(Math.random() * (32 - 2) + 2)
    if (!arr.indexOf(num)) {
      arr[index] = num
      index++
    }
    recursion()
  }
  recursion()
}

/**
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

示例 1 :

输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
说明 :

数组的长度为 [1, 20,000]。
数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 */

// const subarraySum = (nums, K) => {
//   let n = 0
//   let stack = []
//   let answer = []
//   for (var i = 0; i < nums.length; i++) {
//     n = n + nums[i]
//     if (n == K) {
//       answer.push(stack.slice())
//       stack = []
//     } else {
//       stack.push(nums[i])
//     }
//   }
//   console.log(answer)
// }
// subarraySum(nums, 2)

// var subarraySum = function (nums, k) {
//   // let result = 0
//   // // 暴力解
//   // for (let i = 0; i < nums.length; i++) {
//   //   let current = i
//   //   let res = k - nums[i]
//   //   while (current < nums.length) {
//   //     if (res === 0) {
//   //       result++
//   //     }
//   //     current++
//   //     res -= nums[current]
//   //   }
//   // }
//   // return result
//   // 暂时双重 for 循环暴力解法
//   let res = 0
//   for (var i = 0; i < nums.length; i++) {
//     // 主要就是找到这个目标之后，往后继续找，直到找到
//     let ans = k - nums[i]
//     let curr = i
//     // 这就是找到之后往后继续找
//     while (curr < nums.length) {
//       if (ans == 0) {
//         res++
//       }
//       curr++
//       ans -= nums[curr]
//     }
//   }
//   console.log(res)
// }

// subarraySum(nums, 2)

//给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

//请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
const firstMissingPositive1 = (nums) => {
  // 这个题的思路，我们需要把对应的值放在对应的位置上，然后遍历，遍历的思路，发现这个位置上的值不对，那么就直接取这个位置的值就指定是最小的
  for (let i = 0; i < nums.length; i++) {
    // 开始换位置 首先负数咱就不动心思换位置了,超过 length 的也不换了，没必要，因为指定有比他小的
    // 元素与对应下标不一样的时候  其实就是杜绝下标已经在正确的位置上的情况
    // while 就是为了继续换，直到当前的这个位置，交换的都换对了位置
    while (
      nums[i] > 0 &&
      nums[i] < nums.length &&
      nums[i] !== nums[num[i] - 1]
    ) {
      let temp
      temp = nums[i]
      nums[i] = nums[nums[i] - 1]
      nums[nums[i] - 1] = temp
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i] - 1) {
      return i + 1
    }
  }
  // 如果都找不到的话，说明前头都沾满了，取最后一个就行

  return nums.length + 1
}

// var firstMissingPositive = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     while (
//       nums[i] > 0 &&
//       nums[i] <= nums.length &&
//       nums[i] !== nums[nums[i] - 1]
//     ) {
//       ;[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
//     }
//   }
//   console.log(nums)
//   let result = nums.length + 1
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       console.log(i + 1)
//       return i + 1
//     }
//   }
//   console.log(result)
// }
// firstMissingPositive([
//   -3, 9, 16, 4, 5, 16, -4, 9, 26, 2, 1, 19, -1, 25, 7, 22, 2, -7, 14, 2, 5, -6,
//   1, 17, 3, 24, -4, 17, 15,
// ])

// 爬楼梯问题
// 主要就是记住动态规划的套路

// const climbStairs = (n) => {
//   const dp = [1, 2]
//   for (var i = 2; i < n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }
//   return dp[n - 1]
// }

/**
 *
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
*/

const removeDuplicates1 = (nums) => {
  // 这个题就很有意思，主要就是要前一个和后一个去比较，发现不行去删除后一个，这样一来 length 要正常，虽然删了，但是总 lenth 要不能变，
  // 因为要给所有的元素遍历完事，多余的干掉
  let length = nums.length
  // 之所以要从 1 开始，是为了让这个跟前一个去比
  // 因为不能大于二，所以他默认是又有一个的
  let curr = 1
  let index = 1
  for (let i = 1; i < length; i++) {
    if (nums[index] === nums[index - 1]) {
      // 说明是有重复的了，那么就要记录一下重复的数量
      curr++
      // 如果重复数量超了就可以删除了
      if (curr > 2) {
        nums.splice(index, 1)
        //删除了以后，要回退，方便下一个 for 循环的时候再次比较，如果还不行，就还删除
        curr--
        index--
      }
    } else {
      // 如果不一样，那么就从头开始
      curr = 1
    }
    // 每次都得定位到下一个，位置，但又不是他真真的下标位置
    index++
  }
  return nums
}
// var removeDuplicates1 = function (nums) {
//   const length = nums.length
//   let cur = 1
//   let index = 1
//   for (let i = 1; i < length; i++) {
//     if (nums[index] === nums[index - 1]) {
//       cur++
//       if (cur > 2) {
//         nums.splice(index, 1)
//         index--
//         cur--
//       }
//     } else {
//       cur = 1
//     }
//     index++
//   }
//   return nums
// }
// console.log(
//   removeDuplicates1([0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3]),
// )

// 给定一个链表，判断链表中是否有环。

// let hasCycle = (head) => {
//   // 这道题，用快慢指针的思路
//   let slow = head.next
//   let fast = head.next.next
//   while (slow && fast) {
//     if (slow == fast) {
//       return true
//     }
//     slow = head.next
//     fast = head.next.next
//   }
//   return false
// }

// 最长回文子串

// const Palindrome1 = (str) => {
//   // 首先得有个函数去获取回文的，所以
//   const search = (left, right, str) => {
//     const arr = [left, right]
//     while (
//       left <= right &&
//       left > 0 &&
//       right < str.length &&
//       str[left] == str[right]
//     ) {
//       arr[0] = left
//       arr[1] = right
//       left--
//       right++
//     }
//     return arr
//   }
//   let max = ''
//   for (var i = 0; i < str.length - 1; i++) {
//     // 中心点为一个的情况
//     const num1 = search(i, i, str)
//     // 中心点为两个的情况
//     const num2 = search(i, i + 1, str)
//     const length1 = num1[1] - num1[0]
//     const length2 = num2[1] - num2[0]
//     const maxLength = max[1] - max[0]
//     const newMax = length2 > length1 ? len2 : len1
//     max = newMax > maxLength ? max : newMax
//   }
//   return str.slice(max[0], max[2] + 1)
// }

// Palindrome1('ababbad')

// const myPromiseall = (arr) => {
//   // 主要就是利用闭包，解决问题
//   return new Promise((r, j) => {
//     const result = []
//     const newindex = 0
//     arr.forEach((item, index) => {
//       item.then((res) => {
//         result[index] = res
//         newindex++
//         if (newindex == arr.length - 1) {
//           r(result)
//         }
//       })
//     })
//   })
// }

// 写一个前序遍历

// 手写一个myReducer,其实就是利用 foreach

// const myReducer = (arr, fn, init) => {
//   let result = init
//   arr.forEach((item, index) => {
//     result = fn(result, item, index)
//   })
//   return result
// }
// myReducer(
//   [],
//   (result, item, index) => {
//     return result + item
//   },
//   init,
// )
// const nums = [1, 1, 1]
const subarraySum = (nums, K) => {
  // 这个题什么思路呢？ 其实很简单，
  // 就是我遍历到这里，然后配对，看看后头还有多少
  let num = 0
  let index = 0
  for (var i = 0; i < nums.length; i++) {
    let res = (k = nums[i])
    indx = i
    while (index < nums.length) {
      if (res == 0) {
        num++
      }
      // 因为有负数的情况 所以可以继续往后找，这样就可以找到后续的，所有的
      res = res - nums[i]

      index++
    }
  }
}

//给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

//如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

// var increasingTriplet = (nums) => {
//   // 如果小于 3 指定是不行了，所以指定是 false
//   if (nums.length < 3) return false
//   // 用贪心算法，解决问题，只要找到比第二个大的就行
//   let first = nums[0]
//   let second = nums[0]
//   for (var i = 1; i < nums.length; i++) {
//     if (nums[i] > first) {
//       second = nums[i]
//     } else if (nums[i] > second) {
//       return true
//     } else {
//       first = nums[i]
//     }
//   }
// }

//版本号排序
// var version = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// const sortVersion = (nums) => {
//   nums.sort((a, b) => {
//     aArr = a.split('.')
//     bArr = b.split('.')
//     const lenth = aArr.length < bArr.length ? bArr.length : aArr.length
//     for (let i = 0; i < lenth; i++) {
//       let num1 = aArr[i] || 0
//       let num2 = bArr[i] || 0
//       if (num1 > num2) {
//         return true
//       } else if (num1 < num2) {
//         return false
//       }
//     }
//   })
// }
// sortVersion(version)

// const sortVersion = (versions) => {
//   versions.sort((a, b) => {
//     const sa = a.split('.')
//     const sb = b.split('.')
//     const ha = sa.shift()
//     const hb = sb.shift()
//     // 去除多余的·用来比较数字，这确实是一个好的思路
//     console.log((hb + '.' + sb.join('')) * 1)
//     //console.log((hb + '.' + sb.join('')) * 1 - (ha + '.' + sa.join('')) * 1)
//     return (hb + '.' + sb.join('')) * 1 - (ha + '.' + sa.join('')) * 1
//   })
//   console.log(versions)
// }

// console.log(
//   sortVersion(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']),
// )

// 双版本号比较，去除多余小数点，然后再比较，就很完美

// const sortVersion = (a, b) => {
//   let v1 = a.split('.')
//   let v2 = a.splice('.')
//   let a1 = v1.shift()
//   let a2 = v2.shift()
//   let num1 = a1 + v1.join('') * 1
//   let num2 = a2 + v2.join('') * 1
//   if (num1 > num2) {
//     return 1
//   } else if (num1 < num2) {
//     return -1
//   } else {
//     return 0
//   }
// }
/* TODO: 20 二维数组组合 */
/*
给定任意二维数组，输出所有的排列组合项。 比如 [['A','B'], ['a','b'], ['1', '2']]，输出 ['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']
*/

// const composeArr = (arr) => {
//   // 这道题跟全排列类似，估计得用递归做,或者叫回朔算法
//   var res = []
//   const help = (arr1, str) => {
//     if (str.length == 3) {
//       return res.push(str)
//     }
//     const curr = [...arr1]
//     const [x, y] = curr.shift()
//     help(curr, str + x)
//     help(curr, str + y)
//   }
//   help(arr, '')
//   console.log(res)
// }
// composeArr([
//   ['A', 'B'],
//   ['a', 'b'],
//   ['1', '2'],
// ])

// 验证是否是回文字符串
const countSubstrings = (str) => {
  return str == str.split('').reverse().join('')
}

//给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。返回容器可以储存的最大水量。

const maxArea = (nums) => {
  // 这一题使用双指针来解决问题
  let left = 0
  let right = nums.length - 1
  area = 0
  //此时找到最大的面积就行
  while (left < right) {
    var area = Math.max(Math.min(nums[left], nums[right] * right - left), area)
    // 然后就开始找比他高的，如果不比他高，之后后续比他高，才有可能以当前这个为底，然后找到更大的面积
    if (nums[left] > nums[right]) {
      right--
    } else {
      left++
    }
  }
  return area
}
//maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])

// 抢红包

// class RedPackage {
//   money = 0
//   count = 0
//   _remain = 0
//   constructor(money, count) {
//     this.money = money
//     this.count = count
//     this._remain = money
//   }
//   onpackge() {
//     let answer = 0
//     // 如果等于 0 那么就不行代表红包抢完了
//     if (this.count == 0) {
//       console.log('红包抢完了')
//       return
//     }
//     // 否者就生成随机数，并且按照当前比例再去稀释
//     const ratio = Math.random() * (this._remain / this.money)
//     // 然后用这个钱，再去乘
//     const newMoney = (this._remain * ratio).toFixed(2)
//     // 然后看看剩余多少钱
//     const surplusmoney = this._remain - newMoney
//     console.log(newMoney)
//     const surplus = this.count * 0.01
//     if (surplusmoney > surplus) {
//       answer = newMoney
//       this._remain = surplusmoney
//     } else {
//     }
//   }
// }
// // 重写抢红包
// class redpackage {
//   constructor(money, count) {
//     this.money = money
//     this.count = count
//     this.currMoney = money
//   }
//   onpackge() {
//     let answer = 0
//     if (this.count === 0) {
//       console.log('抢完了')
//     }
//     if (this.count === 1) {
//       // 直接给剩余的钱给安排了
//       return this.currMoney
//       this.count--
//     }
//     // 给比例按照剩余金额再分配
//     let ratio = Math.random() * (this.currMoney / this.money)
//     let newMoney = (this.currMoney * ratio).toFixed(2)
//     // 然后看看还剩余多少钱
//     let balance = this.currMoney - newMoney
//     let smallbalance = this.count * 0.01
//     if (balance > smallbalance) {
//       answer = newMoney
//       this.currMoney = balance
//     } else {
//       answer = this.currMoney - smallbalance
//       this.currMoney = smallbalance
//     }
//     this.count--
//   }
// }
//实现一个并发请求控制函数function request(urls = [],limit =5, done=()=>{}){}

//最长公共子序列
// const longestCommonSubsequence = (text1, text2) => {
//   let dp = Array.from(Array(text1.length + 1), () =>
//     Array(text2.length + 1).fill(0),
//   )
//   console.log(dp)
//   for (let i = 1; i <= text1.length; i++) {
//     for (let j = 1; j <= text2.length; j++) {
//       // 如果当前的和现在的一样，说明要有公共子序列了
//       if (text1[i - 1] === text2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
//       }
//     }
//   }

//   console.log(dp[text1.length][text2.length])
// }
// longestCommonSubsequence('abcde', 'ace')
// 重写最长公共子序列
const longestCommonSubsequence = (text, text2) => {
  // 首先确定 dp 只要这个相等了，那么就给上头一个的+1
  // 首先生成默认
  const dp = Array.from(new Array(text.length + 1), () =>
    new Array(text2.length + 1).fill(0),
  )
  // 然后双重 for 循环开始 动态规划，找到一样的
  for (var i = 1; i <= text.length; i++) {
    for (var j = 1; j <= text2.length; j++) {
      // 如果上头两个相等了，说明是可以有公共的了
      if (text[i - 1] === text2[j - 1]) {
        // 说明这个公共的要+1
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // 取一个最大的，让上一个的选项变成最大的
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  // console.log(dp)
  console.log(dp[text.length][text2.length])
}

// longestCommonSubsequence('abcde', 'ace')

// 最长递增子序列
const lengthOfLIS = (nums) => {
  // 动态规划，怎么规划呢？
  let dp = []
  for (var i = 0; i < nums.length; i++) {
    dp[i] = 1
    for (var j = 0; i < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }
  return Math.max(...dp)
}
// 无重复最长子串

const lengthOfLongestSubstring1 = (str) => {
  // 这个题的主要思路很简单，相当于利用栈从头开始
  const arr = []
  let max = 0
  for (var i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]) > -1) {
      arr.splice(0, arr.indexOf(str[i]) + 1)
    }
    arr.push(str[i])
    max = Math.max(arr.length, max)
  }
  return max
}

// lengthOfLongestSubstring1('abcabcbb')

//  * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
//你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
//输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
//输出：[[7,4,1],[8,5,2],[9,6,3]]
var rotate = (matrix) => {
  // 这道题，考的不是思路，而是套路， 需要背住，要先斜对角反转一下，在竖着的中轴钱反转一下
  // 先处理斜对角
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  // 再处理中轴线的情况
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][matrix.length - j - 1]
      matrix[i][matrix.length - j - 1] = temp
    }
  }
}
//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
//注意：答案中不可以包含重复的三元组。

// const threeSum = (nums) => {
//   // 这个思路其实你首先想到的应该是结果，然后 for 循环 或着 while
//   const result = []
//   let len = nums.length
//   // 如果太小了要防住
//   if (len < 3) {
//     return result
//   }
//   // 先给他排序
//   nums.sort((a, b) => a - b)
//   // len - 2 同样道理，小于三个不用考虑
//   for (let i = 0; i < len - 2; i++) {
//     // 如果第一个就大于0了，三个加起来肯定大于0
//     if (nums[i] > 0) {
//       break
//     }
//     // 避免掉重复的情况
//     if (i && nums[i] === nums[i - 1]) {
//       continue
//     }
//     let left = i + 1
//     let right = len - 1
//     // 双指针夹逼
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right]
//       if (sum === 0) {
//         result.push([nums[i], nums[left++], nums[right--]])
//         // push 加了之后防止还存在重复
//         while (nums[left] === nums[left - 1]) {
//           left++
//         }
//         while (nums[right] === nums[right + 1]) {
//           right--
//         }
//       } else if (sum > 0) {
//         right--
//       } else {
//         left++
//       }
//     }
//   }
//   return result
// }

const threeSum = (nums) => {
  // 就是利用当前这个往后找，然后判断多次 for 循环就行
  var result = []
  var len = nums.length
  // 如果 len 太小的话其实也是不灵的
  if (len < 3) {
    return result
  }
  // 先排序一下，为了方便后续的操作
  nums.sort((a, b) => a - b)
  // 这里之所以要 len-2 是为了当前 i 需要往后找俩，如果不 len-2 的话，后面两个就找不到俩了
  for (let i = 0; i < len - 2; i++) {
    // 如果 i 大于零那么必然不行了，
    if (nums[i] >= 0) {
      break
    }
    if (i && nums[i] === nums[i - 1]) {
      continue
    }
    // 然后就开始找等于 0 的情况了，怎么找呢？
    // 双指针逼近原则，给后续所有的元素都考虑到
    let left = i + 1
    let right = len - 1
    while (left < right) {
      // 先求出 sun 的值，然后算他是不是等于 0
      let sum = nums[i] + nums[left] + nums[right]
      // 如果等于 0 那就表示要成事了
      if (sum == 0) {
        // 等于 0 就表示已经成功了，我们需要 push
        result.push([nums[i], nums[left], nums[right]])
        // 然后又说了，要防止重复，所以，要在去重一下子
        while (nums[left] === nums[left + 1]) {
          left++
        }
        while (nums[right] === nums[right - 1]) {
          right--
        }
      } else if (sum > 0) {
        // 这个表示，太大了，我就给 right 减去一下子
        right--
      } else {
        // 如果还是小于 0 ，就表示left 太小了，给他加大一下子
        // 至于为啥不加大 right 也可能 right 也小啊，
        // 原因很简单，遍历right 从最后开始的，你到这一步的时候
        // 你如果right ++ 这个事情在遍历到前面的时候已经干过了
        left++
      }
    }
  }
}

const removeDuplicates2 = (nums) => {
  // 这个题的主要思路在于删除,既然是删除，那么就需要 for 循环 来遍历每一个元素，如果发现重复的，干掉
  let len = nums.length
  let index = 1
  for (let i = 1; i < len; i++) {
    // 首先要有个判断,判断是否相等
    if (nums[index] == nums[index - 1]) {
      //如果两个相等
      nums.splice(index, 1)
      index--
    }
    index++
  }
  console.log(nums)
}
// removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3])

// 这个题目的衍生，如果 相同的大于二，那么就在多加一个参数呗，多简单的事情
const removeDuplicates3 = (nums) => {
  let len = nums.length
  // 记录相同的数量，默认搞一个啊，多的都删了
  let curr = 1
  // 要删除的下标
  let index = 1
  for (var i = 1; i < len; i++) {
    if (nums[index] === nums[index - 1]) {
      //这里需要加一下子，为了让他相同的数量能够大于等于二
      curr++
      // 这里判断是否相等，如果相等，就说明有可能删除了，但是由于大于等于 2 的条件限制，所以，需要在判断一下
      if (curr > 2) {
        // 这时候要开始删除了
        nums.splice(index, 1)
        curr--
        index--
      } else {
        // 如果发现不一样了，那就从新开始
        curr = 1
      }
    }
    index++
  }
}

//请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。
//示例 1:

const dailyTemperatures = (nums) => {
  // 这种问题，我们首先得有个解啊，所以你得先给答案弄个数组出来
  let result = []
  // 然后怎么也得 for 循环啊，所以现假模假式的搞个 for 循环
  for (let i = 0; i < nums.length; i++) {
    result.push(0)
    // 然后得再来个for 循环，因为要判断后面的是不是比现在的大啊
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        result[i] = j - i
        break
      }
    }
  }
  console.log(result)
}
// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])

// 合并两个有序链表
//输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4
// const mergeTwoLists1 = (l1, l2) => {
//   if (!l1) return l2
//   if (!l2) return l1
//   // 这道题的思路，应该是分治思想，说白了就是递归
//   // 怎么么递归呢？
//   // 首先第一直觉一定是比较大小
//   if (l1.val >= l2.val) {
//     // 比较完了大小之后，怎么办呢？
//     // 递归比较他后续的大小，然后相当于给后续的大小也比较一番
//     l2.next = mergeTwoLists1(l1, l2.next)
//     return l1
//   } else {
//     l1.next = mergeTwoLists1(l1.next, l2)
//     return l2
//   }
// }
// 来，重新写一遍，这是分治思想的精髓

const mergeTwoLists1 = (l1, l2) => {
  if (!l1) return l2
  if (!l2) return l1
  // 接下来就是分治思想了
  // 所谓分治思想，是一种拆分的思路，什么思路
  if (l1.val >= l2.val) {
    // 如果一个比另一个大，那么他有可能比后头的也大于是
    // 我们只需要干一个事情，给这个函数重新比较执行一遍
    l2.next = mergeTwoLists1(l1, l2.next)
    // 然后在他儿子里头，就返回这个比较大的或者下次比较之后较小的
    return l2
  } else {
    l1.next = mergeTwoLists1(l1.next, l2)
    return l1
  }
}

//给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

/* 验证是否是回文串 */
const isReset = (str) => {
  let left = 0
  let right = str.length - 1
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

var countSubstrings1 = function (s) {
  /* 验证回文传 */
  /* 2层遍历 */
  let result = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (isReset(s.slice(i, j))) {
        result++
      }
    }
  }
  return result
}

// 重写到底有多少回文字符串

const countSubstrings2 = (s) => {
  const res = 0
  // 找到子字符串，然后判断是否是回文
  const isReset = (str) => {
    // 夹逼原则从外头到里头去遍历，判断是不是回文
    let left = 0
    let right = str.length - 1
    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }
  // 因为为了搞定所有的子串，所以必须是双重 for 循环
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (isReset(s.slice(i, j))) {
        res++
      }
    }
  }
}

// 写一个compose 聚合函数

const compose = (...arg) => {
  // 既然是聚合函数，那么就需要返回一个函数
  return (num) => {
    return arg.reduce((pre, fn) => {
      return fn(pre)
    }, num)
  }
}

//在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

// const maximalSquare = (matrix) => {
//   // 做这种题，其实就是为了返回面积，所以你即使不会，也先得有个结果
//   let res = 0 // 首先面积一定得是0
// }

// maximalSquare([
//   ['1', '0', '1', '0', '0'],
//   ['1', '0', '1', '1', '1'],
//   ['1', '1', '1', '1', '1'],
//   ['1', '0', '0', '1', '0'],
// ])
// var maximalSquare = function (matrix) {
//   const row = matrix.length
//   const cow = matrix[0].length
//   const dp = []
//   let result = -Infinity
//   for (let i = 0; i < row + 1; i++) {
//     if (i === 0) {
//       dp[i] = new Array(cow + 1).fill(0)
//     } else {
//       dp[i] = [0]
//     }
//   }
//   console.log(dp)
//   for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= cow; j++) {
//       if (matrix[i - 1][j - 1] === '1') {
//         //当前的这个 ij 其实就对应 matrix 的 i-1，j-1
//         dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
//         result = Math.max(result, dp[i][j])
//       } else {
//         dp[i][j] = 0
//       }
//     }
//   }
//   console.log(dp, result)
//   return result !== -Infinity ? result * result : 0
// }
// 重写这玩意
// var maximalSquare = (matrix) => {
//   // 这玩意是有动态规划的 dp 的
//   // 所以要先有一个家伙事，来拿到他们的 length
//   var lenth = matrix.length
//   var lenth1 = matrix[0].length
//   // 然后设置一个 result
//   var result = 0
//   // 然后初始化 dp
//   var dp = []
//   for (let i = 0; i < lenth; i++) {
//     dp.push(new Array(lenth1).fill(0))
//   }
//   console.log(dp)
//   // 然后就开始遍历，求最长边长
//   // 记得要从 1 开始，为啥呢，因为你从 0 开始我找到上一个，的边长，就会找不到，有问题，就不符合 dp 公式
//   for (let i = 1; i < length; i++) {
//     for (let j = 1; i < lenth1; j++) {
//       // 判断上头的是不是等于 1,等于一，这样就代表就代表他有最长边长的可能
//       if (matrix[i - 1][j - 1] == '1') {
//         // dp[i][j] =
//       }
//     }
//   }
// }
// 再次尝试重写
let maximalSquare = (matrix) => {
  // 先拿到 length
  const row = matrix.length
  const col = matrix[0].length
  const dp = []
  let result = 0
  for (let i = 0; i < row + 1; i++) {
    dp.push(new Array(col + 1).fill(0))
  }
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      // 此时要给 dp中的和matrix中的对上,这时候他就正好对应的 dp[i][j]
      if (matrix[i - 1][j - 1] == '1') {
        // 于是,之所以要找最小的，是因为，他动态规划过来的，三个中有一个不是一或者 比 1 小那就不行
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        // 然后找一个最大边长
        result = Math.max(dp[i][j], result)
      }
    }
  }
  return result * result
}

// maximalSquare([
//   ['1', '0', '1', '1', '1'],
//   ['1', '0', '1', '1', '1'],
//   ['1', '1', '1', '1', '1'],
//   ['1', '0', '0', '1', '0'],
// ])

//给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

var topKFrequent = (nums, k) => {
  // for 循环，拿到最大的值,然后遍历前 k 个就行了
  let map = new Map()
  let result = []
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  console.log(map)
  // 然后就可以求最大值了
  for (let i = 0; i < k; i++) {
    let max = 0
    let key
    map.forEach((key, val) => {
      if (val > max) {
        max = val
        key = key
      }
    })
    result.push(map.get(key))
    map.delete(key)
  }
}
// topKFrequent([1, 1, 1, 2, 2, 3], 2)

// 最大的三个数的下标
const subscript = (nums) => {
  // 这个题的解法先给下标默认写出来都是 0
  let max = 0
  let max1 = 0
  let max2 = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[max]) {
      max2 = max1
      max1 = max
      max = i
      // 由于第一个改了，那么第一个就得给第二个了
    } else if (nums[i] > nums[max1]) {
      max2 = max1
      max1 = i
    } else if (nums[i] > nums[max2]) {
      max2 = i
    }
  }
}

// 给定一个经过编码的字符串，返回它解码后的字符串。
//输入：s = "3[a2[c]]"
//输出："accaccacc"
let decodeString = (str) => {
  // 这一道题我们先按照自己的思路去写，在按照别人的思路
  const arr = []
  const arr1 = []
  let result = ''
  for (s of str) {
    // 首先这个值可能有 nan 的情况
    // 首先判断他是个数字的情况
    if (!isNaN(Number(s))) {
      arr.push(s)
      // 如果是字母的情况
    } else if (isNaN(s) && s !== '[' && s !== ']') {
      arr1.push(s)
      //由于] 是从内到外的，所以我们只需要判断]就行，来解决问题，然后多乘以几个就行了
    } else if (s === ']') {
      const news = arr.pop()
      const news1 = arr1.pop()
      let newstr = news1 + result
      let content = ''
      for (let i = 0; i < Number(news); i++) {
        content += newstr
      }
      result = content
    }
  }
  console.log(result)
}
// decodeString('3[a2[c]]')

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
//输入: nums = [1,3,5,6], target = 2
//输出: 1
//示例 3:
const searchInsert = (nums, target) => {
  // 这个题可以尝试用二分法去找
  // 所谓二分法，其实就是找到一个中间值，然后劈开一半
  let left = 0
  let right = nums.length - 1
  let result = 0
  // 取整

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid > target) {
      right = mid - 1
    } else if (mid < target) {
      // 因为跟这个比过了所以需要+1
      left = mid + 1
    } else {
      result = mid
    }
  }
  // 最后如果找不到，那么一定是左边
  return result || left
}

// 翻转链表
//其中 cr>beta>alpha,要你实现一个函数，传入两个字符串，返回版本号大的那个
let arr = ['v1.0.1-beta.1.1', 'v1.21.1-cr.2.1', 'v1.1.01-alpha.1', 'v1.1.0']
const getversion = (arr) => {
  arr.sort((a, b) => {
    var str1 = a.split('.')
    var str2 = b.split('.')
    var a = str1.shift().substring(1)
    var b = str2.shift().substring(1)
    var newstr1 = str1.join('')
    var newstr2 = str2.join('')
    var new1 = newstr1.replace(/-beta|-cr|-alpha/g, (_) => {
      if (_ == '-cr') {
        return 3
      } else if (_ == '-beta') {
        return 2
      } else {
        return 1
      }
    })
    var new2 = newstr2.replace(/-beta|-cr|-alpha/g, (_) => {
      if (_ == '-cr') {
        return '3'
      } else if (_ == '-beta') {
        return '2'
      } else {
        return '1'
      }
    })
    const num1 = a + '.' + new1
    const num2 = b + '.' + new2
    console.log(num1, num2)
    return
  })
}
// getversion(arr)
// 二叉树的遍历
// 这个题用递归做，深度优先遍历，然后先序遍历

const preorderTraversal = (root) => {
  console.log(root)
  if (!root.left && !root.right) {
    return
  }
  if (root.left) {
    preorderTraversal(root.left)
  }
  if (root.right) {
    preorderTraversal(root.right)
  }
}

//计算二叉树的最大深度
// 这个题相当有意思，其实本质上来说，就是判断是 left 深 还是 right 深
const tree = (root) => {
  // 这一题由于要计算最大深度，所以当没有的时候，返回 O，然后需要递归
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  // 有一侧有的时候，要直接返回的，因为指定大啊，在当前的情况在，
  if (!root.left) {
    return 1 + tree(root.right)
  }
  if (!root.right) {
    return 1 + tree(root.left)
  }
  // 否则就比较一下子，看看谁大
  let left = 1 + tree(root.left)
  let right = 1 + tree(root.right)
  return Math.max(left, right)
}

//给你一个字符串表达式，请你实现一个基本计算器来计算并返回他的值
//基本计算器Ⅱ
//输入：s = “3+2*2”
//输出：7
//示例 2：
var calculate = function (s) {
  const ops = [1]
  let sign = 1

  let ret = 0
  const n = s.length
  let i = 0
  while (i < n) {
    if (s[i] === ' ') {
      i++
    } else if (s[i] === '+') {
      sign = ops[ops.length - 1]
      i++
    } else if (s[i] === '-') {
      sign = -ops[ops.length - 1]
      i++
    } else if (s[i] === '(') {
      ops.push(sign)
      i++
    } else if (s[i] === ')') {
      ops.pop()
      i++
    } else {
      let num = 0
      while (i < n && !isNaN(Number(s[i])) && s[i] !== ' ') {
        num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt()
        i++
      }
      ret += sign * num
    }
  }
  console.log(ret)
  return ret
}
// calculate('3+2*2')
//赛马：25匹马，5个赛道，每次只能同时有5匹马跑，在无法计时的前提下，最少比赛几次选出最快的前三名的马？

/*
   334. 递增的三元子序列
*/

/*
给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。
*/
//输入：nums = [1,2,3,4,5]
//输出：true
//解释：任何 i < j < k 的三元组都满足题意

// const increasingTriplet = (nums) => {
//   // 这个题尝试使用贪心算法，
//   // 他本质上就是就是当前的这个比之前的大就可以了
//   //如果  nums 太小了，那就说明不行  必须返回 false
//   if (nums.length < 3) return false
//   // 先默认 first 是第 0 个最小的 后续如果还有更小的，就给他 替换了
//   var first = nums[0]
//   var second = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > first) {
//       second = nums[i]
//     } else if (nums[i] > second) {
//       return true
//     } else {
//       // 如果最后不行，那么就说明什么呢？
//       // 说明第一小需要易主了于是
//       // 就相当于从头开始了，后续如果有比他大的，那么由于second 已经 不可能比 first 小了
//       // 所以只要有比他大的，那么就一定会有 递增的三元子序列
//       // 而这么做，就解决了还有一种情况，那就是其实 second 还没找到， 必须给 first变小，在搜寻
//       // second 的可能性
//       first = nums[i]
//     }
//   }
// }

// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
//假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。
//你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间。
//输入：nums = [1,3,4,2,2]
//输出：2
//示例
// 这是其实就是要找出重复的整数，这一题其实很简单
//
const findDuplicate = (nums) => {
  // 这个就是要找出重复的数字所以我么一定要 for 循环
  // 必须假模假式的 for
  // 这时候，我们还得有个目标值
  // 这个时候，就是要让当前的值和后头比一下就可以了
  // 所以是个双重 for 循环，但是为啥不和前面比呢
  // 原因很简单，前面的和当前这个在之前遍历的时候比过了
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    for (let j = i; j < nums.length; j++) {
      if (curr == nums[j]) {
        return curr
      }
    }
  }
}

