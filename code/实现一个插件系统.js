/**
 * 插件系统实现
 * 一个轻量级的JavaScript插件系统，支持插件的注册、初始化、启用、禁用和卸载等生命周期管理
 *
 * @format
 */

class PluginSystem {
  constructor(options = {}) {
    // 存储所有已注册的插件
    this.plugins = new Map()
    // 存储插件之间的依赖关系
    this.dependencies = new Map()
    // 存储钩子和对应的处理函数
    this.hooks = new Map()
    // 配置选项
    this.options = {
      strict: true, // 严格模式下，依赖未满足会抛出错误
      ...options,
    }
  }

  /**
   * 注册一个插件
   * @param {Object} plugin 插件对象
   * @returns {Boolean} 注册是否成功
   */
  register(plugin) {
    if (!plugin || typeof plugin !== 'object') {
      throw new Error('插件必须是一个对象')
    }

    if (!plugin.name) {
      throw new Error('插件必须有一个名称')
    }

    if (this.plugins.has(plugin.name)) {
      console.warn(`插件 "${plugin.name}" 已经注册过了`)
      return false
    }

    // 检查依赖
    if (plugin.dependencies && Array.isArray(plugin.dependencies)) {
      this.dependencies.set(plugin.name, plugin.dependencies)

      // 检查依赖是否已经注册
      if (this.options.strict) {
        for (const dep of plugin.dependencies) {
          if (!this.plugins.has(dep)) {
            throw new Error(
              `插件 "${plugin.name}" 依赖的插件 "${dep}" 尚未注册`,
            )
          }
        }
      }
    }

    // 存储插件
    this.plugins.set(plugin.name, {
      instance: plugin,
      enabled: false,
      initialized: false,
    })

    console.log(`插件 "${plugin.name}" 注册成功`)
    return true
  }

  /**
   * 初始化插件
   * @param {String} name 插件名称
   * @returns {Boolean} 初始化是否成功
   */
  initialize(name) {
    const plugin = this.plugins.get(name)

    if (!plugin) {
      console.warn(`插件 "${name}" 不存在`)
      return false
    }

    if (plugin.initialized) {
      console.warn(`插件 "${name}" 已经初始化过了`)
      return true
    }

    // 检查并初始化依赖
    const deps = this.dependencies.get(name) || []
    for (const dep of deps) {
      if (!this.plugins.has(dep)) {
        if (this.options.strict) {
          throw new Error(`插件 "${name}" 依赖的插件 "${dep}" 不存在`)
        }
        console.warn(`插件 "${name}" 依赖的插件 "${dep}" 不存在`)
        continue
      }

      if (!this.plugins.get(dep).initialized) {
        this.initialize(dep)
      }
    }

    // 调用插件的初始化方法
    if (typeof plugin.instance.initialize === 'function') {
      try {
        plugin.instance.initialize(this)
        plugin.initialized = true
        console.log(`插件 "${name}" 初始化成功`)
        return true
      } catch (error) {
        console.error(`插件 "${name}" 初始化失败:`, error)
        return false
      }
    }

    // 如果插件没有初始化方法，也视为初始化成功
    plugin.initialized = true
    console.log(`插件 "${name}" 初始化成功 (无初始化方法)`)
    return true
  }

  /**
   * 启用插件
   * @param {String} name 插件名称
   * @returns {Boolean} 启用是否成功
   */
  enable(name) {
    const plugin = this.plugins.get(name)

    if (!plugin) {
      console.warn(`插件 "${name}" 不存在`)
      return false
    }

    if (!plugin.initialized) {
      const initialized = this.initialize(name)
      if (!initialized) return false
    }

    if (plugin.enabled) {
      console.warn(`插件 "${name}" 已经启用`)
      return true
    }

    // 启用依赖
    const deps = this.dependencies.get(name) || []
    for (const dep of deps) {
      if (!this.plugins.has(dep)) {
        if (this.options.strict) {
          throw new Error(`插件 "${name}" 依赖的插件 "${dep}" 不存在`)
        }
        console.warn(`插件 "${name}" 依赖的插件 "${dep}" 不存在`)
        continue
      }

      if (!this.plugins.get(dep).enabled) {
        this.enable(dep)
      }
    }

    // 调用插件的启用方法
    if (typeof plugin.instance.enable === 'function') {
      try {
        plugin.instance.enable()
        plugin.enabled = true
        console.log(`插件 "${name}" 启用成功`)
        return true
      } catch (error) {
        console.error(`插件 "${name}" 启用失败:`, error)
        return false
      }
    }

    // 如果插件没有启用方法，也视为启用成功
    plugin.enabled = true
    console.log(`插件 "${name}" 启用成功 (无启用方法)`)
    return true
  }

  /**
   * 禁用插件
   * @param {String} name 插件名称
   * @returns {Boolean} 禁用是否成功
   */
  disable(name) {
    const plugin = this.plugins.get(name)

    if (!plugin) {
      console.warn(`插件 "${name}" 不存在`)
      return false
    }

    if (!plugin.enabled) {
      console.warn(`插件 "${name}" 已经禁用`)
      return true
    }

    // 检查是否有其他插件依赖于此插件
    for (const [pluginName, deps] of this.dependencies.entries()) {
      if (deps.includes(name) && this.plugins.get(pluginName).enabled) {
        if (this.options.strict) {
          throw new Error(
            `无法禁用插件 "${name}"，因为插件 "${pluginName}" 依赖于它`,
          )
        }
        console.warn(
          `警告: 禁用插件 "${name}" 可能会影响依赖它的插件 "${pluginName}"`,
        )
      }
    }

    // 调用插件的禁用方法
    if (typeof plugin.instance.disable === 'function') {
      try {
        plugin.instance.disable()
        plugin.enabled = false
        console.log(`插件 "${name}" 禁用成功`)
        return true
      } catch (error) {
        console.error(`插件 "${name}" 禁用失败:`, error)
        return false
      }
    }

    // 如果插件没有禁用方法，也视为禁用成功
    plugin.enabled = false
    console.log(`插件 "${name}" 禁用成功 (无禁用方法)`)
    return true
  }

  /**
   * 卸载插件
   * @param {String} name 插件名称
   * @returns {Boolean} 卸载是否成功
   */
  uninstall(name) {
    const plugin = this.plugins.get(name)

    if (!plugin) {
      console.warn(`插件 "${name}" 不存在`)
      return false
    }

    // 如果插件已启用，先禁用它
    if (plugin.enabled) {
      const disabled = this.disable(name)
      if (!disabled) return false
    }

    // 检查是否有其他插件依赖于此插件
    for (const [pluginName, deps] of this.dependencies.entries()) {
      if (deps.includes(name)) {
        if (this.options.strict) {
          throw new Error(
            `无法卸载插件 "${name}"，因为插件 "${pluginName}" 依赖于它`,
          )
        }
        console.warn(
          `警告: 卸载插件 "${name}" 可能会影响依赖它的插件 "${pluginName}"`,
        )
      }
    }

    // 调用插件的卸载方法
    if (typeof plugin.instance.uninstall === 'function') {
      try {
        plugin.instance.uninstall()
        this.plugins.delete(name)
        this.dependencies.delete(name)
        console.log(`插件 "${name}" 卸载成功`)
        return true
      } catch (error) {
        console.error(`插件 "${name}" 卸载失败:`, error)
        return false
      }
    }

    // 如果插件没有卸载方法，也视为卸载成功
    this.plugins.delete(name)
    this.dependencies.delete(name)
    console.log(`插件 "${name}" 卸载成功 (无卸载方法)`)
    return true
  }

  /**
   * 注册一个钩子处理函数
   * @param {String} hookName 钩子名称
   * @param {Function} handler 处理函数
   * @param {Object} context 上下文对象，通常是插件实例
   */
  registerHook(hookName, handler, context = null) {
    if (typeof handler !== 'function') {
      throw new Error('钩子处理函数必须是一个函数')
    }

    if (!this.hooks.has(hookName)) {
      this.hooks.set(hookName, [])
    }

    this.hooks.get(hookName).push({
      handler,
      context,
    })
  }

  /**
   * 触发一个钩子
   * @param {String} hookName 钩子名称
   * @param {...any} args 传递给钩子处理函数的参数
   * @returns {Array} 所有处理函数的返回值数组
   */
  applyHook(hookName, ...args) {
    if (!this.hooks.has(hookName)) {
      return []
    }

    const handlers = this.hooks.get(hookName)
    const results = []

    for (const { handler, context } of handlers) {
      try {
        const result = context ? handler.apply(context, args) : handler(...args)
        results.push(result)
      } catch (error) {
        console.error(`执行钩子 "${hookName}" 时出错:`, error)
        results.push(null)
      }
    }

    return results
  }

  /**
   * 获取所有已注册的插件
   * @returns {Array} 插件列表
   */
  getPlugins() {
    const result = []
    for (const [name, plugin] of this.plugins.entries()) {
      result.push({
        name,
        enabled: plugin.enabled,
        initialized: plugin.initialized,
        instance: plugin.instance,
      })
    }
    return result
  }

  /**
   * 初始化所有插件
   */
  initializeAll() {
    for (const name of this.plugins.keys()) {
      this.initialize(name)
    }
  }

  /**
   * 启用所有插件
   */
  enableAll() {
    for (const name of this.plugins.keys()) {
      this.enable(name)
    }
  }

  /**
   * 禁用所有插件
   */
  disableAll() {
    // 反向禁用，避免依赖问题
    const names = Array.from(this.plugins.keys()).reverse()
    for (const name of names) {
      this.disable(name)
    }
  }
}

// 示例插件
class LoggerPlugin {
  constructor() {
    this.name = 'logger'
  }

  initialize(system) {
    console.log('Logger插件初始化')
    // 注册钩子
    system.registerHook('log', this.log, this)
  }

  enable() {
    console.log('Logger插件已启用')
  }

  disable() {
    console.log('Logger插件已禁用')
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`)
  }
}

class NotificationPlugin {
  constructor() {
    this.name = 'notification'
    this.dependencies = ['logger'] // 依赖Logger插件
  }

  initialize(system) {
    console.log('Notification插件初始化')
    this.system = system
  }

  enable() {
    console.log('Notification插件已启用')
  }

  notify(message) {
    // 使用logger插件的钩子
    this.system.applyHook('log', `通知: ${message}`, 'notification')
    console.log(`🔔 通知: ${message}`)
  }
}

// 使用示例
function runExample() {
  // 创建插件系统实例
  const pluginSystem = new PluginSystem()

  // 注册插件
  const logger = new LoggerPlugin()
  const notification = new NotificationPlugin()

  pluginSystem.register(logger)
  pluginSystem.register(notification)

  // 初始化并启用插件
  pluginSystem.enableAll()

  // 使用插件功能
  pluginSystem.applyHook('log', '这是一条日志消息')

  const notificationPlugin = pluginSystem.plugins.get('notification').instance
  notificationPlugin.notify('这是一条重要通知')

  // 禁用插件
  pluginSystem.disable('notification')
  pluginSystem.disable('logger')

  // 查看所有插件状态
  console.log('插件状态:', pluginSystem.getPlugins())
}

// 运行示例
runExample()

// 导出插件系统
module.exports = {
  PluginSystem,
  LoggerPlugin,
  NotificationPlugin,
}

// 一个插件系统需要包含以下内容
// 1、 注册，钩子，依赖，卸载 上下文传入 ,还要加入一个钩子通信

class plugin {
  constructor() {
    // 组件
    this.pluginArr = []
    // 钩子
    this.hooks = []
    // 依赖
    this.dependencies = []
    // 销毁
    this.destroy = []
  }
  // 插件注册
  register(plugin) {
    // 兜底暂时不做了
    this.pluginArr.push(plugin)
    if (plugin.hook) {
      this.registerHookp(lugin.hook)
    }
    if (plugin.dependencies) {
      this.dependencies.push(...plugin.dependencies)
    }
  }
  // 钩子注册
  registerHook(hook) {
    // 这里为了简化也不搞那么麻烦了
    this.hooks.push(hook)
  }
  // 执行插件初始化
  init() {
    this.pluginArr.forEach((item) => {
      this.destroy(item.init())
    })
  }
  // 卸载插件
  uninit() {
    this.destroy.forEach((item) => {
      item.destroy()
    })
  }
}

const p = new plugin()

class log {
  constructor() {
    this.name = 'log'
    this.context = {}
    this.dependencies = []
  }
  init(context) {
    console.log('log init')
    this.context = context
  }
  destroy() {
    console.log('log destroy')
  }
  hook(context) {
    // 在这里也可以注册运行时插件
    context.registerHook()
  }
}
p.register(log)
