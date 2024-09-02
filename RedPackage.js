/** @format */
//【代码题】实现一个拼手气抢红包算法
// 这个算法的主要思想就是利用随机数，然后当随机不下去的时候,就搞个兜底的数然后下发
class RedPackage {
  // 所以首先得有钱数
  money = 0
  // 然后就是红包个数
  count = 0
  // 然后还得有个变量算一下还剩多少钱
  _remain = 0
  constructor(money, count) {
    // 这时候要存钱了
    money = money
    // 然后就是红包个数
    count = count
    // 然后还得有个变量算一下还剩多少钱
    _remain = money
  }
  // 然后就是搞一个发红包的方法
  openRedPackge() {
    // 首先要开始搞个兜底策略，如果 count 没了那么就表示抢完了
    if (this.count == 0) {
      console.log('红包抢完了')
      return
    }
    // 然后还要在判断一下只剩一个红包的情况，这时候就不用再用随机数了
    // 我们要给所有的都吐出去
    if (this.count == 1) {
      console.log(this._remain)
      // 然后也要把他给减了
      this._remain = 0
      this.count--
      return
    }
    // 然后当然就开始随机数了,注意随机数不能瞎随机

    const random = Math.random()
    // 在然后就要求红包了
    // 这里利用随机数求出来的是要吐出去的钱
    // 要有有纪律，有目的的随机,一定要利用剩余的钱随机
    newMoney = this._remain * random
    // 然后就是把这个随机数给搞成整数
    newMoney = Math.floor(newMoney * 100) / 100
    // 然后就是把他给吐出去了
    // 然后把他给减了 就是剩余的钱
    // 这里得用一个新变量，为啥呢，原因很简单，如果不够分了，我要对这个数据做处理了
    // 我现在提前处理了算怎么回事啊，所以如果不够分了，我在处理
    // 所以这一步要滞后，这样先跟解决问题
    // 我们用一个新变量来处理，如果够分就直接给这个新变量赋值，如果不够分再处理
    const new_remain = this._remain - newMoney

    // 然后把他的个数给减了
    // 这时候还得有判断 我剩下的钱不够分了咋办
    // 如果不够分了的话，得处理啊，处理办法只有一个，就之前的数不能算数啊
    // 那怎么办呢？ 就给 比还剩下的这点count 每个人 0.01 之后还多的分出去
    this.count--
    const allMoney = this.count * 0.01
    if (new_remain < allMoney) {
      const new_remain = this._remain - allMoney
      console.log(new_remain)

      // 然后剩下的这点钱就赋值就完了
      this._remain = allMeone
    } else {
      // 能处理就直接给这个新变量赋值
      // 然后把他的个数给减了
      this._remain = new_remain
      // 如果够分的话我们就直接吐出去
      console.log(newMoney)
    }
  }
}
