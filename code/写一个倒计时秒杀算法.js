/** @format */

// 秒杀状态枚举
const SeckillStatus = {
  WAITING: 'waiting', // 等待开始
  ACTIVE: 'active', // 秒杀进行中
  ENDED: 'ended', // 已结束
  SOLD_OUT: 'sold_out', // 已售罄
}

// 倒计时秒杀算法类
class CountdownSeckillAlgorithm {
  constructor(productId, startTime, endTime, totalStock) {
    this.productId = productId
    this.startTime = new Date(startTime)
    this.endTime = new Date(endTime)
    this.totalStock = totalStock
    this.currentStock = totalStock
    this.soldCount = 0

    // 用户购买记录
    this.userPurchases = new Set()

    // 性能统计
    this.totalRequests = 0
    this.successfulPurchases = 0
    this.failedPurchases = 0

    // 请求限流队列
    this.requestQueue = []
    this.maxQueueSize = 1000
  }

  // 获取倒计时信息
  getCountdownInfo() {
    const currentTime = new Date()
    let countdownSeconds, status

    // 计算到开始时间的倒计时
    if (currentTime < this.startTime) {
      countdownSeconds = Math.floor((this.startTime - currentTime) / 1000)
      status = SeckillStatus.WAITING
    }
    // 计算到结束时间的倒计时
    else if (currentTime < this.endTime) {
      countdownSeconds = Math.floor((this.endTime - currentTime) / 1000)
      status =
        this.currentStock > 0 ? SeckillStatus.ACTIVE : SeckillStatus.SOLD_OUT
    } else {
      countdownSeconds = 0
      status = SeckillStatus.ENDED
    }

    return {
      productId: this.productId,
      status: status,
      countdownSeconds: countdownSeconds,
      currentStock: this.currentStock,
      totalStock: this.totalStock,
      soldCount: this.soldCount,
      startTime: this.startTime.toISOString(),
      endTime: this.endTime.toISOString(),
      currentTime: currentTime.toISOString(),
    }
  }

  // 判断秒杀是否进行中
  isSeckillActive() {
    const currentTime = new Date()
    return (
      this.startTime <= currentTime &&
      currentTime <= this.endTime &&
      this.currentStock > 0
    )
  }

  // 处理用户购买请求
  purchaseRequest(userId) {
    this.totalRequests++

    // 检查用户是否已经购买过
    if (this.userPurchases.has(userId)) {
      this.failedPurchases++
      return {
        success: false,
        message: '用户已购买过该商品',
        errorCode: 'ALREADY_PURCHASED',
      }
    }

    // 检查秒杀是否激活
    if (!this.isSeckillActive()) {
      this.failedPurchases++
      const statusInfo = this.getCountdownInfo()

      if (statusInfo.status === SeckillStatus.WAITING) {
        return {
          success: false,
          message: `秒杀未开始，还有${statusInfo.countdownSeconds}秒`,
          errorCode: 'NOT_STARTED',
        }
      } else if (statusInfo.status === SeckillStatus.ENDED) {
        return {
          success: false,
          message: '秒杀已结束',
          errorCode: 'ENDED',
        }
      } else {
        return {
          success: false,
          message: '商品已售罄',
          errorCode: 'SOLD_OUT',
        }
      }
    }

    // 原子性库存扣减（JavaScript单线程特性）
    if (this.currentStock <= 0) {
      this.failedPurchases++
      return {
        success: false,
        message: '商品已售罄',
        errorCode: 'SOLD_OUT',
      }
    }

    // 扣减库存
    this.currentStock--
    this.soldCount++

    // 记录用户购买
    this.userPurchases.add(userId)
    this.successfulPurchases++

    return {
      success: true,
      message: '购买成功',
      remainingStock: this.currentStock,
      orderId: `ORDER_${this.productId}_${userId}_${Date.now()}`,
    }
  }

  // 获取统计信息
  getStatistics() {
    return {
      totalRequests: this.totalRequests,
      successfulPurchases: this.successfulPurchases,
      failedPurchases: this.failedPurchases,
      successRate:
        this.totalRequests > 0
          ? ((this.successfulPurchases / this.totalRequests) * 100).toFixed(2)
          : 0,
      currentStock: this.currentStock,
      soldCount: this.soldCount,
    }
  }

  // 重置统计数据
  resetStatistics() {
    this.totalRequests = 0
    this.successfulPurchases = 0
    this.failedPurchases = 0
  }
}

// 秒杀管理器 - 支持多商品秒杀
class SeckillManager {
  constructor() {
    this.seckillProducts = new Map()
  }

  // 添加秒杀商品
  addSeckillProduct(productId, startTime, endTime, totalStock) {
    this.seckillProducts.set(
      productId,
      new CountdownSeckillAlgorithm(productId, startTime, endTime, totalStock),
    )
  }

  // 获取指定商品的倒计时信息
  getProductCountdown(productId) {
    const product = this.seckillProducts.get(productId)
    return product ? product.getCountdownInfo() : null
  }

  // 购买指定商品
  purchaseProduct(productId, userId) {
    const product = this.seckillProducts.get(productId)
    if (!product) {
      return {
        success: false,
        message: '商品不存在',
        errorCode: 'PRODUCT_NOT_FOUND',
      }
    }

    return product.purchaseRequest(userId)
  }

  // 获取所有活跃的秒杀信息
  getAllActiveSeckills() {
    const result = {}
    for (const [productId, seckill] of this.seckillProducts) {
      const countdownInfo = seckill.getCountdownInfo()
      if (countdownInfo.status !== SeckillStatus.ENDED) {
        result[productId] = countdownInfo
      }
    }
    return result
  }

  // 获取所有商品统计信息
  getAllStatistics() {
    const result = {}
    for (const [productId, seckill] of this.seckillProducts) {
      result[productId] = seckill.getStatistics()
    }
    return result
  }
}

// 倒计时显示工具
class CountdownDisplay {
  constructor(manager, productId, elementId) {
    this.manager = manager
    this.productId = productId
    this.elementId = elementId
    this.intervalId = null
  }

  // 开始倒计时显示
  start() {
    this.intervalId = setInterval(() => {
      const info = this.manager.getProductCountdown(this.productId)
      if (info) {
        this.updateDisplay(info)

        // 如果秒杀结束，停止倒计时
        if (info.status === SeckillStatus.ENDED) {
          this.stop()
        }
      }
    }, 1000)
  }

  // 停止倒计时显示
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  // 更新显示内容
  updateDisplay(info) {
    const element = document.getElementById(this.elementId)
    if (element) {
      const hours = Math.floor(info.countdownSeconds / 3600)
      const minutes = Math.floor((info.countdownSeconds % 3600) / 60)
      const seconds = info.countdownSeconds % 60

      const timeStr = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

      let statusText
      switch (info.status) {
        case SeckillStatus.WAITING:
          statusText = `距离开始还有: ${timeStr}`
          break
        case SeckillStatus.ACTIVE:
          statusText = `秒杀进行中，剩余时间: ${timeStr}`
          break
        case SeckillStatus.SOLD_OUT:
          statusText = '商品已售罄'
          break
        case SeckillStatus.ENDED:
          statusText = '秒杀已结束'
          break
      }

      element.innerHTML = `
                <div>商品: ${info.productId}</div>
                <div>状态: ${statusText}</div>
                <div>库存: ${info.currentStock}/${info.totalStock}</div>
                <div>已售: ${info.soldCount}</div>
            `
    }
  }
}

// 使用示例和测试
function demo() {
  // 创建秒杀管理器
  const manager = new SeckillManager()

  // 添加秒杀商品（开始时间设为5秒后，持续30秒）
  const startTime = new Date(Date.now() + 5000)
  const endTime = new Date(startTime.getTime() + 30000)

  manager.addSeckillProduct('PHONE_001', startTime, endTime, 100)

  console.log('秒杀系统初始化完成')
  console.log(`商品PHONE_001将在5秒后开始秒杀，持续30秒，库存100件`)

  // 模拟倒计时显示
  const displayInterval = setInterval(() => {
    const countdownInfo = manager.getProductCountdown('PHONE_001')
    if (countdownInfo) {
      console.clear()
      console.log(`状态: ${countdownInfo.status}`)
      console.log(`倒计时: ${countdownInfo.countdownSeconds}秒`)
      console.log(
        `库存: ${countdownInfo.currentStock}/${countdownInfo.totalStock}`,
      )
      console.log(`已售: ${countdownInfo.soldCount}`)

      if (countdownInfo.status === SeckillStatus.ENDED) {
        clearInterval(displayInterval)
        console.log('\n秒杀结束')
        console.log('最终统计:', manager.getAllStatistics())
      }
    }
  }, 1000)

  // 模拟用户购买（秒杀开始后）
  setTimeout(() => {
    console.log('\n开始模拟用户购买...')

    for (let i = 1; i <= 10; i++) {
      setTimeout(() => {
        const result = manager.purchaseProduct('PHONE_001', `user_${i}`)
        console.log(`用户${i}购买结果:`, result.message)
      }, i * 100)
    }
  }, 6000)

  return manager
}

// 如果在Node.js环境中运行
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SeckillStatus,
    CountdownSeckillAlgorithm,
    SeckillManager,
    CountdownDisplay,
  }
}

// 如果在浏览器环境中运行
if (typeof window !== 'undefined') {
  window.SeckillStatus = SeckillStatus
  window.CountdownSeckillAlgorithm = CountdownSeckillAlgorithm
  window.SeckillManager = SeckillManager
  window.CountdownDisplay = CountdownDisplay
  window.seckillDemo = demo
}
