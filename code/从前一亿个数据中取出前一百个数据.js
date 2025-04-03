// 实现一个最小堆类
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 获取父节点的索引
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // 获取左子节点的索引
    getLeftIndex(index) {
        return 2 * index + 1;
    }

    // 获取右子节点的索引
    getRightIndex(index) {
        return 2 * index + 2;
    }

    // 交换两个节点
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // 向上调整
    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // 向下调整
    heapifyDown(index) {
        const size = this.heap.length;
        let minIndex = index;

        while (true) {
            const leftIndex = this.getLeftIndex(index);
            const rightIndex = this.getRightIndex(index);

            if (leftIndex < size && this.heap[leftIndex] < this.heap[minIndex]) {
                minIndex = leftIndex;
            }

            if (rightIndex < size && this.heap[rightIndex] < this.heap[minIndex]) {
                minIndex = rightIndex;
            }

            if (minIndex !== index) {
                this.swap(index, minIndex);
                index = minIndex;
            } else {
                break;
            }
        }
    }

    // 插入元素
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // 删除堆顶元素
    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return min;
    }

    // 获取堆顶元素
    peek() {
        return this.heap[0];
    }

    // 获取堆的大小
    size() {
        return this.heap.length;
    }
}

// 从一亿个数据中取出前100个最大的数据
function getTop100(arr) {
    const k = 100;
    const minHeap = new MinHeap();

    // 先将前k个元素加入最小堆
    for (let i = 0; i < k && i < arr.length; i++) {
        minHeap.insert(arr[i]);
    }

    // 从第k+1个元素开始遍历
    for (let i = k; i < arr.length; i++) {
        // 如果当前元素大于堆顶元素，则移除堆顶元素并将当前元素插入堆中
        if (arr[i] > minHeap.peek()) {
            minHeap.remove();
            minHeap.insert(arr[i]);
        }
    }

    // 将最小堆中的元素按从大到小的顺序返回
    const result = [];
    while (minHeap.size() > 0) {
        result.unshift(minHeap.remove());
    }

    return result;
}

// 测试代码
function generateTestData(size) {
    const data = [];
    for (let i = 0; i < size; i++) {
        data.push(Math.floor(Math.random() * 1000000));
    }
    return data;
}

// 生成测试数据并测试
const testSize = 1000000; // 为了便于测试，这里使用100万个数据
const testData = generateTestData(testSize);
console.time('getTop100');
const top100 = getTop100(testData);
console.timeEnd('getTop100');

console.log('Top 100 numbers:', top100);
console.log('Is sorted correctly:', top100.every((v, i) => i === 0 || v <= top100[i - 1]));