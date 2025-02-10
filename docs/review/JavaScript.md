<!-- @format -->

# javascript 热门考题

## 1、为什么 JavaScript 中 0.1 + 0.2 !== 0.3，如何让其相等？

### **为什么 `0.1 + 0.2 !== 0.3`？**

#### **1. 原因：浮点数精度问题**

在 JavaScript 中，数字是以 **64 位双精度浮点数**（遵循 IEEE 754 标准）表示的。这种表示方法导致某些十进制小数在二进制中无法精确表示。

- **浮点数表示：**

  - 在十进制中，`0.1` 和 `0.2` 是有限的小数。
  - 在二进制中，`0.1` 和 `0.2` 是无限循环小数，存储时会被截断为有限位数。

  例如：

  - `0.1` 的二进制近似值为：`0.0001100110011001100110011001100110011001100110011`...
  - `0.2` 的二进制近似值为：`0.001100110011001100110011001100110011001100110011`...

- **加法时的精度丢失：**
  - 当 `0.1` 和 `0.2` 的近似值相加时，结果不是精确的 `0.3`，而是一个非常接近 `0.3` 的值：`0.30000000000000004`。

因此，`0.1 + 0.2 !== 0.3`。

---

#### **2. 如何验证这一问题？**

你可以用以下代码查看结果：

```javascript
console.log(0.1 + 0.2) // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) // false
```

---

### **如何让 `0.1 + 0.2 === 0.3`？**

#### **1. 解决方法：通过误差范围判断**

由于浮点数运算有精度问题，可以引入一个误差范围（epsilon，通常为非常小的值）来判断两个数字是否“足够接近”。

示例：

```javascript
const epsilon = Number.EPSILON // 2.220446049250313e-16
console.log(Math.abs(0.1 + 0.2 - 0.3) < epsilon) // true
```

> **`Number.EPSILON`：**  
> 这是 JavaScript 中表示两个浮点数之间最小差异的常量。

---

#### **2. 解决方法：使用 `toFixed` 或 `toPrecision` 修正精度**

通过限制小数位数，可以避免浮点误差。但这是一种近似解决方案，因为舍入可能导致意外结果。

示例：

```javascript
const sum = (0.1 + 0.2).toFixed(1) // 保留 1 位小数
console.log(sum) // "0.3"
console.log(sum == 0.3) // true
```

注意：`toFixed` 返回的是字符串，需要用 `parseFloat` 转回数字。

---

#### **3. 解决方法：将浮点数转换为整数处理**

通过放大小数（例如乘以 10 或 100），将其转为整数进行运算，避免小数的二进制表示误差。

示例：

```javascript
const sum = (0.1 * 10 + 0.2 * 10) / 10 // 放大为整数计算
console.log(sum) // 0.3
console.log(sum === 0.3) // true
```

---

#### **4. 使用第三方库**

在一些对精度要求较高的场景中（如金融计算），可以使用第三方库，如 [Decimal.js](https://github.com/MikeMcl/decimal.js) 或 [Big.js](https://github.com/MikeMcl/big.js)。

示例（使用 Decimal.js）：

```javascript
// 安装：npm install decimal.js
const Decimal = require('decimal.js')

const sum = new Decimal(0.1).plus(0.2)
console.log(sum.toNumber()) // 0.3
console.log(sum.equals(0.3)) // true
```

---

### **总结**

- `0.1 + 0.2 !== 0.3` 是因为浮点数的二进制表示精度问题。
- 常见解决方案：
  1. 使用误差范围（`Number.EPSILON`）。
  2. 使用 `toFixed` 或 `toPrecision` 修正精度。
  3. 转换为整数运算。
  4. 使用专门的高精度计算库（如 Decimal.js）。

根据场景选择合适的方法来解决浮点数精度问题！

## 2、typeof 和 instanceof 有什么区别？

### **`typeof` 和 `instanceof` 的区别**

`typeof` 和 `instanceof` 是 JavaScript 中常用的两种类型判断方式，但它们的作用、用途和适用场景有所不同。以下是详细的对比和区别：

---

### **1. `typeof` 的特点**

#### **1.1 用途**

- 用于判断变量的数据类型。
- 返回一个字符串，表示变量的基本类型或特殊对象类型。

#### **1.2 返回值**

`typeof` 的返回值是以下几种字符串：
| 类型      | 返回值            | 示例                            |
| --------- | ----------------- | ------------------------------- |
| Undefined | `'undefined'`     | `typeof undefined`              |
| Null      | `'object'` (特殊) | `typeof null`                   |
| Boolean   | `'boolean'`       | `typeof true`, `typeof false`   |
| Number    | `'number'`        | `typeof 42`, `typeof NaN`       |
| BigInt    | `'bigint'`        | `typeof 123n`                   |
| String    | `'string'`        | `typeof 'hello'`                |
| Symbol    | `'symbol'`        | `typeof Symbol('id')`           |
| Function  | `'function'`      | `typeof function() {}`          |
| Object    | `'object'`        | `typeof {}`, `typeof [1, 2, 3]` |

#### **1.3 注意事项**

1. **对 `null` 的判断不准确：**

   - `typeof null` 返回 `'object'`，这是 JavaScript 的历史遗留问题，并不是严格意义上的正确类型。

   ```javascript
   console.log(typeof null) // 'object'
   ```

2. **区分对象和数组：**

   - 对于普通对象和数组，`typeof` 都返回 `'object'`，无法进一步区分。

   ```javascript
   console.log(typeof {}) // 'object'
   console.log(typeof []) // 'object'
   ```

3. **无法识别具体对象类型：**

   - 无法区分具体的对象类型（如日期、正则表达式等）。

   ```javascript
   console.log(typeof new Date()) // 'object'
   console.log(typeof /regex/) // 'object'
   ```

4. **准确判断函数：**

   - 函数是唯一会被 `typeof` 识别为 `'function'` 的值。

   ```javascript
   console.log(typeof function () {}) // 'function'
   ```

---

### **2. `instanceof` 的特点**

#### **2.1 用途**

- 用于判断一个对象是否是某个构造函数的实例。
- 检测的是对象与构造函数的原型链关系。

#### **2.2 语法**

```javascript
object instanceof Constructor
```

- **`object`**：需要检查的对象。
- **`Constructor`**：构造函数。

#### **2.3 返回值**

- 返回布尔值：`true` 或 `false`。

#### **2.4 判断原理**

`instanceof` 检查的是 **对象的原型链**，即：

- `object.__proto__` 是否指向 `Constructor.prototype`，或原型链上是否存在该构造函数的 `prototype`。

示例：

```javascript
function Person() {}
const person = new Person()

console.log(person instanceof Person) // true
console.log(person instanceof Object) // true (因为所有对象最终继承自 Object)
```

#### **2.5 注意事项**

1. **只适用于对象：**

   - `instanceof` 检查的是原型链，因此对于基本数据类型（如 `string`、`number`）会直接返回 `false`。

   ```javascript
   console.log(42 instanceof Number) // false
   console.log(new Number(42) instanceof Number) // true
   ```

2. **无法判断基本类型：**

   - 对于基本类型（如 `null`、`undefined`），`instanceof` 无法使用，直接报错或返回 `false`。

   ```javascript
   console.log(null instanceof Object) // false
   console.log(undefined instanceof Object) // false
   ```

3. **原型链改变的影响：**

   - 如果对象的原型链被修改，`instanceof` 的判断结果也会发生变化。

   ```javascript
   function A() {}
   const obj = new A()

   console.log(obj instanceof A) // true

   A.prototype = {} // 修改原型
   console.log(obj instanceof A) // false
   ```

4. **跨 iframe 或跨作用域问题：**

   - 不同 iframe 或作用域中的对象有不同的构造函数，`instanceof` 判断可能失效。

   ```javascript
   const iframe = document.createElement('iframe')
   document.body.appendChild(iframe)
   const iframeArray = iframe.contentWindow.Array

   const arr = new iframeArray()
   console.log(arr instanceof Array) // false (因为 Array 不同)
   ```

---

### **3. `typeof` 和 `instanceof` 的对比**

| 特性                     | `typeof`                           | `instanceof`                     |
| ------------------------ | ---------------------------------- | -------------------------------- |
| **用途**                 | 判断变量的基本数据类型             | 判断对象是否是某个构造函数的实例 |
| **适用于**               | 基本类型和对象                     | 对象（不适用于基本类型）         |
| **返回值**               | 类型字符串                         | 布尔值                           |
| **能否判断基本类型**     | 可以（但 `null` 有误差）           | 不适用                           |
| **能否区分具体对象类型** | 不能区分具体对象（如数组、日期等） | 可以检测特定构造函数             |
| **跨作用域的影响**       | 不受影响                           | 可能因构造函数不同而失效         |
| **依赖原型链**           | 不依赖                             | 依赖原型链                       |

---

### **4. 结合使用的示例**

在实际开发中，可以结合 `typeof` 和 `instanceof` 使用，满足更多判断场景的需求。

#### 示例 1：判断变量类型

```javascript
function checkType(value) {
  if (value === null) return 'null'
  if (typeof value === 'object') {
    if (value instanceof Array) return 'array'
    if (value instanceof Date) return 'date'
    return 'object'
  }
  return typeof value
}

console.log(checkType(null)) // 'null'
console.log(checkType([])) // 'array'
console.log(checkType(new Date())) // 'date'
console.log(checkType({})) // 'object'
console.log(checkType(42)) // 'number'
```

#### 示例 2：判断实例关系

```javascript
function isPerson(obj) {
  return obj instanceof Person
}

function Person(name) {
  this.name = name
}

const john = new Person('John')
console.log(isPerson(john)) // true
console.log(isPerson({})) // false
```

---

### **总结**

1. **`typeof`** 用于检查基本数据类型（如 `number`、`string` 等），但无法区分对象类型，且对 `null` 的判断存在误差。
2. **`instanceof`** 用于检查对象的原型链关系，适合判断是否是某个构造函数的实例，但无法判断基本数据类型。
3. 在实际开发中，可以根据需求灵活选择，或者结合两者一起使用以提高准确性。

## 3、typeof null 的结果是什么？为什么？

### **`typeof null` 的结果是什么？**

在 JavaScript 中，`typeof null` 的结果是：

```javascript
console.log(typeof null) // 'object'
```

---

### **为什么 `typeof null` 返回 `'object'`？**

#### **1. JavaScript 的设计历史遗留问题**

- JavaScript 在最初的实现中，使用低位存储变量的类型信息。
- 在这种设计下，变量类型由其内部的二进制表示的低几位决定：

  - 对象的类型标识是二进制的前几位是 `000`。
  - `null` 的内部表示是全零（`00000000`），因此被错误地识别为对象。

  > **具体原因：** `null` 的值在底层被存储为一个 32 位的空指针，其低位也为 `000`，因此 `typeof null` 返回了 `'object'`。

#### **2. 标准未修复**

- 尽管这个问题被发现了，但由于修复会导致大量已有代码出现兼容性问题，JavaScript 一直保留了这一行为。
- 因此，`typeof null` 返回 `'object'` 被视为一个“历史遗留的 Bug”，但已成为标准的一部分。

---

### **如何准确判断 `null`？**

由于 `typeof null` 的结果不准确，可以使用以下方法判断 `null`：

#### **1. 严格等于（推荐）**

使用 `===` 判断是否为 `null`：

```javascript
const value = null
console.log(value === null) // true
```

#### **2. Object.prototype.toString**

利用 `Object.prototype.toString.call` 判断数据类型：

```javascript
const value = null
console.log(Object.prototype.toString.call(value)) // "[object Null]"
```

---

### **总结**

- **`typeof null` 返回 `'object'`** 是 JavaScript 的历史遗留问题，因为 `null` 在底层被当作一个空对象指针表示。
- 这种行为虽然不符合直觉，但已成为语言规范的一部分。
- 为了准确判断 `null`，建议使用严格等于 `=== null` 或 `Object.prototype.toString` 方法。

## 4、JavaScript 中 null 和 undefined 的区别是什么？

### **`null` 和 `undefined` 的区别**

在 JavaScript 中，`null` 和 `undefined` 都表示“空”或“无”的状态，但它们有明显的区别，适用场景和语义也不同。

---

### **1. 定义**

#### **`undefined`**

- 表示“未定义”。
- 一个变量声明了但没有赋值时，它的值是 `undefined`。
- JavaScript 内置的一些函数或对象属性没有返回值时，会默认返回 `undefined`。

#### **`null`**

- 表示“空”或“无对象”。
- 通常用于显式地表示一个变量没有值、或者指向的对象是空的。
- 开发者在代码中可以主动设置变量为 `null`，表示这是一个空值或无效值。

---

### **2. 语法上的区别**

| **对比点**     | `undefined`                    | `null`                       |
| -------------- | ------------------------------ | ---------------------------- |
| **类型**       | `undefined`                    | `object`（历史遗留问题）     |
| **是否可赋值** | 一般不需要手动赋值，但可以赋值 | 可赋值，表示“无值”或“空对象” |
| **默认值**     | 是变量未赋值时的默认值         | 需要手动赋值，不是默认值     |
| **使用场景**   | 表示“尚未初始化”或“未定义”状态 | 表示“空值”或“空对象引用”     |

---

### **3. 使用场景**

#### **`undefined` 的使用场景**

1. **变量未赋值：**
   如果声明了一个变量但没有初始化，默认值是 `undefined`。

   ```javascript
   let a
   console.log(a) // undefined
   ```

2. **函数没有返回值：**
   如果一个函数没有显式返回值，会返回 `undefined`。

   ```javascript
   function noReturn() {}
   console.log(noReturn()) // undefined
   ```

3. **对象属性不存在：**
   如果尝试访问一个对象中不存在的属性，会得到 `undefined`。
   ```javascript
   const obj = {}
   console.log(obj.someProperty) // undefined
   ```

---

#### **`null` 的使用场景**

1. **初始化变量为“空值”：**
   当你明确知道某个变量将来会被赋值为对象，但当前为空时，可以将其初始化为 `null`。

   ```javascript
   let person = null
   console.log(person) // null
   ```

2. **指代“空对象引用”：**
   `null` 常被用来表示一个变量现在没有任何对象引用。
   ```javascript
   let car = null // 表示没有车的信息
   ```

---

### **4. 比较**

#### **相等性比较**

- 使用 `==` 时，`null` 和 `undefined` 被认为是相等的。
- 使用 `===` 时，`null` 和 `undefined` 被认为是不同的。

```javascript
console.log(null == undefined) // true
console.log(null === undefined) // false
```

#### **注意：`typeof` 的区别**

- `typeof undefined` 的结果是 `'undefined'`。
- `typeof null` 的结果是 `'object'`（这是一个历史遗留的设计缺陷）。

```javascript
console.log(typeof undefined) // 'undefined'
console.log(typeof null) // 'object'
```

---

### **5. 常见误区与注意事项**

1. **不要将 `undefined` 当作赋值使用：**

   - `undefined` 通常表示变量未初始化，手动赋值 `undefined` 会导致混淆，建议用 `null` 表示“无值”。

   ```javascript
   let value = undefined // 不推荐
   let value = null // 推荐
   ```

2. **`null` 不等于空字符串或 `0`：**

   - `null` 是一种空值，但它与其他空值（如空字符串 `''` 或 `0`）不同。

   ```javascript
   console.log(null == '') // false
   console.log(null == 0) // false
   ```

3. **`null` 和 `undefined` 不会被 JSON 序列化：**
   - `undefined` 在 JSON 中会被忽略，`null` 会作为值序列化。
   ```javascript
   const obj = { a: null, b: undefined }
   console.log(JSON.stringify(obj)) // '{"a":null}'
   ```

---

### **6. 总结**

| **对比点**   | **`undefined`**                      | **`null`**                      |
| ------------ | ------------------------------------ | ------------------------------- |
| **定义**     | 表示“未定义”                         | 表示“空值”或“无对象”            |
| **默认行为** | 变量声明但未赋值时自动为 `undefined` | 需要手动赋值                    |
| **类型**     | `undefined`                          | `object`（历史遗留问题）        |
| **比较**     | `undefined == null` 为 `true`        | `undefined === null` 为 `false` |
| **适用场景** | 表示“变量未赋值”或“属性不存在”       | 表示“空值”或“没有对象引用”      |

**结论：**

- **用 `undefined` 表示变量未初始化或未定义。**
- **用 `null` 显式表示空值或无效值。**

## 5、说说你对 JS 作用域的理解？

### **JavaScript 作用域的理解**

在 JavaScript 中，**作用域（Scope）** 是指变量、函数、对象等可以被访问和操作的范围。作用域决定了一个变量、函数或对象在代码中是否可用。理解作用域对于编写高效和无错误的代码至关重要。

#### **1. 作用域的分类**

JavaScript 中的作用域可以分为以下几种：

- **全局作用域（Global Scope）**
- **函数作用域（Function Scope）**
- **块级作用域（Block Scope）**

---

### **2. 全局作用域（Global Scope）**

- 全局作用域是指在代码中的任何地方都可以访问的作用域。
- 如果一个变量在函数外部声明，它就是一个全局变量，存在于全局作用域中。可以通过 `window` 或 `globalThis` 对象访问（浏览器中是 `window`，Node.js 中是 `global`）。

#### 示例：

```javascript
let globalVar = "I'm a global variable" // 全局变量

function accessGlobal() {
  console.log(globalVar) // 可以访问全局变量
}

accessGlobal() // 输出: I'm a global variable
```

- **注意：** 全局变量在代码中到处可见，容易被修改，可能导致意料之外的错误，因此使用全局变量时要谨慎。

---

### **3. 函数作用域（Function Scope）**

- 在 JavaScript 中，函数作用域是指在函数内部声明的变量只能在该函数内部访问。
- 使用 `var` 声明的变量具有函数作用域，即使在函数内部的不同代码块中，它们也处于相同的作用域内。
- 使用 `let` 和 `const` 声明的变量会有块级作用域，后面会进一步说明。

#### 示例：

```javascript
function testFunction() {
  var functionVar = "I'm in function scope" // 函数作用域内的变量
  console.log(functionVar) // 可以访问函数内部变量
}

testFunction()
console.log(functionVar) // 报错: Uncaught ReferenceError: functionVar is not defined
```

- **注意：** 函数作用域内的变量无法在函数外部访问，除非通过返回值或其他方式传递。

---

### **4. 块级作用域（Block Scope）**

- 块级作用域是指在代码块 `{}` 中声明的变量，仅在该代码块内有效。`let` 和 `const` 都具有块级作用域。
- `var` 声明的变量没有块级作用域，而是函数作用域，因此在 `if` 或 `for` 等代码块中声明的 `var` 变量，其作用域是函数级的，而不是块级的。

#### 示例：

```javascript
if (true) {
  let blockVar = "I'm in block scope" // 块级作用域内的变量
  console.log(blockVar) // 可以访问
}

console.log(blockVar) // 报错: Uncaught ReferenceError: blockVar is not defined
```

- **注意：** 使用 `let` 或 `const` 声明的变量，仅在所在的代码块中可见，超出该块就不可访问。

---

### **5. 作用域链（Scope Chain）**

- JavaScript 作用域链是由多个作用域按嵌套关系组成的链式结构。在执行代码时，JavaScript 会根据作用域链来查找变量。
- 当在某个作用域内访问一个变量时，JavaScript 会从当前作用域开始查找，如果没有找到，就会查找外部作用域，直到全局作用域。

#### 示例：

```javascript
const outerVar = "I'm in the outer scope"

function outerFunction() {
  const innerVar = "I'm in the inner scope"

  function innerFunction() {
    console.log(outerVar) // 可以访问外部作用域的变量
    console.log(innerVar) // 可以访问当前作用域的变量
  }

  innerFunction()
}

outerFunction()
```

- **注意：** JavaScript 会按照作用域链的顺序查找变量，直到找到为止。

---

### **6. 闭包（Closure）与作用域**

闭包是 JavaScript 中非常重要的概念，指的是一个函数在其外部函数的作用域中“记住”了外部函数的变量，即使外部函数已经执行完毕，内部函数仍然可以访问外部函数的变量。

#### 示例：

```javascript
function outerFunction() {
  const outerVar = "I'm an outer variable"

  return function innerFunction() {
    console.log(outerVar) // 内部函数可以访问外部函数的变量
  }
}

const closure = outerFunction()
closure() // 输出: I'm an outer variable
```

- **注意：** 即使 `outerFunction` 执行完毕，`innerFunction` 仍然能够访问 `outerVar`，这就是闭包的特性。

---

### **7. `var`, `let` 和 `const` 的作用域区别**

- `var`：具有函数作用域或全局作用域。它在声明时不会产生暂时性死区（hoisting），会被提升到作用域顶部，因此在声明之前就可以访问。

  ```javascript
  console.log(x) // undefined
  var x = 10
  ```

- `let` 和 `const`：具有块级作用域，且在声明之前无法访问（暂时性死区），它们会在块级作用域内创建。

  ```javascript
  console.log(y) // ReferenceError: Cannot access 'y' before initialization
  let y = 20
  ```

- **区别总结：**
  - `var` 具有函数作用域，没有暂时性死区，变量提升。
  - `let` 和 `const` 具有块级作用域，并且在使用前会报错。

---

### **8. 垃圾回收与作用域**

作用域在 JavaScript 中与垃圾回收紧密相关。当一个变量超出作用域时，它会被标记为“不可达”，从而使垃圾回收机制能够回收这些不再使用的内存。

#### 示例：

```javascript
function createClosure() {
  const bigData = new Array(1000).fill('data') // 创建大量数据

  return function () {
    console.log('Closure function')
  }
}

const closure = createClosure() // bigData 会被保留在闭包内
```

- **注意：** `bigData` 会被保留在闭包内，直到闭包不再被引用，垃圾回收才能回收内存。

---

### **总结**

JavaScript 的作用域是一个决定变量访问权限的机制。它影响着变量的可见性和生命周期，主要有以下几点需要理解：

- **全局作用域**：在整个代码中都能访问的变量作用域。
- **函数作用域**：在函数内部声明的变量只能在函数内部访问。
- **块级作用域**：`let` 和 `const` 创建的变量只在代码块内有效。
- **作用域链**：多层嵌套的作用域，决定了查找变量的顺序。
- **闭包**：允许内部函数访问外部函数作用域中的变量。

理解 JavaScript 的作用域对于避免变量污染、内存泄漏和其他错误非常重要。

## 6、let、const 和 var 的区别

### **`let`、`const` 和 `var` 的区别**

在 JavaScript 中，`let`、`const` 和 `var` 都用于声明变量，但它们的行为和作用范围有显著的区别。以下是它们的详细比较：

---

### **1. 作用域（Scope）**

- **`var`：**

  - 具有**函数作用域**（function scope），即它在声明它的函数内有效。如果在函数外部声明，它会成为一个全局变量。
  - 不能在块级作用域（如 `if`、`for` 等代码块）中创建新的作用域。

  ```javascript
  var a = 10
  if (true) {
    var a = 20 // 会影响外部的 a
  }
  console.log(a) // 输出 20
  ```

- **`let` 和 `const`：**

  - 都具有**块级作用域**（block scope），即它们只在声明所在的代码块中有效。

  ```javascript
  let b = 10
  if (true) {
    let b = 20 // 只在块级作用域内有效
    console.log(b) // 输出 20
  }
  console.log(b) // 输出 10
  ```

---

### **2. 变量提升（Hoisting）**

- **`var`：**

  - 变量会被提升到其所在作用域的顶部，但不会初始化。即使在声明之前使用 `var` 声明的变量，它的值也会是 `undefined`。

  ```javascript
  console.log(c) // undefined
  var c = 30
  ```

- **`let` 和 `const`：**

  - 变量会被提升，但它们在声明之前不能访问，会造成**暂时性死区**（Temporal Dead Zone，TDZ）。在 TDZ 内访问这些变量会抛出错误。

  ```javascript
  console.log(d) // ReferenceError: Cannot access 'd' before initialization
  let d = 40
  ```

  **`const`** 也有类似的行为，但它不仅具有暂时性死区，还要求在声明时必须赋值。

---

### **3. 重新赋值（Reassignment）**

- **`var`：**

  - 变量可以重新赋值。没有限制。

  ```javascript
  var e = 50
  e = 60 // 重新赋值是允许的
  console.log(e) // 输出 60
  ```

- **`let`：**

  - 变量可以重新赋值。与 `var` 类似，但具有块级作用域。

  ```javascript
  let f = 70
  f = 80 // 重新赋值是允许的
  console.log(f) // 输出 80
  ```

- **`const`：**

  - 变量一旦声明并初始化后，其值不能重新赋值。它是**常量**。

  ```javascript
  const g = 90
  g = 100 // TypeError: Assignment to constant variable
  ```

  **注意：** `const` 对象或数组的引用不能改变，但可以修改其内部的内容（例如对象属性或数组元素）。

  ```javascript
  const arr = [1, 2, 3]
  arr.push(4) // 允许修改数组的内容
  console.log(arr) // 输出 [1, 2, 3, 4]
  ```

---

### **4. 全局对象属性**

- **`var`：**

  - 如果在全局作用域中使用 `var` 声明变量，这个变量会成为全局对象的属性。在浏览器中，它会成为 `window` 对象的属性；在 Node.js 中，它会成为 `global` 对象的属性。

  ```javascript
  var h = 110
  console.log(window.h) // 输出 110 (浏览器中)
  ```

- **`let` 和 `const`：**

  - 变量声明在全局作用域时，不会成为全局对象的属性。

  ```javascript
  let i = 120
  console.log(window.i) // undefined (浏览器中)
  ```

---

### **5. 使用场景**

- **`var`：**
  - 适用于旧代码中，现代 JavaScript 中尽量避免使用 `var`，因为它的作用域规则较为宽松，容易导致意外的行为。
- **`let`：**

  - 用于声明可变的变量，尤其适用于块级作用域中的变量。

- **`const`：**
  - 用于声明常量或不可重新赋值的变量，通常推荐用于声明不会改变的值。

---

### **6. 总结对比表**

| **特性**                       | **`var`**                                | **`let`**               | **`const`**             |
| ------------------------------ | ---------------------------------------- | ----------------------- | ----------------------- |
| **作用域**                     | 函数作用域 / 全局作用域                  | 块级作用域              | 块级作用域              |
| **变量提升**                   | 提升至作用域顶部，但初始化为 `undefined` | 提升，但不能访问（TDZ） | 提升，但不能访问（TDZ） |
| **是否可重新赋值**             | 是                                       | 是                      | 否                      |
| **是否可以声明未初始化的变量** | 可以                                     | 不可以                  | 不可以                  |
| **全局对象属性**               | 是                                       | 否                      | 否                      |

---

### **7. 推荐使用**

- **现代 JavaScript 中推荐使用 `let` 和 `const`，尤其是 `const`，因为它能帮助你避免不必要的修改，提高代码的可维护性和可读性。**
- **`var` 已经不推荐使用，尤其是它的函数作用域和变量提升的特性容易导致代码出错。**

## ️7、ES6 箭头函数能当构造函数吗？

### **ES6 箭头函数能当构造函数吗？**

ES6 引入的箭头函数（Arrow Function）是一个简洁的函数表达式，语法上比传统的函数表达式更为简洁。它通常用于简化函数的定义，特别是在没有 `this` 绑定的情况下。然而，**箭头函数不能当构造函数**，也不能使用 `new` 来实例化对象。下面是对这一问题的详细解释：

### **1. 为什么箭头函数不能作为构造函数？**

箭头函数有一个非常特殊的行为，它与传统的函数表达式不同：

- **没有自己的 `this`**：箭头函数不绑定自己的 `this`，它会继承外部（词法）作用域中的 `this`。换句话说，箭头函数的 `this` 是由它外部的上下文决定的，而不是在函数调用时动态绑定的。
- **不能使用 `new` 调用**：由于箭头函数没有自己的 `this`，它也不能被用作构造函数。传统的构造函数在使用 `new` 时，会自动创建一个新的实例并将 `this` 绑定到该实例上。而箭头函数由于没有自己的 `this`，无法正确执行此操作。

### **2. 示例：箭头函数不能作为构造函数**

```javascript
// 定义一个箭头函数
const Person = (name, age) => {
  this.name = name
  this.age = age
}

// 尝试使用 new 调用箭头函数
const p = new Person('Alice', 25) // TypeError: Person is not a constructor
```

**错误提示：**

- 当你尝试使用 `new` 来实例化箭头函数时，会抛出一个 `TypeError`，提示箭头函数不能作为构造函数。

### **3. 如何定义可以作为构造函数的函数？**

如果你希望定义一个构造函数，应该使用传统的函数表达式或 ES6 的 `class` 语法。例如：

#### 使用传统的函数表达式：

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}

const p = new Person('Alice', 25)
console.log(p.name) // 输出: Alice
```

#### 使用 ES6 `class` 语法：

```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const p = new Person('Alice', 25)
console.log(p.name) // 输出: Alice
```

在这两种情况下，`Person` 函数或类都可以作为构造函数使用，且会正确地创建实例并绑定 `this`。

### **4. 总结**

- **箭头函数**：没有自己的 `this`，无法作为构造函数，不能使用 `new` 关键字。
- **传统函数表达式** 和 **`class` 语法**：可以作为构造函数，支持 `new` 关键字来实例化对象。

因此，**箭头函数不能作为构造函数**，并且如果你希望使用构造函数创建实例，应该使用普通的函数声明或 ES6 的 `class` 语法。

## 8、ES6 箭头函数和普通函数有什么区别？

### **总结表格**

| **特性**                 | **箭头函数**                                  | **普通函数**                          |
| ------------------------ | --------------------------------------------- | ------------------------------------- |
| **`this` 绑定**          | 继承自外部作用域的 `this`，没有自己的 `this`  | 根据函数调用时的上下文动态绑定 `this` |
| **`arguments` 对象**     | 没有 `arguments` 对象                         | 有 `arguments` 对象                   |
| **是否能作为构造函数**   | 不能作为构造函数，无法使用 `new`              | 可以作为构造函数，使用 `new` 创建实例 |
| **`super` 关键字**       | 继承自外部作用域的 `super`                    | 有自己的 `super`，可以调用父类的方法  |
| **语法简洁性**           | 语法简洁，省略 `function` 和 `return`（单行） | 语法较长，需要 `function` 关键字      |
| **是否可以是生成器函数** | 不能是生成器函数                              | 可以是生成器函数（使用 `*`）          |

---

### **总结**

- **箭头函数**：主要优点是简洁、没有自己的 `this`、没有 `arguments` 和 `super`，适用于回调函数、简短的函数。它不适合需要动态 `this` 绑定、生成器函数等场景。
- **普通函数**：适用于构造函数、需要动态绑定 `this` 或需要使用 `arguments` 的情况。

## 9、var a = []; a.push()、a.pop() 请说明在js中的意义

在 JavaScript 中，`push()` 和 `pop()` 是数组（`Array`）对象的两个常用方法，它们分别用于向数组添加元素和从数组移除元素。

1. **`a.push()`**:
   - `push()` 方法用于将一个或多个元素添加到数组的末尾，并返回新的数组长度。
   - 如果调用 `a.push()` 时不传入任何参数，则该方法会将 `undefined` 添加到数组中，数组长度会增加 1。
   - 例如：
     ```javascript
     var a = [];
     a.push(1); // a = [1]
     a.push(2, 3); // a = [1, 2, 3]
     ```

2. **`a.pop()`**:
   - `pop()` 方法用于从数组的末尾移除并返回该元素。调用 `pop()` 会改变原始数组，即数组的长度会减少 1。
   - 如果数组为空，调用 `pop()` 不会做任何操作，且返回 `undefined`。
   - 例如：
     ```javascript
     var a = [1, 2, 3];
     var lastElement = a.pop(); // a = [1, 2], lastElement = 3
     ```

### 总结：
- `push()` 用于向数组的末尾添加元素，并返回新的数组长度。
- `pop()` 用于从数组的末尾移除元素，并返回被移除的元素。

这两个方法通常用于动态操作数组，适合处理栈（LIFO, 后进先出）数据结构。你可以将数组看作是一个栈，`push()` 就是压栈，`pop()` 就是弹栈。


## 10、输出结果，为什么？

```javascript
const obj3 = {a: 1}; 
const obj4 = {b: 2}; 
console.log(obj3 == obj4); // false 
console.log(obj3 === obj4); // false

```

在 JavaScript 中，`==` 和 `===` 都用于比较两个值，但它们的比较规则有所不同。对于对象的比较，它们的行为更有特点。

### 1. **`obj3 == obj4` 的结果：**  
   - 输出：`false`
   
   **原因：**
   - 在 JavaScript 中，`==` 比较的是 **引用**，而不是对象的内容。也就是说，两个对象即使它们的属性和值完全相同，它们仍然是不同的引用，指向内存中的不同位置。
   - `obj3` 和 `obj4` 是两个不同的对象，虽然它们的内容（`a: 1` 和 `b: 2`）不同，但这两个对象在内存中是两个独立的实体。因此，`obj3 == obj4` 返回 `false`。

### 2. **`obj3 === obj4` 的结果：**  
   - 输出：`false`

   **原因：**
   - `===` 是严格相等比较（也称为 **全等比较**），它不仅比较值，还比较类型以及引用是否相同。
   - 因为 `obj3` 和 `obj4` 是两个不同的对象，即使它们的属性和值不同，它们的引用也是不同的。因此，`obj3 === obj4` 返回 `false`。

### 总结：
- `==` 和 `===` 对象的比较都比较的是 **引用**，而不是对象的内容。所以两个对象即使内容相同，只要它们是不同的实例（在内存中有不同的引用），比较结果都会是 `false`。
- 在 JavaScript 中，**对象比较** 永远是比较引用，而非对象的具体值或结构。

