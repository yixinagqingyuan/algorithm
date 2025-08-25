/** @format */

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

// DFS解法
function maxAreaOfIsland(grid) {
  if (!grid || grid.length === 0) return 0;
  
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;
  
  // 深度优先搜索函数
  function dfs(row, col) {
    // 边界检查
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
      return 0;
    }
    
    // 标记已访问
    grid[row][col] = 0;
    
    // 计算当前岛屿面积（包括四个方向）
    let area = 1;
    area += dfs(row - 1, col); // 上
    area += dfs(row + 1, col); // 下
    area += dfs(row, col - 1); // 左
    area += dfs(row, col + 1); // 右
    
    return area;
  }
  
  // 遍历整个网格
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        const area = dfs(row, col);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  
  return maxArea;
}

// BFS解法
function maxAreaOfIslandBFS(grid) {
  if (!grid || grid.length === 0) return 0;
  
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;
  
  // 四个方向的偏移量：上、下、左、右
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  // 广度优先搜索函数
  function bfs(startRow, startCol) {
    const queue = [[startRow, startCol]]; // 使用队列存储待访问的位置
    let area = 0;
    
    // 标记起始位置为已访问
    grid[startRow][startCol] = 0;
    
    while (queue.length > 0) {
      const [row, col] = queue.shift(); // 从队列头部取出位置
      area++; // 面积加1
      
      // 检查四个方向的相邻位置
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        
        // 边界检查和有效性检查
        if (newRow >= 0 && newRow < rows && 
            newCol >= 0 && newCol < cols && 
            grid[newRow][newCol] === 1) {
          
          // 标记为已访问并加入队列
          grid[newRow][newCol] = 0;
          queue.push([newRow, newCol]);
        }
      }
    }
    
    return area;
  }
  
  // 遍历整个网格
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        const area = bfs(row, col);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  
  return maxArea;
}

// 测试DFS解法
console.log('=== DFS解法 ===');
const result1 = maxAreaOfIsland([...grid.map(row => [...row])]);
console.log('最大岛屿面积:', result1);

// 测试BFS解法
console.log('\n=== BFS解法 ===');
const result2 = maxAreaOfIslandBFS([...grid.map(row => [...row])]);
console.log('最大岛屿面积:', result2);

// 额外测试用例
const testGrid1 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
];

console.log('\n=== 测试用例1 ===');
console.log('DFS结果:', maxAreaOfIsland([...testGrid1.map(row => [...row])]));
console.log('BFS结果:', maxAreaOfIslandBFS([...testGrid1.map(row => [...row])]));

// 可视化BFS执行过程
console.log('\n=== BFS执行过程演示 ===');
function demonstrateBFS(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  function bfsWithSteps(startRow, startCol) {
    const queue = [[startRow, startCol]];
    let area = 0;
    let steps = [];
    
    grid[startRow][startCol] = 0;
    steps.push(`开始位置: (${startRow}, ${startCol})`);
    
    while (queue.length > 0) {
      const [row, col] = queue.shift();
      area++;
      steps.push(`访问位置: (${row}, ${col}), 当前面积: ${area}`);
      
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        
        if (newRow >= 0 && newRow < rows && 
            newCol >= 0 && newCol < cols && 
            grid[newRow][newCol] === 1) {
          
          grid[newRow][newCol] = 0;
          queue.push([newRow, newCol]);
          steps.push(`  加入队列: (${newRow}, ${newCol})`);
        }
      }
    }
    
    return { area, steps };
  }
  
  // 演示第一个岛屿的BFS过程
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        const { area, steps } = bfsWithSteps(row, col);
        console.log(`岛屿面积: ${area}`);
        console.log('执行步骤:');
        steps.forEach(step => console.log(step));
        return;
      }
    }
  }
}

// 使用小一点的网格演示
const demoGrid = [
  [1, 1, 0],
  [1, 0, 0],
  [0, 0, 1]
];

demonstrateBFS([...demoGrid.map(row => [...row])]);
