/**
 * 找到数组中前 k 个最大的数的下标
 * 
 * 方法1: 使用排序 - 时间复杂度 O(n log n)
 * @param {number[]} arr - 输入数组
 * @param {number} k - 需要找到的最大数的个数
 * @returns {number[]} - 前 k 个最大数的下标数组
 */
function topKIndicesBySort(arr, k) {
    if (!arr || arr.length === 0 || k <= 0) {
        return [];
    }
    
    // 创建包含值和索引的数组
    const indexedArr = arr.map((value, index) => ({ value, index }));
    
    // 按值降序排序
    indexedArr.sort((a, b) => b.value - a.value);
    
    // 取前 k 个元素的索引
    return indexedArr.slice(0, Math.min(k, arr.length)).map(item => item.index);
}

/**
 * 方法2: 使用最小堆 - 时间复杂度 O(n log k)，空间复杂度 O(k)
 * 适用于 k 相对较小的情况
 * @param {number[]} arr - 输入数组
 * @param {number} k - 需要找到的最大数的个数
 * @returns {number[]} - 前 k 个最大数的下标数组
 */
function topKIndicesByHeap(arr, k) {
    if (!arr || arr.length === 0 || k <= 0) {
        return [];
    }
    
    // 最小堆实现
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        
        parent(i) { return Math.floor((i - 1) / 2); }
        leftChild(i) { return 2 * i + 1; }
        rightChild(i) { return 2 * i + 2; }
        
        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }
        
        insert(item) {
            this.heap.push(item);
            this.heapifyUp(this.heap.length - 1);
        }
        
        heapifyUp(i) {
            while (i > 0 && this.heap[this.parent(i)].value > this.heap[i].value) {
                this.swap(i, this.parent(i));
                i = this.parent(i);
            }
        }
        
        extractMin() {
            if (this.heap.length === 0) return null;
            if (this.heap.length === 1) return this.heap.pop();
            
            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
            return min;
        }
        
        heapifyDown(i) {
            let minIndex = i;
            const left = this.leftChild(i);
            const right = this.rightChild(i);
            
            if (left < this.heap.length && this.heap[left].value < this.heap[minIndex].value) {
                minIndex = left;
            }
            
            if (right < this.heap.length && this.heap[right].value < this.heap[minIndex].value) {
                minIndex = right;
            }
            
            if (minIndex !== i) {
                this.swap(i, minIndex);
                this.heapifyDown(minIndex);
            }
        }
        
        peek() {
            return this.heap.length > 0 ? this.heap[0] : null;
        }
        
        size() {
            return this.heap.length;
        }
    }
    
    const minHeap = new MinHeap();
    
    // 遍历数组，维护大小为 k 的最小堆
    for (let i = 0; i < arr.length; i++) {
        if (minHeap.size() < k) {
            minHeap.insert({ value: arr[i], index: i });
        } else if (arr[i] > minHeap.peek().value) {
            minHeap.extractMin();
            minHeap.insert({ value: arr[i], index: i });
        }
    }
    
    // 提取堆中所有元素的索引
    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.extractMin().index);
    }
    
    return result.reverse(); // 反转以获得降序排列
}

/**
 * 方法3: 使用快速选择算法 - 平均时间复杂度 O(n)
 * @param {number[]} arr - 输入数组
 * @param {number} k - 需要找到的最大数的个数
 * @returns {number[]} - 前 k 个最大数的下标数组
 */
function topKIndicesByQuickSelect(arr, k) {
    if (!arr || arr.length === 0 || k <= 0) {
        return [];
    }
    
    // 创建包含值和索引的数组
    const indexedArr = arr.map((value, index) => ({ value, index }));
    
    // 快速选择找到第 k 大的元素
    function quickSelect(arr, left, right, k) {
        if (left === right) return left;
        
        const pivotIndex = partition(arr, left, right);
        
        if (pivotIndex === k) {
            return pivotIndex;
        } else if (pivotIndex > k) {
            return quickSelect(arr, left, pivotIndex - 1, k);
        } else {
            return quickSelect(arr, pivotIndex + 1, right, k);
        }
    }
    
    function partition(arr, left, right) {
        const pivot = arr[right].value;
        let i = left;
        
        for (let j = left; j < right; j++) {
            if (arr[j].value >= pivot) { // 降序排列
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }
        
        [arr[i], arr[right]] = [arr[right], arr[i]];
        return i;
    }
    
    const targetK = Math.min(k, arr.length) - 1;
    quickSelect(indexedArr, 0, indexedArr.length - 1, targetK);
    
    // 取前 k 个元素的索引并按值降序排序
    const result = indexedArr.slice(0, Math.min(k, arr.length));
    result.sort((a, b) => b.value - a.value);
    
    return result.map(item => item.index);
}

// 测试函数
function testTopKIndices() {
    const testCases = [
        { arr: [3, 1, 4, 1, 5, 9, 2, 6], k: 3, expected: "前3个最大数: 9(索引5), 6(索引7), 5(索引4)" },
        { arr: [10, 20, 30, 40, 50], k: 2, expected: "前2个最大数: 50(索引4), 40(索引3)" },
        { arr: [1, 1, 1, 1], k: 2, expected: "前2个最大数: 1(索引0), 1(索引1)" },
        { arr: [5], k: 1, expected: "前1个最大数: 5(索引0)" },
        { arr: [], k: 3, expected: "空数组" },
        { arr: [1, 2, 3], k: 5, expected: "k大于数组长度" }
    ];
    
    console.log("=== 测试结果 ===");
    
    testCases.forEach((testCase, index) => {
        console.log(`\n测试用例 ${index + 1}:`);
        console.log(`输入数组: [${testCase.arr.join(', ')}], k = ${testCase.k}`);
        console.log(`期望: ${testCase.expected}`);
        
        // 测试三种方法
        const result1 = topKIndicesBySort(testCase.arr, testCase.k);
        const result2 = topKIndicesByHeap(testCase.arr, testCase.k);
        const result3 = topKIndicesByQuickSelect(testCase.arr, testCase.k);
        
        console.log(`排序方法结果: [${result1.join(', ')}]`);
        console.log(`堆方法结果: [${result2.join(', ')}]`);
        console.log(`快速选择结果: [${result3.join(', ')}]`);
        
        // 显示对应的值
        if (result1.length > 0) {
            const values = result1.map(index => `${testCase.arr[index]}(索引${index})`);
            console.log(`对应的值: ${values.join(', ')}`);
        }
    });
}

// 性能测试
function performanceTest() {
    console.log("\n=== 性能测试 ===");
    
    // 生成大数组进行性能测试
    const largeArr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    const k = 100;
    
    console.log(`测试数组大小: ${largeArr.length}, k = ${k}`);
    
    // 测试排序方法
    console.time("排序方法");
    const result1 = topKIndicesBySort(largeArr, k);
    console.timeEnd("排序方法");
    
    // 测试堆方法
    console.time("堆方法");
    const result2 = topKIndicesByHeap(largeArr, k);
    console.timeEnd("堆方法");
    
    // 测试快速选择方法
    console.time("快速选择方法");
    const result3 = topKIndicesByQuickSelect(largeArr, k);
    console.timeEnd("快速选择方法");
    
    console.log(`结果长度一致性检查: ${result1.length === result2.length && result2.length === result3.length}`);
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        topKIndicesBySort,
        topKIndicesByHeap,
        topKIndicesByQuickSelect,
        testTopKIndices,
        performanceTest
    };
}

// 如果直接运行此文件，执行测试
if (typeof require !== 'undefined' && require.main === module) {
    testTopKIndices();
    performanceTest();
} else if (typeof module === 'undefined') {
    // 在浏览器或其他环境中直接执行
    testTopKIndices();
    performanceTest();
}

// 在浏览器环境中也可以直接调用测试
if (typeof window !== 'undefined') {
    window.topKIndices = {
        topKIndicesBySort,
        topKIndicesByHeap,
        topKIndicesByQuickSelect,
        testTopKIndices,
        performanceTest
    };
}