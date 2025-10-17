/** @format */

class PublishSubscribe {
  constructor() {
    this.events = {} // 存储事件类型和对应的回调函数数组
  }

  // 发布事件
  publish(type, ...args) {
    if (!this.events[type]) {
      console.warn(`事件类型 "${type}" 没有订阅者`)
      return
    }
    
    // 执行所有订阅该事件的回调函数
    this.events[type].forEach(callback => {
      try {
        callback(...args)
      } catch (error) {
        console.error(`执行回调函数时出错:`, error)
      }
    })
  }

  // 订阅事件
  subscribe(type, fn) {
    if (typeof fn !== 'function') {
      console.error('订阅回调必须是一个函数')
      return
    }

    // 如果事件类型不存在，创建空数组
    if (!this.events[type]) {
      this.events[type] = []
    }
    
    // 添加回调函数到数组中
    this.events[type].push(fn)
    
    // 返回取消订阅的函数
    return () => {
      this.unsubscribe(type, fn)
    }
  }

  // 取消订阅
  unsubscribe(type, fn) {
    if (!this.events[type]) {
      console.warn(`事件类型 "${type}" 不存在`)
      return
    }
    
    // 从数组中移除指定的回调函数
    this.events[type] = this.events[type].filter(callback => callback !== fn)
    
    // 如果没有订阅者了，删除该事件类型
    if (this.events[type].length === 0) {
      delete this.events[type]
    }
  }

  // 删除整个事件类型
  removeEvent(type) {
    if (this.events[type]) {
      delete this.events[type]
      console.log(`已删除事件类型 "${type}"`)
    } else {
      console.warn(`事件类型 "${type}" 不存在`)
    }
  }

  // 获取所有事件类型
  getEventTypes() {
    return Object.keys(this.events)
  }

  // 获取指定事件的订阅者数量
  getSubscriberCount(type) {
    return this.events[type] ? this.events[type].length : 0
  }

  // 清空所有事件
  clear() {
    this.events = {}
  }
}

// 测试示例
const ps = new PublishSubscribe()

// 订阅事件
const unsubscribe1 = ps.subscribe('userLogin', function (user) {
  console.log('用户登录:', user.name)
})

ps.subscribe('userLogin', function (user) {
  console.log('发送欢迎邮件给:', user.email)
})

ps.subscribe('userLogout', function (user) {
  console.log('用户登出:', user.name)
})

// 发布事件
ps.publish('userLogin', { name: '张三', email: 'zhangsan@example.com' })

// 取消订阅
unsubscribe1()

// 再次发布，只会执行剩余的订阅者
ps.publish('userLogin', { name: '李四', email: 'lisi@example.com' })

// 发布不存在的任务
ps.publish('nonExistentEvent')

// 获取信息
console.log('所有事件类型:', ps.getEventTypes())
console.log('userLogin 订阅者数量:', ps.getSubscriberCount('userLogin'))
