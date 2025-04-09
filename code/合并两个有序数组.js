/**
 * @format
 * @param {number[]} nums1 - 第一个数组，假设其有足够的空间容纳合并后的所有元素
 * @param {number} m - nums1中的元素个数
 * @param {number[]} nums2 - 第二个数组
 * @param {number} n - nums2中的元素个数
 * @return {void} 直接修改nums1
 */

function merge(nums1, m, nums2, n) {
  // 从后向前遍历，将较大的数放入nums1的末尾
  let p1 = m - 1 // nums1的指针
  let p2 = n - 1 // nums2的指针
  let p = m + n - 1 // 合并后的指针

  // 当nums2还有元素时继续遍历
  while (p2 >= 0) {
    // 如果nums1的指针小于0，说明nums1已经遍历完，直接将nums2的元素放入
    if (p1 < 0) {
      nums1[p] = nums2[p2]
      p2--
    } else {
      // 比较两个数组当前位置的元素，将较大的放入nums1的末尾
      if (nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1]
        p1--
      } else {
        nums1[p] = nums2[p2]
        p2--
      }
    }
    p--
  }
}

// 测试用例
const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3

console.log('合并前：')
console.log('nums1:', nums1)
console.log('nums2:', nums2)

merge(nums1, m, nums2, n)

console.log('合并后：')
console.log('nums1:', nums1)

// 重写一遍合并两个有序数组
const merge1 = (nums1, m, nums2, n) => {
  // 这一题的精髓是什么么？就是给一个数组插入到另一个数组中去，主要因为是两个有序数组，我们只需要比较大小然后往里头插入就行了
  // 我们从前往后不方便，还得挪动位置，从后往前，是最方便的
  // 我们首先处理一些基础变量
  // 上头这些就是为了简化变量
  let len = m + n - 1
  let len1 = m - 1
  let len2 = n - 1
  for (let i = len; i >= 0; i--) {
    // 这时候还有个特殊情况就是第二个数组没了，为什么第一个数组无所谓呢？
    // 因为我们是给第一个数组的数插入第一个数组中去，当第一个数组的数没了的时候，就说明
    if (len2 < 0) {
      nums1[i] = nums1[len1]
      len1--
      continue
    }
    // 之所以，len1 不用小于 0 处理是因为只要出现undefind 以后都会返回 false 就导致必须走 nums2 了，所以这一步省略了
    console.log(nums1[len1] > nums2[len2])
    if (nums1[len1] > nums2[len2]) {
      nums1[i] = nums1[len1]
      len1--
    } else {
      nums1[i] = nums2[len2]
      len2--
    }
  }
}

// // 测试用例
// console.log('测试用例1：常规情况')
// let test1_nums1 = [1, 3, 5, 0, 0, 0]
// let test1_m = 3
// let test1_nums2 = [2, 4, 6]
// let test1_n = 3
// console.log('合并前：')
// console.log('nums1:', test1_nums1)
// console.log('nums2:', test1_nums2)
// merge1(test1_nums1, test1_m, test1_nums2, test1_n)
// console.log('合并后：')
// console.log('nums1:', test1_nums1)

// console.log('\n测试用例2：第一个数组为空')
// let test2_nums1 = [0, 0, 0]
// let test2_m = 0
// let test2_nums2 = [1, 2, 3]
// let test2_n = 3
// console.log('合并前：')
// console.log('nums1:', test2_nums1)
// console.log('nums2:', test2_nums2)
// merge1(test2_nums1, test2_m, test2_nums2, test2_n)
// console.log('合并后：')
// console.log('nums1:', test2_nums1)

// console.log('\n测试用例3：第二个数组为空')
// let test3_nums1 = [1, 2, 3, 0, 0]
// let test3_m = 3
// let test3_nums2 = []
// let test3_n = 0
// console.log('合并前：')
// console.log('nums1:', test3_nums1)
// console.log('nums2:', test3_nums2)
// merge1(test3_nums1, test3_m, test3_nums2, test3_n)
// console.log('合并后：')
// console.log('nums1:', test3_nums1)

// console.log('\n测试用例4：包含重复元素')
// let test4_nums1 = [1, 2, 2, 0, 0, 0]
// let test4_m = 3
// let test4_nums2 = [2, 3, 3]
// let test4_n = 3
// console.log('合并前：')
// console.log('nums1:', test4_nums1)
// console.log('nums2:', test4_nums2)
// merge1(test4_nums1, test4_m, test4_nums2, test4_n)
// console.log('合并后：')
// console.log('nums1:', test4_nums1)

// 测试用例
console.log('测试用例5：常规情况')
let test5_nums1 = [-10, -9, -8, 0, 0, 0]
let test5_m = 3
let test5_nums2 = [-20, -18, -16]
let test5_n = 3
console.log('合并前：')
console.log('nums1:', test5_nums1)
console.log('nums2:', test5_nums2)
merge1(test5_nums1, test5_m, test5_nums2, test5_n)
console.log('合并后：')
console.log('nums1:', test5_nums1)
