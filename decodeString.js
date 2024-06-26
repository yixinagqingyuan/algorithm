/** @format */

//样例输入：s = "3[a2[c]]"
//样例输出：accaccacc
// 这一题叫字符串解码，就是把字符串带上括号的地方给拆开
// 有了这个信息，我们就有了阿里味的抓手，中括号，
// 我们利用中括号，来进行拆解
const decodeString = (str) => {
  //在开始算法之前，我们首先，当然要搞个变量存结果啊
  let answer = ''
  let numberArr = []
  let numStr = ''
  let bracketsArr = []
  let letterArr = []
  let letterStr = ''
  // 然后当然得遍历啊，在遍历的过程中，当然要简单的判断三种数据类型， 数字， 字母， 括号
  // 走起，遍历
  for (let i = 0; i < str.length; i++) {
    // 我们先给这个单个字符串弄出来
    let s = str[i]

    // 至于判断类型，我们当然要从数字开始啊，至于为什么从数字开始，原因很简单，他符合直觉啊，我就乐意这么干
    // 开始判断数字的情况，众所周知，字符串遍历出来的结果是什么，当然还是字符串，所以我们 首先除去[] 再出去字母
    // 怎么除去字母呢？ 他本来是个字符串，我怎么区分字符串是字母和数字呢？
    // 招数有很多，比如正则，比如 使用ASCII码范围
    // 之前我们相当啰嗦的，写了个垃圾的判断方式，利用非数字变成 number 之后会变成 nan
    // 这是非常垃圾的
    // 所以我们用正则重写

    // if (isNaN(Number(s))) {
    // \d 的情况， 就是 1-9 的数字我们利用 test 来判断就可以判断数字，啊，不经感叹，人类的智慧啊
    if (/^\d/.test(s)) {
      // 是数字的情况,当我们拿到数字之后，我们发现一个数字是匹配一个括号的，因为在数字之后就是括号
      // 于是我们可以利用一个栈给他弄进去
      // 这里还有多个的情况所以依然要累加
      // numberArr.push(s)
      // 同样的，还是需要在[的时候给他push 过去
      numStr += s
    } else if (s == '[') {
      // 其实后来发现，这一步是可以不用要的，因为没有卵用
      // 由于判断字母比较费劲，需要的正则比较麻烦可以这样写[a-zA-Z] 座椅我们此时要符合直觉的判断方式，直接 判断剩下的两个就完事
      // 同样利用栈的能力处理
      // 经过测试发现这个还有用还是不能少
      //
      letterArr.push(letterStr)
      numberArr.push(numStr)
      // 塞进去之后还要重置，最后我们发现 letterstr 的最后的结果是不用重置的，我们在最后给他加上就行
      letterStr = ''
      numStr = ''
      // bracketsArr.push(s)
    } else if (s == ']') {
      // 前三个情况都入栈，根据规律只有这一种情况 出栈，因为到他了，代表当前的栈顶要干掉了要给他解码了，于是我们开始
      // 我们当然要单独的取出跟他这个括号关联的字母和数字啊
      let num = numberArr.pop()
      let letter = letterArr.pop()
      console.log(num)
      console.log(letter)
      // 这个情况其实是没用的
      //let brackets = bracketsArr.pop()
      // 这时候发现还不对，我们还得有个变量存零时的字符串
      // let res = ''
      // let content = letter + answer
      //repeat 可以解决问题
      // for (let i = 0; i < Number(num); i++) {
      //   // 其实加等于的都是之前的结果加上这个内容
      //   res += content
      // }
      // 之前的逻辑有问题，这里我们还需要照顾 a[b]c[d] 的情况
      // 所以还需要变换一下
      // 这里是有技巧的，什么情况呢
      // 因为他层级的本质就是将当前的值数字之后的值，解耦之后在和前头拼接
      // 而恰巧的是，我们这种解耦，我在之前给他推入数组中，导致当遍历拼接完成后
      // 恰巧在多层嵌套中， 作为上一个基础值，从而完美解决，多层问题，单层嵌套问题
      letterStr = letter + letterStr.repeat(Number(num))
      console.log(letterStr)
      // 当遍历之后还要给他赋值出去 为了方便下一次使用
      // answer = res
    } else {
      // 剩余字母的情况这时候需要拿到当前字母,所以还是要利用数组来解决问题
      // 后来发现不能这么解决因为有比如 bt 这种奇葩情况
      // 所以 push 还得放在 [ 进行 ,这样才能是正确的
      // letterArr.push(s)
      letterStr += s
    }
  }
  console.log(letterStr)
}

decodeString('3[a]2[bc2[d3[e]]]')
