<!-- @format -->

# 设计模式热门考题

## 1、请用一句话概括，什么是设计模式？为什么要用？

**设计模式**是总结和提炼出的一套可复用的解决方案，用于应对软件开发中常见的设计问题，**目的是提高代码的可维护性、可扩展性和重用性，同时降低开发难度和耦合度**。

## 2、谈谈你了解的最常见的几种设计模式，说说他们的应用场景

以下是几种常见的设计模式及其应用场景：

---

### **1. 单例模式（Singleton Pattern）**

- **定义**：保证一个类只有一个实例，并提供全局访问点。
- **应用场景**：
  - 配置管理类（例如读取应用配置）。
  - 日志管理（确保日志文件唯一）。
  - 数据库连接池（避免多次实例化浪费资源）。
- **关键点**：私有化构造函数，提供一个静态方法获取实例。

---

### **2. 工厂模式（Factory Pattern）**

- **定义**：提供一个创建对象的接口，而不指定具体的类。
- **应用场景**：
  - 创建复杂对象时隐藏其创建细节。
  - 当程序需要在运行时动态决定实例化哪个类。
  - 数据库访问层（根据不同数据库类型创建对应的连接）。
- **变种**：简单工厂模式、工厂方法模式、抽象工厂模式。

---

### **3. 策略模式（Strategy Pattern）**

- **定义**：定义一系列算法，将每种算法封装，并使它们可以互换。
- **应用场景**：
  - 支付方式选择（支付宝、微信、信用卡等）。
  - 订单排序策略（按价格、销量、时间排序）。
  - 不同的日志记录策略。
- **关键点**：使用接口或抽象类定义不同策略，实现动态切换。

---

### **4. 观察者模式（Observer Pattern）**

- **定义**：当一个对象状态发生变化时，自动通知依赖它的对象。
- **应用场景**：
  - 事件订阅系统（如邮件通知、消息推送）。
  - 数据绑定（前端框架中如 Vue 的响应式数据更新）。
  - 新闻客户端（订阅新闻频道，自动接收更新）。
- **关键点**：被观察者维护一组观察者列表，状态改变时调用观察者的更新方法。

---

### **5. 代理模式（Proxy Pattern）**

- **定义**：为另一个对象提供一个代理对象，控制对原对象的访问。
- **应用场景**：
  - 网络代理（如代理服务器）。
  - 缓存代理（减少数据库或接口的访问次数）。
  - 权限控制（代理检查用户是否有权限访问资源）。
- **变种**：静态代理、动态代理、虚拟代理。

---

### **6. 装饰器模式（Decorator Pattern）**

- **定义**：动态地给对象添加新功能，而不改变其结构。
- **应用场景**：
  - 添加额外的功能（如 UI 元素添加滚动条、边框等）。
  - 数据流处理（如 Java 的 I/O 流）。
  - 动态权限校验。
- **关键点**：将功能拆分为独立的装饰类，按需要组合使用。

---

### **7. 适配器模式（Adapter Pattern）**

- **定义**：将一个类的接口转换成用户期望的另一个接口。
- **应用场景**：
  - 系统集成（新旧系统的数据交互）。
  - 封装第三方库（将其接口调整为符合业务需求）。
  - 不兼容硬件设备的适配。
- **关键点**：实现目标接口，并持有被适配对象的实例。

---

### **8. 模板方法模式（Template Method Pattern）**

- **定义**：定义一个算法的框架，将具体实现步骤延迟到子类。
- **应用场景**：
  - 固定流程操作（如文档生成流程）。
  - 数据分析系统（固定数据处理框架，不同处理方式交由子类实现）。
  - 游戏开发（固定游戏逻辑框架，扩展具体细节）。
- **关键点**：抽象类定义算法框架，子类实现具体步骤。

---

### **9. 命令模式（Command Pattern）**

- **定义**：将请求封装为对象，从而允许使用不同的请求、队列或日志来参数化对象。
- **应用场景**：
  - 实现撤销/重做功能（如文本编辑器中的撤销）。
  - 任务队列（异步执行操作）。
  - 日志记录和事务操作。
- **关键点**：封装命令对象并提供执行方法。

---

### **10. 中介者模式（Mediator Pattern）**

- **定义**：用一个中介对象封装一组对象的交互，避免对象之间的直接耦合。
- **应用场景**：
  - 聊天系统（中介者是聊天室，用户通过聊天室交流）。
  - GUI 组件交互（组件间通过中介者协调）。
  - 消息队列（Kafka、RabbitMQ 等）。
- **关键点**：中介者负责对象间的交互逻辑。

---

### **总结**

- **选择依据**：根据实际场景中遇到的问题和代码结构，选择合适的设计模式。
- **核心目标**：解耦、增强灵活性、提高复用性、减少代码复杂度。

## 3、什么是策略模式？一般用在什么场景？

### **什么是策略模式？（在 JavaScript 中）**

在 **JavaScript** 中，**策略模式（Strategy Pattern）** 是一种行为型设计模式，指的是将一组具有相同行为的算法或操作封装为独立的策略类（对象），然后通过客户端动态选择其中一个来执行具体操作。

**核心思想**：

1. 将具体的行为抽象为策略，使其可以独立于客户端的代码进行扩展或修改。
2. 通过动态切换策略，避免使用复杂的 `if-else` 或 `switch` 语句。

---

### **策略模式的结构**

1. **策略（Strategy）**：封装一组行为的独立对象，每个对象实现不同的算法。
2. **上下文（Context）**：持有当前的策略对象，并通过该对象调用具体的算法。
3. **客户端（Client）**：根据需求动态选择并设置策略。

---

### **策略模式在 JavaScript 中的应用场景**

#### **1. 表单验证**

动态选择不同的验证规则，比如验证用户名、邮箱、密码。

#### **2. 支付方式**

根据用户选择的支付方式（支付宝、微信、信用卡等）执行对应的支付逻辑。

#### **3. 促销和折扣**

根据商品类型或用户身份，动态选择折扣策略。

#### **4. 日志输出**

根据不同的环境（如开发环境、生产环境），选择不同的日志输出方式。

---

### **策略模式示例代码**

#### **示例：折扣计算**

```javascript
// 策略对象：定义不同的折扣策略
const discountStrategies = {
  noDiscount: (price) => price, // 无折扣
  percentage: (price) => price * 0.9, // 打9折
  fixed: (price) => price - 50, // 立减50
}

// 上下文类：负责使用当前策略
class DiscountContext {
  constructor(strategy = 'noDiscount') {
    this.strategy = discountStrategies[strategy]
  }

  setStrategy(strategyName) {
    this.strategy = discountStrategies[strategyName]
  }

  calculate(price) {
    return this.strategy(price)
  }
}

// 客户端代码
const price = 500

// 默认无折扣
const context = new DiscountContext()
console.log(`无折扣: ${context.calculate(price)} 元`)

// 切换为打9折
context.setStrategy('percentage')
console.log(`打9折: ${context.calculate(price)} 元`)

// 切换为立减50
context.setStrategy('fixed')
console.log(`立减50: ${context.calculate(price)} 元`)
```

---

#### **示例：表单验证**

```javascript
// 策略对象：定义验证规则
const validators = {
  isNotEmpty: (value) => value.trim() !== '',
  isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  isNumber: (value) => !isNaN(value),
}

// 上下文类：执行验证策略
class ValidatorContext {
  constructor(strategy) {
    this.strategy = validators[strategy]
  }

  setStrategy(strategyName) {
    this.strategy = validators[strategyName]
  }

  validate(value) {
    return this.strategy(value)
  }
}

// 客户端代码
const validator = new ValidatorContext('isNotEmpty')
console.log(validator.validate('hello')) // true
console.log(validator.validate('')) // false

// 切换为邮箱验证
validator.setStrategy('isEmail')
console.log(validator.validate('test@example.com')) // true
console.log(validator.validate('invalid-email')) // false

// 切换为数字验证
validator.setStrategy('isNumber')
console.log(validator.validate('123')) // true
console.log(validator.validate('abc')) // false
```

---

### **策略模式的优点**

1. **避免冗长的条件语句**：将每种策略独立封装，代码更清晰、可维护。
2. **遵循开闭原则**：新增策略时无需修改现有代码，只需增加一个新的策略对象。
3. **提高灵活性**：可以根据需求动态切换策略。

---

### **策略模式的缺点**

1. 如果策略过多，会导致策略类或对象数量增加，增加管理复杂度。
2. 策略的选择逻辑可能会从客户端迁移到上下文类，导致代码分散。

---

### **总结**

在 JavaScript 中，策略模式通过对象或类的封装和动态选择机制，可以优雅地替代复杂的条件判断逻辑，尤其适用于算法切换、表单验证、支付方式选择等场景，提高代码的可读性和扩展性。

## 4、请描述简单工厂模式的工作原理。

### **什么是简单工厂模式？**

**简单工厂模式（Simple Factory Pattern）** 是一种创建型设计模式，它通过定义一个专门的工厂类来负责创建某一类对象的实例，而客户端只需要知道具体对象的类型名称，无需了解创建对象的细节。

简单工厂模式并不属于设计模式的经典 23 种类型之一，但在实际开发中非常常见，常用于简单的对象创建。

---

### **简单工厂模式的工作原理**

1. **工厂类**：
   - 提供一个静态方法（或普通方法），根据传入的参数，动态地实例化并返回不同类型的对象。
2. **具体产品类**：
   - 定义要创建的对象，每种产品类实现特定的逻辑。
3. **客户端**：
   - 客户端通过调用工厂类的方法获取对象，而不直接实例化具体的产品类。

---

### **简单工厂模式的优点**

- **封装对象创建逻辑**：客户端无需关心对象的创建过程，工厂类统一负责。
- **代码复用性强**：对象的创建逻辑集中在工厂类中，便于维护和复用。
- **扩展性强**：可以通过修改工厂类，支持更多的对象类型。

---

### **简单工厂模式的缺点**

- **不符合开闭原则**：增加新的产品时需要修改工厂类的代码。
- **单一职责风险**：工厂类可能随着产品种类增加变得复杂，承担过多职责。

---

### **简单工厂模式的实现（JavaScript 示例）**

#### **示例：车辆工厂**

```javascript
// 具体产品类
class Car {
  drive() {
    console.log('驾驶一辆汽车')
  }
}

class Bike {
  ride() {
    console.log('骑一辆自行车')
  }
}

class Bus {
  transport() {
    console.log('乘坐一辆公交车')
  }
}

// 工厂类
class VehicleFactory {
  static createVehicle(type) {
    switch (type) {
      case 'car':
        return new Car()
      case 'bike':
        return new Bike()
      case 'bus':
        return new Bus()
      default:
        throw new Error('未知的车辆类型')
    }
  }
}

// 客户端代码
try {
  const car = VehicleFactory.createVehicle('car')
  car.drive() // 输出：驾驶一辆汽车

  const bike = VehicleFactory.createVehicle('bike')
  bike.ride() // 输出：骑一辆自行车

  const bus = VehicleFactory.createVehicle('bus')
  bus.transport() // 输出：乘坐一辆公交车

  // 测试未知类型
  VehicleFactory.createVehicle('plane') // 抛出错误：未知的车辆类型
} catch (error) {
  console.error(error.message)
}
```

---

### **应用场景**

1. **前端开发：组件实例化**
   - 通过简单工厂创建不同类型的组件实例。
2. **后端开发：日志记录**
   - 根据日志类型（文件日志、数据库日志、控制台日志）创建对应的日志记录器。
3. **数据解析**
   - 根据文件类型（如 JSON、XML、CSV）创建对应的解析器。

---

### **总结**

简单工厂模式通过工厂类统一管理对象的创建逻辑，简化了客户端的使用流程，但不适用于需要频繁扩展的新产品场景，因为每次扩展都需要修改工厂类代码，可能引入维护复杂度。
