/** @format */

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
// 这个题也很巧妙，主要就是找关系，利用对象的保存关系的能力，遍历给的给关系一层一层的挂出来变成一个树的模样

const arrayToTree = (arr) => {
  // 首先，还是跟解数学题一样，即使啥也不会，先写个解，我们先给要存放的结果写出来
  const res = {}
  const tree = []
  // 先遍历数组，给数据滤一遍
  for (let i = 0; i < arr.length; i++) {
    // 遍历的目的是拿到 id 存起来，这样找 id的时候能从 id 拿到 pid
    let item = arr[i]
    res[item.id] = arr[i]
  }

  // 给 摘出来了以后，我们就可以根据id 和平pid的关系来建立，然后我们需要再一次遍历
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    // 首先要判断 顶头上司的情况如果他的parentid 为 0 说明他就没有父节点了， 直接给他塞到数组里头就行了
    if (item.parent_id == 0) {
      tree.push(item)
    } else {
      // 如果有父节点，那么就说明，他是某一个元素的子集，这时候就需要做一件事情找到他的父级，然后塞进去
      // 利用对象的引用类型的关系，最终来达到目的，但是从头遍历就很麻烦，于是，我们只需要做一件事，
      // 在之前的遍历的结果里，直接拿就可以了然后给他的 children 上挂值
      if (res[item.parent_id].children) {
        res[item.parent_id].children.push(item)
      } else {
        res[item.parent_id].children = [item]
      }
    }
  }
  console.log(JSON.stringify(tree))
}

// arrayToTree(arr)

// 为了防止被问主，还可以有一次遍历就解决的方式

const arrayToTree1 = (arr) => {
  //  一次遍历的本质就是我先占位置后填肉，然后来形成关系，他其实该有的家伙事还是不能少
  const res = {}
  const tree = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    // 这时候就是边遍历边存，如果没有，我上来就给他先保存一个空对象占位
    if (!res[item.id]) {
      res[item.id] = {}
    }
    // 然后我们再来着手，处理他的 children的问题
    // 此时因为当前的这个对象，可能有 children  所以要判断下
    if (res[item.id].children) {
      // 此时赋值的时候要给他的儿子也带上
      res[item.id] = { ...item, children: res[item.id].children }
    } else {
      // 如果没有，那就得赋值一下子了
      res[item.id] = { ...item }
    }
    // 然后我们再来处理他们的父子集关系
    if (item.parent_id === 0) {
      // 还是老样子，如果等于 0 我直接塞进去
      tree.push(item)
    } else {
      // 如果不等于 0 就有意思了,因为此时，有没有的情况所以要先判断没有的情况
      if (!res[item.parent_id]) {
        res[item.parent_id] = {}
      }
      // 然后再判断有没有 children ，如果没有，给他赋值一个空数组

      if (!res[item.parent_id].children) {
        res[item.parent_id].children = []
      }
      // 然后直接 push 进去，本质上来说这个的意思就是我虽然没有
      // 但是要提前占位，并且给他的儿子先放上去，然后如果等有了，在去往里头填肉， 这样最终便利完了就相当于是个完整的
      // 有层级关系的树了
      res[item.parent_id].children.push(item)
    }
  }
}
arrayToTree1(arr)
