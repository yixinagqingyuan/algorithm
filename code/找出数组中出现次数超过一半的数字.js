/**
 * --------- 找出数组中出现次数超过一半的数字 ---------
 *
 * @format
 */

/**
 * @param {number[]} arr - 元素内容全部为自然数的数组
 * @return {number} - 返回数组中出现次数超过数组长度一半的自然数，如果没有则返回 -1
 */
function findMajorityElement(arr) {
  // 处理边界情况
  if (!arr || arr.length === 0) return -1
  if (arr.length === 1) return arr[0]

  // 摩尔投票算法
  let candidate = arr[0]
  let count = 1

  // 第一次遍历：找出候选众数
  for (let i = 1; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i]
      count = 1
    } else if (arr[i] === candidate) {
      count++
    } else {
      count--
    }
  }

  // 第二次遍历：验证候选众数是否真的出现超过一半
  count = 0
  for (let num of arr) {
    if (num === candidate) {
      count++
    }
  }

  return count > arr.length / 2 ? candidate : -1
}

// 测试用例
function testFindMajorityElement() {
  // 测试边界情况
  console.log('测试空数组:', findMajorityElement([]) === -1 ? '通过' : '失败')
  console.log('测试null:', findMajorityElement(null) === -1 ? '通过' : '失败')
  console.log(
    '测试单元素数组:',
    findMajorityElement([1]) === 1 ? '通过' : '失败',
  )

  // 测试有明显众数的情况
  console.log(
    '测试有明显众数:',
    findMajorityElement([2, 2, 2, 1, 1]) === 2 ? '通过' : '失败',
  )
  console.log(
    '测试刚好超过一半:',
    findMajorityElement([1, 2, 2, 2]) === 2 ? '通过' : '失败',
  )

  // 测试没有众数的情况
  console.log(
    '测试没有众数:',
    findMajorityElement([1, 2, 3, 4]) === -1 ? '通过' : '失败',
  )
  console.log(
    '测试相等但不超过一半:',
    findMajorityElement([1, 1, 2, 2]) === -1 ? '通过' : '失败',
  )

  // 测试较大数组
  console.log(
    '测试较大数组:',
    findMajorityElement([1, 1, 1, 1, 1, 2, 2, 2, 2]) === 1 ? '通过' : '失败',
  )
}

// 运行测试
// testFindMajorityElement()

// 首先用一个巧妙的方法，叫做摩尔投票算法，这个招数怎么形容呢？
// 就是找出来数最多的那个，然后我们就好比，诸侯乱战，相互厮杀，，你手底下人死一个，他手底下人也得死一个
// 如果你最后剩下了，那就代表。你剩下是最多的，这个算法是经过验证的，因为不管怎么样打架，他们群殴你，还是他们自己群殴，再来鸥你，只要你人数多总能剩下，最差就是他们都来鸥你
// 因为最后要占到一般以上一定有最大实例，如果最后剩下的不是最多的，那么就说明没有占到一半的
function findMajorityElement1(arr) {
  // 首先要处理边界情况
  if (!arr || arr.length === 0) return -1
  if (arr.length === 1) return arr[0]
  // 然后就开始摩尔投票算法
  // 我们开始之前首先得有点初始值
  let candidate = arr[0]
  let count = 1
  // 然后开始遍历
  for (let i = 1; i < arr.length; i++) {
    // 首先判断count是否为0,因为如果为零的话就说明打仗给当前 这一批消耗完了，要重新加一批人
    if (count === 0) {
      candidate = arr[i]
      count = 1
    } else {
      // 然后判断当前元素是否等于candidate,这一步是为了判断要不要抵消
      if (arr[i] === candidate) {
        count++
      } else {
        // 这就说明抵消了
        count--
      }
    }
  }
  // 这个算法完了就知道candidate是谁了，然后我们就需要验证一下candidate是不是真的超过一半，如果他没有超过一半，那就说明没有超过一半的
  for (let num of arr) {
    if (num === candidate) {
      count++
    }
  }
  return count > arr.length / 2 ? candidate : -1
}
// 然后我们再用我那个 Map 的思路再来一遍，要要精确的写代码。不然给人的印象不好

const findMajorityElement2 = (arr) => {
  // 首先要处理边界情况
  if (!arr || arr.length === 0) return -1
  if (arr.length === 1) return arr[0]
  //  然后我们搞个数字存放出现的次数
  let map = new Map()
  // 然后开始遍历
  // 这里注意，let map forEach 要精准的使用千万不要糊弄，如果实在不知道就用 for 循环
  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
  // 然后遍历这个 map 这个 Map 可以用 of 遍历，也可以用 forEach 遍历 of 和 in 的主要区别是 in 用来遍历对象
  for (let [key, value] of map) {
    if (value > arr.length / 2) {
      return key
    }
  }
  return -1
}

// 测试用例
function testFindMajorityElement1() {
  // 测试边界情况
  console.log('测试空数组:', findMajorityElement2([]) === -1 ? '通过' : '失败')
  console.log('测试null:', findMajorityElement2(null) === -1 ? '通过' : '失败')
  console.log(
    '测试单元素数组:',
    findMajorityElement2([1]) === 1 ? '通过' : '失败',
  )

  // 测试有明显众数的情况
  console.log(
    '测试有明显众数:',
    findMajorityElement2([2, 2, 2, 1, 1]) === 2 ? '通过' : '失败',
  )
  console.log(
    '测试刚好超过一半:',
    findMajorityElement2([1, 2, 2, 2]) === 2 ? '通过' : '失败',
  )

  // 测试没有众数的情况
  console.log(
    '测试没有众数:',
    findMajorityElement2([1, 2, 3, 4]) === -1 ? '通过' : '失败',
  )
  console.log(
    '测试相等但不超过一半:',
    findMajorityElement2([1, 1, 2, 2]) === -1 ? '通过' : '失败',
  )

  // 测试较大数组
  console.log(
    '测试较大数组:',
    findMajorityElement2([1, 1, 1, 1, 1, 2, 2, 2, 2]) === 1 ? '通过' : '失败',
  )
}

// 运行测试
testFindMajorityElement1()
