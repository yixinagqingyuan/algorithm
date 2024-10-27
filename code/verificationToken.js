/** @format */
// 前端与服务器通信时，通过以下规则对发送的数据进行签名：

// 假设要发送的数据为：

// const data = 'name=alice&age=19&address=nanshan';

// 前端签名规则如下：

// 1. 根据参数名进行字典序排序

// const dataAfterSort = 'address=nanshan&age=19&name=alice';

// 2. 把前后端事先协定好的一个固定的key值拼接到上一步得到的字符串中（假设key的值固定为： a1s2d3f4）

// const dataWithKey = 'address=nanshan&age=19&name=alice&key=a1s2d3f4';

// 3. 对上一步的字符串进行md5签名

// const token = md5('address=nanshan&age=19&name=alice&key=a1s2d3f4');

// 4. 把原数据加上签名后作为最终数据

// const result = data + token;

// 5. 数据拼接在url中发送给服务器（url中可能有额外的hash数据，在处理时需要注意）

// const url = https://qq.com?name=alice&age=19&address=nanshan&token=XXXXXXX#title

// 服务器需要对url做解析后，验证签名是否正确，若签名正确返回url中传值对象，若签名错误则返回空对象，请实现服务器的签名校验、获取参数的逻辑

// 代码模板（拷贝以下代码到答题版，实现getParamsFromUrl函数）：
// 样例1:
// [输入]
// name=alice&age=19&address=nanshan&token=5a864844e914514561aff395dde18ed1
// [输出]
// {
//   name='alice',
//   age='19',
//   address='nanshan',
// }
// [说明]
// 假设input中的token是有效的
// 样例2:
// [输入]
// name=alice&age=19&address=nanshan&token=aaa
// [输出]
// {}
// [说明]
// 假设input中的token是错误的

const crypto = require('crypto')
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.question('', (url) => {
//   //   console.log(getParamsFromUrl(url));
//   rl.close()
// })

// 这个函数不需要候选人实现
function md5(data) {
  return crypto.createHash('md5').update(data).digest('hex')
}

// 这一题看似复杂，也不算很难，实则很简单
// 他的本质就是给字符串解析成对象，只不过弄了个 token 迷惑一下

// 首先，我们要知道，token 是如何生成的
// token 其实就是利用 md5 生成了，本质上他是利用当前的的值生成的摘要，所以我们做这个题的重点应该是
// 比较他传过去的 token 和我们生成的 token 是否相等
// 其中这个题还有个规律，因为他参数传过来可能是乱序的，那么就要给乱序的代码生成为非乱序的
// 也就是按照字母排序，这里科普一个知识点，当字母的比较是按照ascii值码进行比较，所以
// 我们如果想要比较两个字母的大小，完全没有必要sort里头传函数，直接比较就行
// 当然你也可以装逼一点用localeCompare， 这个专门用来比较字符串大小的
const verificationToken = (url) => {
  // 好，我们开始
  // 首先当然是要对url 进行解码，这里我们解码的方式有很多，比如利用  split,
  // 这里我们尝试下正则,正则确实很难，背不会记不住，但可以理解
  // 我们这里正则的本质是什么，是利用匹配利用一套规则匹配我们要的字符
  // 而这里我们要什么。要等于号两边的值啊，于是
  // 我们可以利用正则的 () 注意是子集匹配，来匹配我们要的字符
  // 接下来就要开始考虑括号两边的内容了，
  // 我们还是对着正则表达式手册来看吧[^abc] 表示不包含 我们不能包含什么呢？
  // ? 指定不能有， =也指定不能有
  //+ 表示匹配一次或者多次
  // 于是就产生了下面的内容
  // 这个正则史怎么匹配的呢？ 
  // 其实就是利用俩局部匹配最后匹配出来，我想要的结果，而 所谓的局部匹配就是()
  // 然后我们只需要在括号中排除一些我们不需要的字符就可以，比如？=& 这三个
  // 至于排除那就是利用[^] 然后在来个加号+ 一次或者多次匹配零次或者多次是*
  // 后方由于我们等于号后头跟玩我们要的内容，只能跟& 所以当我们只需要排除&就能拿到中间的内容
  // 因为他遇见&就会停止，而一定最先会遇见&，所以我们防住就可以了
  // 如此一来我们就可以这样/([^?=&]+)=([^&]+)/ g

  const getParams = (url) => {
    const params = {}
    const reg = /([^&=?]+)=([^&]+)/g
    url.replace(reg, (_, key, value) => {
      params[key] = value
    })
    return params
  }
  // 第一步提取 params
  const { token, ...newparams } = getParams(url)
  console.log(newparams)
  // 下一步就要开始排序了，因为这个 token 是根据 排序后的内容生成的
  //在前面的内容中说过，我们可以利用 localeCompare,但是由于字母比较直接就是ascii码 第一个相同就比较第二个
  // 所以我们根本不用这么麻烦,直接 sort 比较
  // 然后我们就可以开始生成 token 了
  let newTokenStr = ''
  Object.keys(newparams)
    .sort()
    .forEach((val) => {
      newTokenStr += `${val}=${newparams[val]}&`
    })
  // 此时就能得到一个拼接好的含有以已经拼接好参数的字符串
  console.log(newTokenStr)
  // 接下来就可以用md5 加密了
  const newToken = md5(`${newTokenStr}key=a1s2d3f4`)
  // 接下来就很简单了，比较新旧 token 就行了
  console.log(token === newToken ? newparams : {})
}

verificationToken(
  'name=alice&age=19&address=nanshan&token=5a864844e914514561aff395dde18ed1',
)
