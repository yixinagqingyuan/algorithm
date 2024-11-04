/** @format */
/**
 *
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
*/
// 这一题和字符串的重复那一题，感觉是有异曲同工但是这一题有个问题就是他要在原处修改 不能改变原数组

const numRemoveDuplicates = (arr) => {
  // 这一题的主要思路是不能改变元数组 ,然后我们是要在原数组中处理，但是不管在哪处理，他都需要做一件事情
  // 那就是遍历，也就是 for 循环
  // 由于我们要给length 定死，不然我们删了某一项之后，他删了某一项之后，length 就会变
  const length = arr.length;
  // 由于 length 遍历 所以 我们就不能用 遍历的 i 来解决问题
  //  所以要有个 curr 和index 那么当然要从 1 开始
  let curr = 1; // 这是是为了记录重复的数量
  let index = 1; // 这是为了记录真实的记录位置，这个 i 其实就是为了给当前的 length 搞完
  // 之所以要从 1开始
  for (let i = 1; i < length; i++) {
    // 这个题我们的第一个思路就是要 for 循环
    // 然后判断是否重复
    // 题意说过，只要大于 2 就要给他干掉，这是题意
    if (arr[index] == arr[index - 1]) {
      // 首先我只要判断相等那么就要++ 为啥呢？原因很简单curr 需要累加啊
      curr++;
      console.log(curr);
      // 然后当累加完了发现大于等于2的时候就要干掉他
      if (curr > 2) {
        // 这时候就要删除了
        arr.splice(index, 1);
        // 删除之后，需要回退一位 这时候就要--
        index--;
        // 这个也得--因为万一下一次又是重复的呢,其实这一步不处理也行，因为他删除了arr 跟curr 屁关系没有
        // curr--;
      }
    } else {
      // 因为不一样了说明得从新开始了，于是，我们就需要重新开始，但是由于此时没有重复的了，那么 index 就要++
      // 为了能找到下一个的情况
      curr = 1;
    }
    // 这个是永远++
    index++;
  }
  console.log(arr);
};

numRemoveDuplicates([0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3]);