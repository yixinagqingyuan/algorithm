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
  // 首先要搞个映射关系，给这个算法写了
  const map = {}; // 用 map 也行，用对象也行
  const tree = [];
  // 然后为了这盘醋包的饺子 我们要给所有的节点都放到map里，用id作为key
  arr.forEach((element) => {
    map[element.id] = { ...element, children: [] }; // 复制元素并初始化children数组
  });

  arr.forEach((element) => {
    // 然后就要给他放到树里头了
    if (element.parent_id === 0) {
      // 根节点，我们直接塞进去
      tree.push(map[element.id]);
    } else {
      // 否则就要找爹了
      const parentElement = map[element.parent_id];
      if (parentElement) {
        // 找到了爹，就给自己塞进去
        // 初始化children（如果之前没有的话，虽然上面已经初始化了，但为了保险）
        // parentElement.children = parentElement.children || []; 
        parentElement.children.push(map[element.id]);
      }
    }
  });
  return tree;
};

// arrayToTree1 的测试用例
const testArray1 = [
  { id: 1, parent_id: 0, name: '节点1' },
  { id: 2, parent_id: 1, name: '节点1.1' },
  { id: 3, parent_id: 1, name: '节点1.2' },
  { id: 4, parent_id: 2, name: '节点1.1.1' },
  { id: 5, parent_id: 0, name: '节点2' },
  { id: 6, parent_id: 5, name: '节点2.1' },
  { id: 7, parent_id: 3, name: '节点1.2.1' },
  { id: 8, parent_id: 10, name: '节点孤儿(父节点不存在)' } // 测试父节点不存在的情况
];

console.log('\narrayToTree1 方法结果：');
const tree1Result = arrayToTree1(testArray1);
console.log(JSON.stringify(tree1Result, null, 2));

// 验证测试结果是否符合预期
// 预期：节点1应该有两个子节点 (节点1.1, 节点1.2)
//       节点1.1应该有一个子节点 (节点1.1.1)
//       节点1.2应该有一个子节点 (节点1.2.1)
//       节点2应该有一个子节点 (节点2.1)
//       节点孤儿不应该出现在树中，或者其父节点不存在，所以它不会被挂载

const rootNode1 = tree1Result.find(node => node.id === 1);
const rootNode2 = tree1Result.find(node => node.id === 5);

let testPassed = true;

if (!(rootNode1 && rootNode1.children.length === 2)) {
  console.error('测试失败：节点1的子节点数量不正确');
  testPassed = false;
}
if (!(rootNode1 && rootNode1.children.find(c => c.id === 2) && rootNode1.children.find(c => c.id === 2).children.length === 1)) {
  console.error('测试失败：节点1.1的子节点数量不正确');
  testPassed = false;
}
if (!(rootNode1 && rootNode1.children.find(c => c.id === 3) && rootNode1.children.find(c => c.id === 3).children.length === 1)) {
  console.error('测试失败：节点1.2的子节点数量不正确');
  testPassed = false;
}
if (!(rootNode2 && rootNode2.children.length === 1 && rootNode2.children.find(c => c.id === 6))) {
  console.error('测试失败：节点2的子节点数量不正确');
  testPassed = false;
}

// 检查孤儿节点是否未被错误处理 (它不应该在顶级，除非parent_id为0)
const orphanNode = tree1Result.find(node => node.id === 8);
if (orphanNode) {
    console.error('测试失败：孤儿节点不应出现在顶级树结构中');
    testPassed = false;
}

// 检查整体结构中是否包含孤儿节点 (它不应该被挂载到任何地方)
let foundOrphanInStructure = false;
function findNodeInTree(nodes, id) {
    for (const node of nodes) {
        if (node.id === id) return true;
        if (node.children && node.children.length > 0) {
            if (findNodeInTree(node.children, id)) return true;
        }
    }
    return false;
}
if (findNodeInTree(tree1Result, 8)) {
    console.error('测试失败：孤儿节点被错误地挂载到了树中');
    testPassed = false;
}


if (testPassed) {
  console.log('arrayToTree1 所有基本测试用例通过！');
} else {
  console.log('arrayToTree1 部分测试用例未通过。');
}
