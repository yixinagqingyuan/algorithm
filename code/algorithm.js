/** @format */

// /** @format */

// // 回文函数
// //其实回文函数的本质就是两头相等
// // 那么既然两头相等，两头比较即可
// var isPalindrome = function (x) {
//   let str1 = x.toString()
//   let [left, right] = [0, str1.length - 1]
//   // 首先负数一定不可能有回文，所以先排除负数
//   if ((x) => 0) {
//     // 然后比较位置，并且使用双指针循环挪动
//     while (left <= right) {
//       //如果发现左右不相等，那么久表示他已经不是回文了
//       if (str1[left] !== str1[right]) {
//         return false
//       }
//       left++
//       right--
//     }
//     // 如果都没返回false 那么久表示他是个回文
//     return true
//   }
// }

// // lru 算法
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function (capacity) {
//   // 首先保存当前的lru 的总体
//   this.capacity = capacity
//   // new 一个map
//   this.map = new Map()
// }

// /**
//  * 获取逻辑
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//   //先判断在当前map 里面有没有
//   if (this.map.has(key)) {
//     // 如果找到了
//     let temp = this.map.get(key)
//     // 需要重新赋值一次，是为了刷新顺序，防止超过限制后，误删当前
//     this.map.delete(key)
//     this.map.set(key, temp)
//     return temp
//   } else {
//     // 如果没有就拉胯
//     return -1
//   }
// }

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   // 判断是否有
//   if (this.map.has(key)) {
//     // 如果有就先删除了，也是为了刷新次数
//     this.map.delete(key)
//   }
//   //重新赋值一次，将当前最新的赋值到最后
//   this.map.set(key, value)
//   // 如果超了，那么就给第一个删了
//   if (this.map.size > this.capacity) {
//     // 给第一个删除了
//     this.map.delete(this.map.keys().next().value)
//   }
// }

// // 版本号比较
// export const semverCompare = (verionA, versionB) => {
//   // eslint-disable-next-line no-restricted-properties
//   const { isNaN } = window
//   const splitA = verionA.split('.')
//   const splitB = versionB.split('.')

//   for (let i = 0; i < 3; i++) {
//     const snippetA = Number(splitA[i])
//     const snippetB = Number(splitB[i])

//     if (snippetA > snippetB) return 1
//     if (snippetB > snippetA) return -1

//     // e.g. '1.0.0-rc' -- Number('0-rc') = NaN
//     if (!isNaN(snippetA) && isNaN(snippetB)) return 1
//     if (isNaN(snippetA) && !isNaN(snippetB)) return -1
//   }

//   return 0
// }

// var compareVersion = function (version1, version2) {
//   const v1 = version1.split('.')
//   const v2 = version2.split('.')
//   for (let i = 0; i < v1.length || i < v2.length; ++i) {
//     let x = 0,
//       y = 0
//     if (i < v1.length) {
//       x = parseInt(v1[i])
//     }
//     if (i < v2.length) {
//       y = parseInt(v2[i])
//     }
//     if (x > y) {
//       return 1
//     }
//     if (x < y) {
//       return -1
//     }
//   }
//   return 0
// }

// 有效的括号
// 给定一个只包括 '(' ，')' ，'{' ，'}' ，'[' ，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
function isValid(s) {
  var arr = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      arr.push(')')
    } else if (s[i] == '[') {
      arr.push(']')
    } else if (s[i] == '{') {
      arr.push('}')
    } else {
      if (s[i] != arr.pop()) {
        return false
      }
    }
  }
  if (arr.length) {
    return false
  } else {
    return true
  }
}
// console.log(isValid('(){[]{}'))

// 判断是否有环
var head = [3, 2, 0, -4]
function hasLoop(node) {
  if (head == null || head.next == null) {
    return false
  }
  // 双指针绝活
  //这里慢的为乌龟，起始点跑
  var slow = head
  //快的为兔子，下一个节点跑，为了防止只有两个节点的情况
  var fast = head.next
  while (slow && fast) {
    if (slow == fast) {
      return true
    }
    //乌龟一次跑一个节点
    slow = slow.next
    //兔子每次两个节点
    fast = fast.next ? fast.next.next : null
    if (!slow || !fast) {
      return false
    }
  }
}

hasLoop(head)

function Node(data) {
  this.data = data
  this.next = null
}

const node1 = new Node(1)
const node2 = new Node(2)
const node4 = new Node(4)
const node6 = new Node(6)

const node3 = new Node(3)
const node5 = new Node(5)
const node9 = new Node(9)

node1.next = node2
node2.next = node4
node4.next = node6

node6.next = node5
node5.next = node9
node9.next = node6
// 快慢指针
let hasCycle = function (head) {
  // 如果没有，那就表示压根就没有或者只有一个
  if (!head || !head.next) {
    return false
  }
  let fast = head.next.next,
    slow = head.next
  let i = 0
  while (fast !== slow) {
    if (!fast || !fast.next) {
      return false
    }
    fast = fast.next.next
    slow = slow.next
    i++
  }
  return true
}

const hasCycle2 = (head) => {
  try {
    JSON.stringify(head)
    return false
  } catch (error) {
    console.log(error)
    return true
  }
}

const hasCycle3 = (head) => {
  let link = head
  while (link) {
    if (link.flag) return true
    link.flag = true
    link = link.next
  }
  return false
}

// var a = hasCycle3(node1)

// var hasCycle4 = function (head) {
//   let map = new WeakMap()
//   if (!head && !head.next) {
//     return false
//   }
//   while (head) {
//     if (map.get(head)) {
//       return true
//     } else {
//       map.set(head, false)
//       head = head.next
//     }
//   }
//   return false
// }

// const hasCycle222 = function (head) {
//   while (head) {
//     if (head.tag) {
//       return true
//     }
//     head.tag = true
//     head = head.next
//   }
//   return false
// }

// 例如，给出
// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]

// var preorderTraversal = function (root) {
//   var stack = []
// }
// //     3
// //   9   20
// //      7  15
// //

// var a = {
//   val: 3,
//   left: { val: 9, right: null, left: null },
//   right: {
//     val: 20,
//     right: { val: 7, right: null, left: null },
//     left: { val: 15, right: null, left: null },
//   },
// }
// 前序遍历 preorder = [3,9,20,15,7]                1
// 中序遍历 inorder = [9,3,15,20,7]              8        2
// 前序遍历 preorder = [1,2,4,5,7,8,3,6]           9   3     4
// 中序遍历 inorder = [4,2,7,5,8,1,3,6]                          5
// 前序遍历 preorder = [1,8,9，2,3,4,5]
// 中序遍历 inorder = [8,9,1,3,2,4,5]
// function buildTree(preorder, inorder) {
//   // 如果没有直接返回
//   if (preorder.length === 0) return null
//   // 由于先序遍历所以第一个一定是根节点
//   const first = preorder[0]
//   // 生成根节点
//   const root = new TreeNode(first) //  8
//   // 根节点在中序遍历中的位置
//   const idx = inorder.indexOf(first) //0

//   root.left = buildTree(
//     preorder.slice(1, idx + 1), // []
//     inorder.slice(0, idx), //[]
//   )
//   root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))
//   return root
// }

//  无重复字符的最长子串
//输入: "abcabcbb"
//输出: 3
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 思路，因为是要求最长的字符串，单纯的靠本身的遍历那是不行的，只能借助外力， 保存最长的记录，当发现没有一样的就存起来
// 当发现一样的就从头退出去再从头开始,在遍历的过程中，数组会保存不重复的内容，然后每次遍历，每次遍历，比较一次 length 搞到最大的为止
var lengthOfLongestSubstring = function (s) {
  let arr = []
  let length = 0
  for (let item of s) {
    // 如果里头有
    if (arr.includes(item)) {
      // 在里面找位置
      let index = arr.indexOf(item)
      // 找到为止，就干掉前面的内容,来保持从头开始的最长串
      arr.splice(0, index + 1)
    }
    // push 常规操作
    arr.push(item)
    // 比较找出最长的 length
    length = length > arr.length ? length : arr.length
  }
  console.log(length)
  return length
}
var length = function (s) {
  var arr = []
  var length = 0 //保存初始长度
  for (let item of s) {
    if (arr.includes(item)) {
      const index = arr.indexOf(item)
      arr.splice(0, index + 1)
    }
    arr.push(item)
    length = arr.length > length ? arr.length : length
  }
}

// lengthOfLongestSubstring('abcabcdfbb')

// 版本号比较，给你两个版本号 version1 和 version2 ，请你比较它们。
// 输入：version1 = "1.01", version2 = "1.001"
//输出：0
//解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
// 这个题的目的其实是为了通过 各个层级比较，首先最先第一层大于第二层，第二层大于第三层，以此类推
var compareVersion = (version1, version2) => {
  // 我们开始
  let v1 = version1.split('.')
  let v2 = version2.split('.')
  console.log(v1, v2)

  for (var i = 0; i < v1.length || i < v2.length; i++) {
    // 可以搞俩带值来解决问题
    let x = 0,
      y = 0
    // 给那些位 001 去掉
    x = parseInt(v1[i]) || 0
    y = parseInt(v2[i]) || 0
    if (x > y) {
      return 1
    }
    if (x < y) {
      return -1
    }
    // 不处理
    if (x == y) {
    }
  }
  // 都不命中，那只能是一样了
  return 0
}

//console.log(compareVersion('1.04', '1.002'))

//给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
// 输入:
//nums1 = [1,2,3,0,0,0], m = 3
//nums2 = [2,5,6],       n = 3
// 解析总长度是 6，也就是 m+n
//输出: [1, 2, 2, 3, 5, 6]
// 这个题的核心就是给两个数组合并，然后再给顺序排列好。当然其实是有暴力解法的，concat  和 sort 解决问题
// 平时是可以的，但是面试是万万不可以的
// 所以 我们的思路是要实行插针法，在不同的在 a 数组中插入 b 数组
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
// }
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// 尝试另一种解法

const merge = (nums1, m, nums2, n) => {
  let len = m + n - 1
  let len1 = m - 1
  let len2 = n - 1
  for (var i = len; i > 0; i--) {
    nums1[i] =
      (nums1[len1] || -1) >= (nums2[len2] || -1) ? nums1[len1--] : nums2[len2--]
  }
  console.log(nums1)
}
//merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

// 数组转树
const arr = [
  { id: 12, parent_id: 1, name: '朝阳区' },
  { id: 241, parent_id: 24, name: '田林街道' },
  { id: 31, parent_id: 3, name: '广州市' },
  { id: 13, parent_id: 1, name: '昌平区' },
  { id: 2421, parent_id: 242, name: '上海科技绿洲' },
  { id: 21, parent_id: 2, name: '静安区' },
  { id: 242, parent_id: 24, name: '漕河泾街道' },
  { id: 22, parent_id: 2, name: '黄浦区' },
  { id: 11, parent_id: 1, name: '顺义区' },
  { id: 2, parent_id: 0, name: '上海市' },
  { id: 24, parent_id: 2, name: '徐汇区' },
  { id: 1, parent_id: 0, name: '北京市' },
  { id: 2422, parent_id: 242, name: '漕河泾开发区' },
  { id: 32, parent_id: 3, name: '深圳市' },
  { id: 33, parent_id: 3, name: '东莞市' },
  { id: 3, parent_id: 0, name: '广东省' },
]

// const arrayToTree = (arr) => {
//   const tree = []
//   const map = {} // 用于存放 list 下的节点
//   for (const item of arr) {
//     map[item.id] = item // 浅拷贝（存储对 item 的引用）
//   }

//   for (var i = 0; i < arr.length; i++) {
//     const { parent_id, id } = arr[i]
//     // 先找出来第一层级
//     if (parent_id == 0) {
//       tree.push(map[id])
//     } else {
//       // 否则就当他儿子处理，因为他爹如果不是 0，那么就是其中的一个，当儿子处理就直接，处理 map 就行了
//       map[parent_id].children
//         ? map[parent_id].children.push(map[id])
//         : (map[parent_id].children = [map[id]])
//     }
//   }
//   console.log(JSON.stringify(tree))
// }
// 一次遍历搞定
const arrayToTree = (arr) => {
  const tree = []
  const map = {}
  for (item of arr) {
    const { parent_id, id } = item
    // 先保存一次
    if (!map[id]) {
      map[id] = {}
    }
    //  给当前这个跟 map 里头的内容建立关系，因为总有关系
    map[id] = map[id].children
      ? { ...item, children: map[id].children }
      : { ...item }
    if (parent_id == 0) {
      tree.push(map[id])
    } else {
      // 如果不行就当他的儿子存
      // 并且如果没有，那么就先搞个假的占位到时候后期可以在补上去
      if (!map[parent_id]) map[parent_id] = {}
      if (!map[parent_id].children) map[parent_id].children = []
      map[parent_id].children.push(map[id])
    }
  }
  console.log(tree)
}

// arrayToTree(arr)

// 编写一个函数计算多个数组的交集
// 他的核心就是比较两个数组，比完了拿到共有值和下一个数组比较
var intersection = (...arrs) => {
  let public = []
  for (var i = 0; i < arrs.length - 1; i++) {
    let public1 = []

    for (var t = 0; t < arrs[i + 1].length; t++) {
      if (public.length) {
        if (public.includes(arrs[i + 1][t])) {
          public1.push(arrs[i + 1][t])
        }
      } else {
        if (arrs[i].includes(arrs[i + 1][t])) {
          public1.push(arrs[i + 1][t])
        }
      }
    }
    public = public1
    if (public.length == 0) {
      return public
    }
  }
  return public
}

// 简便写法
const getIntersection = (...arrs) => {
  //给这个数组拍平
  // return Array.from(
  //   // 搞成集合
  //   new Set(
  // reduce 的属性遍历当前数组
  // 主要是数组去重
  return Array.from(
    new Set(
      arrs.reduce((total, arr) => {
        //console.log(total, arr)
        // 上来就是第一个和第二个比,然后以此类推
        //相当于遍历第二个，找出第一个里头有的
        // 然后作为结果在和第三个比,都是 和前面的集合比。然后找到相同的
        return arr.filter((item) => total.includes(item))
      }),
    ),
  )
  // )
}
//console.log(getIntersection([2, 1, 6], [6, 3], [6, 5]))
//给定 nums = [2, 7, 11, 15], target = 9

//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]
// 这个思路就是找，找伙伴
const nums = [2, 7, 11, 15]
const target = 9
function getSumIndex(arr1, sum) {
  var map = new Map()
  for (var i = 0; i < arr1.length; i++) {
    console.log(map.has(sum - arr1[i]))
    if (map.has(sum - arr1[i])) {
      console.log([map.get(sum - arr1[i]), i])
    }
    // 无论如何也得存一次，因为后头还可能有
    map.set(arr1[i], i)
  }
}
//getSumIndex(nums, 9)

//设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

//push(x) —— 将元素 x 推入栈中。
//pop() —— 删除栈顶的元素。
//top() —— 获取栈顶元素。
//getMin() —— 检索栈中的最小元素。

class MinStack {
  constructor() {
    this.length = 0
    this.stack = []
    this.mins = []
  }
  push(val) {
    //this.stack.push(val)
    const curMin =
      this.mins[this.length - 1] !== undefined
        ? this.mins[this.length - 1]
        : Infinity
    this.stack[this.length++] = val
    this.mins[this.length - 1] = Math.min(curMin, val)
  }
  top() {
    return this.stack[this.length - 1]
  }
  pop() {
    return this.stack[--length]
  }
  getMin() {
    // let min = this.stack[0]
    // for (var i = 1; i < this.stack.length; i++) {
    //   if (min > this.stack[i]) {
    //     min = this.stack[i]
    //   }
    // }
    // return min
    return this.mins[this.length - 1]
  }
}
// const stack = new MinStack()
// stack.push(2)
// stack.push(1)
// stack.push(3)
// stack.push(4)
// console.log(stack)
// 将中文数字转成数字
//二千亿零一百零一万零二百 转为 200001010200
function cvtNum(digit) {
  // 不同的单位级别，不同的处理方式，分为，万分位，十分位，和普通数字处理
  const zh = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const unit = ['千', '百', '十']
  const quot = ['万', '亿']
  let result = 0,
    quotFlag
  // 从后往前遍历
  for (let i = digit.length - 1; i >= 0; i--) {
    console.log(quotFlag)
    if (zh.indexOf(digit[i]) > -1) {
      // 数字
      if (quotFlag) {
        result += quotFlag * getNumber(digit[i])
      } else {
        result += getNumber(digit[i])
        console.log(result)
      }
    } else if (unit.indexOf(digit[i]) > -1) {
      // 十分位
      if (quotFlag) {
        result += quotFlag * getUnit(digit[i]) * getNumber(digit[i - 1])
      } else {
        result += getUnit(digit[i]) * getNumber(digit[i - 1])
      }
      --i
    } else if (quot.indexOf(digit[i]) > -1) {
      // 万分位
      if (unit.indexOf(digit[i - 1]) > -1) {
        if (getNumber(digit[i - 1])) {
          result += getQuot(digit[i]) * getNumber(digit[i - 1])
        } else {
          result +=
            getQuot(digit[i]) * getUnit(digit[i - 1]) * getNumber(digit[i - 2])
          quotFlag = getQuot(digit[i])
          --i
        }
      } else {
        result += getQuot(digit[i]) * getNumber(digit[i - 1])
        quotFlag = getQuot(digit[i])
      }
      --i
    }
  }
  console.log(result)
  return result

  // 返回中文大写数字对应的阿拉伯数字
  function getNumber(num) {
    for (let i = 0; i < zh.length; i++) {
      if (zh[i] == num) {
        return i
      }
    }
  }

  // 取单位
  function getUnit(num) {
    // console.log(num)
    for (let i = unit.length; i > 0; i--) {
      if (num == unit[i - 1]) {
        console.log(i)
        return Math.pow(10, 4 - i)
      }
    }
  }

  // 取分段
  function getQuot(q) {
    for (var i = 0; i < quot.length; i++) {
      if (q == quot[i]) {
        // 求次幂
        return Math.pow(10, (i + 1) * 4)
      }
    }
  }
}

// cvtNum('二千亿零一百零一万零二百')

function cvtNum1(str) {
  const numChar = {
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
  }
  const levelChar = {
    十: 10,
    百: 100,
    千: 1000,
    万: 10000,
    亿: 100000000,
  }
  // const levelChar = {
  //   万: 10000,
  //   亿: 100000000,
  // }
  // const levelChar1 = {
  //   十: 10,
  //   百: 100,
  //   千: 1000,
  // }
  // let ary = Array.from(str)
  // let temp = 0
  // let sum = 0
  // // 遍历
  // for (let i = 0; i < ary.length; i++) {
  //   // 拿到当前数字
  //   let char = ary[i]
  //   if (char === '零') continue
  //   // 如果是亿和万的话
  //   if (levelChar[char]) {
  //     sum += temp * levelChar[char]
  //     temp = 0
  //   } else if (levelChar1[char]) {
  //     let next = ary[i + 1]
  //     if (levelChar[next]) {
  //       temp = temp * levelChar1[char]
  //     } else {
  //       temp = temp * levelChar1[char]
  //     }
  //   } else {
  //     temp += numChar[char]
  //   }
  // }
  let ary = Array.from(str)
  let temp = 0
  let sum = 0
  for (let i = 0; i < ary.length; i++) {
    let char = ary[i]
    if (char === '零') continue
    if (char === '亿' || char === '万') {
      sum += temp * levelChar[char]
      temp = 0
    } else {
      let next = ary[i + 1]
      if (next && next !== '亿' && next !== '万') {
        temp += numChar[char] * levelChar[next]
        console.log(temp)
        i++
      } else {
        temp += numChar[char]
      }
    }
  }
  console.log(sum + temp)
}
// cvtNum1('二千亿零一百零一万二千二百零一')

function ChineseToNumber(chnStr) {
  var chnNumChar = {
    零: 0,
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
  }
  var chnNameValue = {
    十: { value: 10, secUnit: false },
    百: { value: 100, secUnit: false },
    千: { value: 1000, secUnit: false },
    万: { value: 10000, secUnit: true },
    亿: { value: 100000000, secUnit: true },
  }
  var rtn = 0
  var section = 0
  var number = 0
  var secUnit = false
  var str = chnStr.split('')
  for (var i = 0; i < str.length; i++) {
    var num = chnNumChar[str[i]]
    if (typeof num !== 'undefined') {
      number = num
      if (i === str.length * 1) {
        section += number
      }
    } else {
      var unit = chnNameValue[str[i]].value
      secUnit = chnNameValue[str[i]].secUnit
      if (secUnit) {
        section = (section + number) * unit
        rtn += section
        section = 0
      } else {
        section += number * unit
      }
      number = 0
    }
  }
  console.log(rtn + section)
}
// ChineseToNumber('二千亿零一百零一万二千二百零一')
// 翻转字符串里的单词
//输入: "the sky is blue"
//输出: "blue is sky the"
function reverseStr(str) {
  console.log(str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' '))
}
// reverseStr('the sky is blue')

// 删除字符串中的所有相邻重复项
//输入："abbaca"
//输出："ca"
//解释：
//例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
var removeDuplicates = function (S) {
  // var set = new Set()
  // for (s of S) {
  //   console.log(s)
  //   if (set.has(s)) {
  //     set.delete(s)
  //   } else {
  //     set.add(s)
  //   }
  // }
  // console.log(set)
  let stack = [S[0]]
  for (let i = 1; i < S.length; i++) {
    // 利用栈
    // 由于是相邻的，所有当前栈的最后一个就是这个数组的上一个,因为在 esle 中将它 push 进去了，下次进来的时候
    //  就是这个和上个对比
    // 如果被删了，就相当于形成了新的字符串，然后相当于将两个割裂开的字母比较，最后形成正确的答案
    if (S[i] == stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(S[i])
    }
  }
  console.log(stack.join(''))
}
// removeDuplicates('abdbaca')
// 最长公共前缀
//编写一个函数来查找字符串数组中的最长公共前缀。
//如果不存在公共前缀，返回空字符串 ""。

//输入: ["flower","flow","flight"]
//输出: "fl"

var longestCommonPrefix = function (strs) {
  // 兜底
  if (strs === null || strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  let min = 0,
    max = 0
  // 比较字符串的大小，其实是比较字符的ascii 码的大小
  // 这是一个比较巧妙的方法
  // 然后拿到他们的下标
  for (let i = 1; i < strs.length; i++) {
    if (strs[min] > strs[i]) min = i
    if (strs[max] < strs[i]) max = i
  }
  //按照最小的遍历
  for (let j = 0; j < strs[min].length; j++) {
    // 求索引值相等，当不相等的时候
    if (strs[min].charAt(j) !== strs[max].charAt(j)) {
      // 直接截取
      return strs[min].substring(0, j)
    }
  }
  return strs[min]
}
//longestCommonPrefix(['flower', 'flow', 'flight'])

const overlap = function (arr) {
  const [first] = arr
  if (arr.length <= 1) return first
  let result1 = ''
  for (let i = 0; i < first.length; i++) {
    let result = first[i]
    // 遍历第一个，第一个字符
    // 然后在数组里头扒拉里头所有的选项都满足，那么就返回 true，否者就残废
    // const isOverlap = arr.every((item) => {
    //   const value = item.indexOf(result) !== -1
    //   console.log(value)
    //   return value
    // })
    // if (isOverlap) {
    //   break
    // }
    // 是否都相同的变量
    var isOverlap = false
    // 也可以双重for循环解决问题
    for (var t = 1; t < arr.length; t++) {
      if (arr[t][i] != result) {
        isOverlap = true
        break
      } else {
        isOverlap = false
      }
    }
    if (isOverlap) {
      break
    }
    result1 += result
  }

  console.log(result1)
}
//overlap(['flower', 'flow', 'flight'])
// 修改以下 print 函数，使之输出 0 到 99，或者 99 到 0
//1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000 的代码
//2、不能修改 Math.floor(Math.random() * 1000
//3、不能使用全局变量
function print(n) {
  setTimeout(() => {
    console.log(n)
  }, Math.floor(Math.random() * 1000))
}
for (var i = 0; i < 100; i++) {
  print(i)
}

// 解析 bind 原理，并手写 bind 实现

Function.prototype.bind = function (context) {
  var self = this
  // var args = Array.prototype.call(1, arguments)
  //console.log(args)
  return function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    // 实现第1点
    return self.apply(context, args.concat(bindArgs))
  }
}

Function.prototype.myCall = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined // 用于防止 Function.prototype.myCall() 直接调用
  }
  context = context || window
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

// 模拟实现 new 操作符

function newobj() {
  // // 1、获得构造函数，同时删除 arguments 中第一个参数
  // Con = [].shift.call(arguments)
  // // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
  // let obj = Object.create(Con.prototype)
  // // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
  // let ret = Con.apply(obj, arguments)
  // // 4、优先返回构造函数返回的对象
  // return ret instanceof Object ? ret : obj
  Con = [].shift.call(arguments)
  let obj = Object.create(Con.prototype)
  const res = Con.apply(obj, arguments)
  return
}

function FakeNew() {
  let obj = {}

  // 将类数组 arguments 转为数组，同时将第一个参数也就是构造函数 shift 出来
  let Constructor = [].shift.apply(arguments)

  // 绑定原型
  obj.__proto__ = Constructor.prototype

  // 调用构造函数，将 obj 当做 this 传入
  let res = Constructor.apply(obj, arguments)

  // 返回
  return typeof res === 'object' ? res : obj
}

function User(name) {
  this.name = name
}

User.prototype.getName = function () {
  return this.name
}

// let u = FakeNew(User, 'leo')
// console.log(u)

// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4

function mergeTwoLists(l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  // 分治思想
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}

//字节算法题：扑克牌问题
//魔术师手中有一堆扑克牌，观众不知道它的顺序，接下来魔术师：
//从牌顶拿出一张牌， 放到桌子上
//再从牌顶拿一张牌， 放在手上牌的底部
//如此往复（不断重复以上两步），直到魔术师手上的牌全部都放到了桌子上。
//此时，桌子上的牌顺序为： (牌顶) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌底)。
//问：原来魔术师手上牌的顺序，用函数实现。

// 这一题的写法是倒推法
// 他先放在一张到桌子上 早搞一张放到底部
// 相当于，我现搞一张放到手里，在从底部抽一张放到顶部，如此重复

const calc = (arr) => {
  // 创建一个新的数组保存最后的结果
  const origin = []
  for (let i = 0; i < arr.length; i++) {
    // 如果有了，表示，已经执行了第一步了可以从底部抽一张放到底部了
    // 之所以要这样判断一下，是因为在代码层面没有的时候你抽出来没有用
    if (origin.length) {
      //  从底部抽一张
      const item = origin.pop()
      // 搞到顶部
      origin.unshift(item)
    }
    // 给他放到顶部
    origin.unshift(arr[i])
  }
  return origin
}

// 测试
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 原有顺序
//calc(result)
// [13, 2, 12, 6, 11, 3, 10, 5, 9, 1, 8, 4, 7]

// 删除链表倒数第 n 个结点
//给定一个链表: 1->2->3->4->5, 和 n = 2.
//当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 使用快慢指针解决问题，本质就是利用指针，指针差距，当快指针走到底了
// 那么慢指针下一个就应该被删除了
const removeNthFromEnd = function (head, n) {
  let preHead = new ListNode(0)
  preHead.next = head
  let fast = preHead,
    slow = preHead
  // 快先走 n+1 步
  while (n--) {
    fast = fast.next
  }
  // fast、slow 一起前进
  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return preHead.next
}

// 阿里编程题：实现一个方法，拆解URL参数中queryString
// const url = 'http://sample.com/?a=1&b=2&c=xx&d=#hash';
//const result = { a: '1', b: '2', c: 'xx', d: '' };
// 拆解URL参数中queryString，返回一个 key - value 形式的 object
const queryString = (str) => {
  const obj = {}
  str.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (obj[k] = v))
  console.log(obj)
  return obj
}

// queryString('http://sample.com/?a=1&b=2&c=xx&d=#hash')

// 常数时间插入、删除和获取随机元素
// 初始化一个空的集合。
// let RandomizedSet = function () {
//   this.list = []
//   this.map = {}
// }
// RandomizedSet.prototype.insert = function (val) {
//   if (this.map[val]) return false

//   this.list.push(val)
//   this.map[val] = this.list.length
//   return true
// }

// RandomizedSet.prototype.remove = function (val) {
//   if (!this.map[val]) return false

//   const final = this.list[this.list.length - 1]

//   // 下面这块主要是把要数组的尾值赋给对应的val值的位置，之后把数组最后的值踢出去即可
//   const index = this.map[val]
//   // 这里的index-1即我们拿到的index不是数组的下标，还需要减1。
//   this.list[index - 1] = final
//   this.map[final] = index

//   delete this.map[val]
//   this.list.pop()

//   return true
// }

// RandomizedSet.prototype.getRandom = function () {
//   const index = Math.floor(Math.random() * this.list.length)
//   return this.list[index]
// }
// const randomSet = new RandomizedSet()

// // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
// randomSet.insert(1)

// // 返回 false ，表示集合中不存在 2 。
// randomSet.remove(2)

// // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
// randomSet.insert(2)

// // getRandom 应随机返回 1 或 2 。
// randomSet.getRandom()

// // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
// randomSet.remove(1)

// // 2 已在集合中，所以返回 false 。
// randomSet.insert(2)

// // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
// randomSet.getRandom()

//二叉树的最大深度
//3
/// \
//9  20
// /  \
//15   7

// 考的就是深度优先遍历，其实就是递归
const maxDepth = function (root) {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
var template = '{{name}}很厉害，才{{age}}岁'
var context = { name: 'bottle', age: '15' }

function render(template, context) {
  console.log(1111)
  return template.replace(/{{(.*?)}}/g, (match, key) => {
    console.log(key)
    return context[key.trim()]
  })
}
// render(template, context)

//删除字符串中出现次数 >= 2 次的相邻字符
//输入："abbbaca"
//输出："ca"
//解释："abbbaca" => "aaca"=>"ca"
function removeDuplicate(s) {
  const stack = []
  let top
  let i = 0
  while (i < s.length) {
    top = stack[stack.length - 1]
    if (top == s[i]) {
      stack.pop()
      // 防止后台还有一样的
      while (top == s[i]) {
        i++
      }
    } else {
      stack.push(s[i])
      i++
    }
  }
  console.log(stack)
}
// removeDuplicate('abbbaca')

// 第一个只出现一次的字符
//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
// s = "abaccdeff"
//返回 "b"
//s = ""
//返回 " "
var firstUniqChar = function (s) {
  // console.log(s)
  // 保存重复内容
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  // 遍历拿到第一个
  for (let c of map.keys()) {
    if (map.get(c) === 1) {
      console.log(c)
    }
  }
}
//firstUniqChar('abaccdeff')

// 手写数组去重、扁平化函数
const test = ['a', ['b', 'c'], ['d', ['e', ['f']], 'g']]
function flat(arr) {
  const result = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flat(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}
// console.log(flat(test))
// 测试
var arr1 = [1, 2, 2, 3]
// 套路很简单，利用 indexOf
function unique(arr) {
  const result = []
  for (var i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  console.log(result)
}
// unique(arr1)

// 数组排序几大方法(后期重点复习)
//1. sort()方法
//2. 冒泡排序
//3. 选择排序
//4. 插入排序
//5. 快速排序
//6. 希尔排序

// 给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。
//你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。
//在执行完所有删除操作后，返回最终得到的字符串。
//本题答案保证唯一。

//输入：s = "deeedbbcccbdaa", k = 3
//输出："aa"
//解释：
//先删除 "eee" 和 "ccc"，得到 "ddbbbdaa"
//再删除 "bbb"，得到 "dddaa"
//最后删除 "ddd"，得到 "aa"
var removeDuplicates = function (s, k) {
  var stack = []
  for (c of s) {
    let prev = stack.pop()
    // 他第一次进来，后面就不校验了
    // 相当于是如果没有值，那就是返回 true ，或者有值第一个返回 false 在校验第二个
    // 第二个不等于的时候，就塞进去
    if (!prev || prev[0] !== c) {
      stack.push(prev)
      stack.push(c)
    } else if (prev.length < k - 1) {
      // 否则拼接上去
      // 由于之前已经取出来了，所以，在装上去还是原来的位置
      stack.push(prev + c)
    }
  }
  console.log(stack)
}
//removeDuplicates('deeedbbcccbdaa', 3)

//问题二： 找出不连续最大升序的数量
const arr122 = [101, 19, 12, 51, 32, 7, 103, 8]
const arr123 = [1, 2, 3, 4, 5, 6, 7]
//问题一： 找出连续最大升序的数量
function queryFn(arr) {
  var result = []
  var max = 0
  for (var i = 0; i < arr.length; i++) {
    if (result.length && result[result.length - 1] > arr[i]) {
      result = []
    }
    result.push(arr[i])
    max = max > result.length ? max : result.length
  }
  console.log(max)
}
// queryFn(arr123)
const findLengthOfLCIS = (nums) => {
  if (nums.length <= 1) return nums.length
  let max = 1,
    count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count += 1
    } else {
      count = 1
    }
    max = Math.max(max, count)
  }
  console.log(max)
}
// findLengthOfLCIS(arr122)

//问题二： 找出不连续最大升序的数量
// 其实就是求最长递归子序列,也就是考的动态规划
// 其实就是一点点的找，比如说，我这个和前面的比的时候，前面的已经拿到结果了，我只需要在基础上处理就行
// var maxLength = function (nums) {
//   var dp = []
//   for (var i = 0; i < nums.length; i++) {
//     // 首先第一个默认最长的指定是 1
//     dp[i] = 1
//     for (var j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         // 新的跟上一次的比，然后再看
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }
//   console.log(dp)
// }
// maxLength(arr123)
var maxLength = function (nums) {
  if (nums.length <= 1) return nums.length
  let count = 1,
    max = 1,
    start = 0
  for (let i = 0; i < nums.length - 1; i++) {
    start = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > start) {
        count++
        start = nums[j]
      }
    }
    max = Math.max(max, count)
    count = 1
  }
  return max
}
// 求最长递增子序列
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
//输入：nums = [10,9,2,5,3,7,101,18]
//输出：4
//解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// var lengthOfLIS = function (nums) {
//   const dp = []
//   for (let i = 0; i < nums.length; i++) {
//     dp[i] = 1
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }
//   return Math.max(...dp)
// }

// lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])

//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

//每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

//输入：n = 2
//输出：2
//解释：有两种方法可以爬到楼顶。
//1. 1 阶 + 1 阶
//2. 2 阶

var climbStairs = function (n) {
  // 如果小雨等于 2 的时候那么不是 1 就是 2 所以就是 n
  if (n <= 2) {
    return n
  }
  // 然后由于有动态规划，就相当于这一次的次数，要加上前面的总和 ，我们先给前三次给安排上，基本可以写死了第 0
  // 第一第二，是固定的，然后就有公式了，
  // 什么公式呢，就是最后一个，就是前两个的总方法加一块
  // 之所以是两个总方法加一块，原因是，前面有这么多方法能到这
  //  在到下一个只要方法是一个，那么其实和前面的方法是一样的
  // 但是当距离两个的时候， 是因为， 距离一个的时候，给距离两个的多加的一种方法给覆盖了，所以
  // 就变成两个相加了
  var res = [0, 1, 2]
  for (var i = 3; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2]
  }
  return res[n]
}

//给定数组 nums = [-1, 0, 1, 2, -1, -4]， a + b + c = 0
//满足要求的三元组集合为：
//[
//  [-1, 0, 1],
// [-1, -1, 2]
//]

//1.暴力破解，三层枚举，O（n^3）效率太低不考虑
//2.a+b+c = 0，转换思路，a+b = -c，这不就是两数之和嘛？
//3.利用双指针夹逼，但是怎么避免重复呢？
//3.1 排序即可，利用排序好的数组，固定一个指针i，夹逼选举left和right
//3.2 这道题难度在于要考虑的细节太多，多想想即可。
//3.3 扩展一下，如果是4数之和，五数之和，N数之和呢？怎么解决？
const threeSum = (nums) => {
  const len = nums.length
  const result = []
  // 因为是三数之和，小于三个不用考虑了
  if (len < 3) {
    return result
  }
  // 先给他排序
  nums.sort((a, b) => a - b)
  // len - 2 同样道理，小于三个不用考虑
  for (let i = 0; i < len - 2; i++) {
    // 如果第一个就大于0了，三个加起来肯定大于0
    if (nums[i] > 0) {
      break
    }
    // 避免掉重复的情况
    if (i && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = len - 1
    // 双指针夹逼
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left++], nums[right--]])
        // push 加了之后防止还存在重复
        while (nums[left] === nums[left - 1]) {
          left++
        }
        while (nums[right] === nums[right + 1]) {
          right--
        }
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return result
}

//示例 1:

//输入:
//[
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ]
//]
//输出: [1,2,3,6,9,8,7,4,5]
//示例 2:

//输入:
//[
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9,10,11,12]
//]
// 螺旋矩阵
//输出: [1,2,3,4,8,12,11,10,9,5,6,7]
var spiralOrder = function (matrix) {
  // 定义矩阵四周的范围，这里是下标的范围
  // let left = 0,
  //   right = matrix[0].length - 1,
  //   top = 0,
  //   bottom = matrix.length - 1
  // // 存储结果
  // const res = []

  // // 进行遍历
  // while (top < bottom && left < right) {
  //   // 第一层迭代，不需要遍历到底
  //   for (let i = left; i < right; i++) res.push(matrix[top][i]) // 上层
  //   for (let i = top; i < bottom; i++) res.push(matrix[i][right]) // 右层
  //   for (let i = right; i > left; i--) res.push(matrix[bottom][i]) // 下层
  //   for (let i = bottom; i > top; i--) res.push(matrix[i][left]) // 左层

  //   // 向内收缩
  //   left++
  //   right--
  //   top++
  //   bottom--
  // }

  // // 这里不需要while循环，因为只有最后一层
  // // 当只有一列的情况,从上至下进行遍历。注意这里需要遍历到底
  // if (left == right) {
  //   for (let i = top; i <= bottom; i++) res.push(matrix[i][left])
  // }
  // // 只有一行的情况，从左往右进行遍历
  // else if (top == bottom) {
  //   for (let i = left; i <= right; i++) res.push(matrix[top][i])
  // }
  const res = []
  let left = 0
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  while (left < right && top < bottom) {
    for (var i = left; i < right; i++) {
      res.push(matrixp[top][i])
    }
    for (var i = top; i < bottom; i++) {
      res.push(matrixp[i][right])
    }
    for (var i = right; i > left; i--) {
      res.push(matrixp[bottom][i])
    }
    for (var i = bottom; i > top; i--) {
      res.push(matrixp[i][left])
    }
    left++
    right--
    top++
    bottom--
  }
  return res
}

function Foo() {
  getName = function () {
    alert(1)
  }
  return this
}
Foo.getName = function () {
  alert(2)
}
Foo.prototype.getName = function () {
  alert(3)
}
var getName = function () {
  alert(4)
}
// 声明提前
function getName() {
  alert(5)
}

// Foo.getName() //2
// getName() //4
// Foo().getName() //1
// getName() //1
// new Foo.getName() //2
// new Foo().getName() //3

// 从给定的字符串 s 中找到最长的回文子串的长度。
//例如 s = "babbad" 的最长回文子串是 "abba" ，长度是 4 。
var longestPalindrome_dp = function (s) {
  var i, j, len
  var isPalindrom = new Array(s.length)
  for (i = 0; i < s.length; i++) {
    isPalindrom[i] = new Array(s.length).fill(false)
  }
  var maxLen = 1,
    longestBegin = 0
  for (i = 0; i < s.length; i++) {
    isPalindrom[i][i] = true
    if (i < s.length - 1 && s[i] === s[i + 1]) {
      isPalindrom[i][i + 1] = true
      maxLen = 2
      longestBegin = i
    }
  }
  for (len = 3; len <= s.length; len++) {
    for (i = 0; i < s.length; i++) {
      j = len + i - 1
      if (s[i] === s[j] && isPalindrom[i + 1][j - 1]) {
        isPalindrom[i][j] = true
        maxLen = len
        longestBegin = i
      }
    }
  }
  return s.slice(longestBegin, longestBegin + maxLen)
}
var longestPalindrome_dp = function (s) {
  // dp[i]
}

function longestPalindrome(s) {
  debugger
  // 特殊用例判断
  var len = s.length
  if (len < 2) {
    return s
  }

  var maxLen = 1
  var begin = 0

  // dp[i][j] 表示 s[i, j] 是否是回文串
  const dp = s[len][len]
  const charArray = s.toCharArray()

  for (var i = 0; i < len; i++) {
    dp[i][i] = true
  }
  for (var j = 1; j < len; j++) {
    for (var i = 0; i < j; i++) {
      if (charArray[i] != charArray[j]) {
        dp[i][j] = false
      } else {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + maxLen)
}
longestPalindrome('babad')

// main.js（主线程）
const myWorker = new Worker('/worker.js') // 创建 worker

myWorker.addEventListener('message', (e) => {
  console.log(e.data)
  myWorker.terminate() // 关闭 worker
})

myWorker.postMessage('Greeting from Main.js')

// worker.js（worker线程）

self.addEventListener('message', (e) => {
  postMessage('Greeting from Worker')

  setTimeout(() => {
    console.log('setTimeout run')
    postMessage('Greeting from SetTimeout')
  })

  Promise.resolve().then(() => {
    console.log('Promise run')
    postMessage('Greeting from Promise')
  })

  for (let i = 0; i < 1001; i++) {
    if (i === 1000) {
      console.log('Loop run')
      postMessage('Greeting from Loop')
    }
  }
})

//JS实现一个带并发限制的异步调度器Scheduler
// JS实现一个带并发限制的异步调度器Scheduler，
// 保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，
// 使得以下程序能正确输出

class Scheduler {
  constructor() {
    this.count = 2
    this.queue = []
    this.run = []
  }

  add(task) {
    this.queue.push(task)
    return this.schedule()
  }
  schedule() {
    if (this.run.length < this.count && this.queue.length) {
      const task = this.queue.shift()
      const promise = task().then(() => {
        this.run.splice(this.run.indexOf(promise), 1)
      })
      this.run.push(promise)
      return promise
    } else {
      return Promise.race(this.run).then(() => this.schedule())
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4

// 前端与服务器通信时，通过以下规则对发送的数据进行签名：

// 假设要发送的数据为：

// const data = 'name=alice&age=19&address=nanshan';

// 前端签名规则如下：

// 1. 根据参数名进行字典序排序

// const dataAfterSort = 'address=nanshan&age=19&name=alice';

// 2. 把前后端事先协定好的一个固定的key值拼接到上一步得到的字符串中（假设key的值固定为： a1s2d3f4）

// const dataWithKey = 'address=nanshan&age=19&name=alice&key=a1s2d3f4';

// 3. 对上一步的字符串进行md5签名

// const token = md5('address=nanshan&age=19&name=alice&key=a1s2d3f4');

// 4. 把原数据加上签名后作为最终数据

// const result = data + token;

// 5. 数据拼接在url中发送给服务器（url中可能有额外的hash数据，在处理时需要注意）

// const url = https://qq.com?name=alice&age=19&address=nanshan&token=XXXXXXX#title

// 服务器需要对url做解析后，验证签名是否正确，若签名正确返回url中传值对象，若签名错误则返回空对象，请实现服务器的签名校验、获取参数的逻辑

// 代码模板（拷贝以下代码到答题版，实现getParamsFromUrl函数）：

// const crypto = require('crypto');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('', (url) => {
//   console.log(getParamsFromUrl(url));
//   rl.close()
// })

// // 这个函数不需要候选人实现
// function md5 (data) {
//   return crypto.createHash('md5').update(data).digest('hex');
// }

// // 候选人需要实现这个函数
// function getParamsFromUrl (url) {
//   const key = 'a1s2d3f4'; // 前后台协商好的固定的key值
//   // 实现代码 ......

// }

// 样例1:
// [输入]
// name=alice&age=19&address=nanshan&token=5a864844e914514561aff395dde18ed1
// [输出]
// {
//   name='alice',
//   age='19',
//   address='nanshan',
// }
// [说明]
// 假设input中的token是有效的
// 样例2:
// [输入]
// name=alice&age=19&address=nanshan&token=aaa
// [输出]
// {}
// [说明]
// 假设input中的token是错误的

const crypto = require('crypto')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('', (url) => {
  //   console.log(getParamsFromUrl(url));
  rl.close()
})

// 这个函数不需要候选人实现
function md5(data) {
  return crypto.createHash('md5').update(data).digest('hex')
}

function mapSort(a, b) {
  const cur1 = a.split('')
  const cur2 = b.split('')
  while (cur1.length && cur2.length) {
    const current1 = cur1.shift().charCodeAt()
    const current2 = cur2.shift().charCodeAt()
    if (current1 !== current2) {
      return current1 - current2
    }
  }
}

function getParamsObject(objUrl) {
  const effectUrlArr = objUrl.split('&')
  const map = {}
  let token = ''
  let result = []
  effectUrlArr.sort(mapSort).forEach((item) => {
    const currentArr = item.split('=')
    const key = currentArr[0]
    const val = currentArr[1]
    if (key !== 'token') {
      map[key] = val
      result.push({ key, val })
    } else {
      token = val
    }
  })
  let res = ''
  result.forEach((item, index) => {
    res += item.key + '=' + item.val + (index === result.length - 1 ? '' : '&')
  })
  return [map, token, res]
}

function getParamsFromUrl(url) {
  const key = 'a1s2d3f4' // 前后台协商好的固定的key值
  const urlSignArr = url.split('#')
  const currentUrl = urlSignArr[0]
  const originUrl = currentUrl.split('&token')[0]
  const mad5Url = originUrl + '&key=' + key
  const [map, decodeToken, sortUrl] = getParamsObject(currentUrl)
  const token = md5(sortUrl + '&key=' + key)
  if (token === decodeToken) {
    return map
  } else {
    return {}
  }
}

console.log(
  getParamsFromUrl(
    'name=alice&age=19&address=nanshan&token=5a864844e914514561aff395dde18ed1',
  ),
)



/** @format */

// 重复的子字符串

//给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
//示例 1:

//输入: s = "abab"
//输出: true
//解释: 可由子串 "ab" 重复两次构成。
//示例 2:

//输入: s = "aba"
//输出: false
//示例 3:

//输入: s = "abcabcabcabc"
//输出: true
//解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)

// 思路一  合并两个s 根据两个 s 的 掐头去尾，在里头找一个 s 因为但凡是重复的，两个拼一块，
const repeatedSubstringPattern = (s) => {}
// 思路二 枚举 子串的长度 然后 看 子串 重复 几次 能 等于 s 的长度
