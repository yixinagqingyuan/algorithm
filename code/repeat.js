/** @format */

// 找出字符串中连续重复次数最多的字符，输出该字符，开始位置，结束位置
const findMostRepeatedChar = (str) => {
  if (!str || str.length === 0) {
    return { char: '', start: -1, end: -1 };
  }

  let maxChar = str[0];
  let maxStart = 0;
  let maxEnd = 0;
  let maxLength = 1;

  let currentChar = str[0];
  let currentStart = 0;
  let currentLength = 1;

  // 使用双指针遍历字符串
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      // 当前字符与前一个字符相同，增加当前长度
      currentLength++;
      
      // 更新最大重复记录
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxChar = currentChar;
        maxStart = currentStart;
        maxEnd = i;
      }
    } else {
      // 遇到新字符，重置当前计数
      currentChar = str[i];
      currentStart = i;
      currentLength = 1;
    }
  }

  return {
    char: maxChar,
    start: maxStart,
    end: maxEnd
  };
};

// 测试用例
const test1 = findMostRepeatedChar('bsssssssbssseeee');
console.log('测试用例1:', test1);

const test2 = findMostRepeatedChar('aabbbcccc');
console.log('测试用例2:', test2);

const test3 = findMostRepeatedChar('a');
console.log('测试用例3:', test3);

const test4 = findMostRepeatedChar('');
console.log('测试用例4:', test4);
