/** @format */

// 示例数组数据
const arr = [
  { id: 1, parent_id: 0, name: '部门A' },
  { id: 2, parent_id: 1, name: '部门B' },
  { id: 3, parent_id: 1, name: '部门C' },
  { id: 4, parent_id: 2, name: '部门D' },
  { id: 5, parent_id: 2, name: '部门E' },
  { id: 6, parent_id: 3, name: '部门F' },
]

/**
 * 方法一：两次遍历实现数组转树
 * 第一次遍历建立节点映射，第二次遍历建立父子关系
 */
const arrayToTree = (arr) => {
  // 创建节点映射
  const nodeMap = {}
  const tree = []

  // 第一次遍历：建立节点映射
  for (const item of arr) {
    nodeMap[item.id] = { ...item }
  }

  // 第二次遍历：建立父子关系
  for (const item of arr) {
    if (item.parent_id === 0) {
      // 根节点直接加入结果数组
      tree.push(nodeMap[item.id])
    } else {
      // 将当前节点添加到父节点的children数组中
      const parent = nodeMap[item.parent_id]
      if (parent) {
        if (!parent.children) {
          parent.children = []
        }
        parent.children.push(nodeMap[item.id])
      }
    }
  }

  return tree
}

/**
 * 方法二：一次遍历实现数组转树
 * 边遍历边建立关系，通过提前占位的方式处理父子节点
 */
const arrayToTreeOptimized = (arr) => {
  const nodeMap = {}
  const tree = []

  for (const item of arr) {
    // 确保当前节点在映射中存在
    if (!nodeMap[item.id]) {
      nodeMap[item.id] = {}
    }

    // 处理当前节点
    nodeMap[item.id] = {
      ...item,
      ...nodeMap[item.id], // 保留可能已存在的children
    }

    if (item.parent_id === 0) {
      // 根节点直接加入结果数组
      tree.push(nodeMap[item.id])
    } else {
      // 确保父节点在映射中存在
      if (!nodeMap[item.parent_id]) {
        nodeMap[item.parent_id] = {
          children: [],
        }
      }

      // 确保父节点有children数组
      if (!nodeMap[item.parent_id].children) {
        nodeMap[item.parent_id].children = []
      }

      // 将当前节点添加到父节点的children中
      nodeMap[item.parent_id].children.push(nodeMap[item.id])
    }
  }

  return tree
}

// 测试代码
console.log('两次遍历方法结果：')
console.log(JSON.stringify(arrayToTree(arr), null, 2))

console.log('\n优化后一次遍历方法结果：')
console.log(JSON.stringify(arrayToTreeOptimized(arr), null, 2))

const arrayToTree1 = (arr) => {
  // 首先要搞个映射关系
}
