# Typescript

##  什么是 TypeScript 的对象类型？怎么定义对象类型？

### **TypeScript 的对象类型**

在 TypeScript 中，对象类型是指一种包含多个属性（键值对）的数据类型。每个属性都有自己的类型，TypeScript 通过静态类型检查确保对象的属性符合预期的类型。

#### **对象类型定义的作用**

通过定义对象类型，可以明确指定对象的结构，确保每个属性都具有正确的类型，并提供类型推断和代码提示，使得开发过程中更易于发现错误。

---

### **如何定义对象类型**

1. **使用对象字面量类型（Inline Object Type）**：
   可以直接在类型声明时使用 `{}` 来定义对象类型。

   ```typescript
   const person: { name: string, age: number } = {
     name: 'Alice',
     age: 30
   };
   ```

   这里，`{ name: string, age: number }` 表示 `person` 对象必须具有 `name` 属性（类型为 `string`）和 `age` 属性（类型为 `number`）。

2. **使用接口（Interface）**：
   接口是一种声明对象结构的方式，可以重用并扩展多个对象类型。

   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   const person: Person = {
     name: 'Bob',
     age: 25
   };
   ```

   使用接口时，我们可以更方便地在多个地方复用 `Person` 类型。

3. **使用类型别名（Type Alias）**：
   类型别名通过 `type` 关键字创建，可以为对象类型、联合类型、交叉类型等定义新的名称。

   ```typescript
   type Person = {
     name: string;
     age: number;
   };

   const person: Person = {
     name: 'Charlie',
     age: 40
   };
   ```

   类型别名类似于接口，但与接口不同的是，类型别名不支持扩展（继承）。

4. **可选属性**：
   对象的某些属性可以是可选的，使用 `?` 来标识该属性是可选的。

   ```typescript
   interface Person {
     name: string;
     age: number;
     address?: string;  // 可选属性
   }

   const person1: Person = {
     name: 'David',
     age: 28
   };

   const person2: Person = {
     name: 'Eva',
     age: 22,
     address: '123 Main St'
   };
   ```

5. **只读属性**：
   如果对象的某些属性不允许被修改，可以使用 `readonly` 修饰符来标识这些属性为只读。

   ```typescript
   interface Person {
     readonly name: string;
     age: number;
   }

   const person: Person = {
     name: 'Frank',
     age: 35
   };

   person.name = 'George';  // 错误：不能修改只读属性
   ```

6. **动态属性**：
   TypeScript 允许定义具有动态键名的对象，通常用索引签名（`[key: string]: type`）来描述。

   ```typescript
   interface Dictionary {
     [key: string]: string;
   }

   const dictionary: Dictionary = {
     hello: 'world',
     goodbye: 'everyone'
   };
   ```

   这里，`[key: string]: string` 表示 `dictionary` 对象的属性名是字符串类型，且属性值也是字符串类型。

---

### **总结**

在 TypeScript 中，定义对象类型有几种方式，主要通过对象字面量、接口、类型别名来实现：

1. **对象字面量类型**：在声明时直接定义属性及其类型。
2. **接口（Interface）**：通过接口声明对象类型，支持继承和扩展。
3. **类型别名（Type Alias）**：通过 `type` 定义对象类型，适合对象、联合类型等。
4. **可选属性**：使用 `?` 来标识可选属性。
5. **只读属性**：使用 `readonly` 修饰符来标识不可修改的属性。
6. **动态属性（索引签名）**：使用索引签名来定义具有动态键名的属性。

使用这些方式可以帮助你更好地描述对象的结构，并在编写 TypeScript 代码时提供更强的类型安全性和提示。


## TypeScript 有哪些常用类型？


在 **TypeScript** 中，有许多内建的基础类型用于表示不同的数据结构。TypeScript 的类型系统是基于 JavaScript 的，并通过类型系统来增强代码的可读性、可靠性和可维护性。以下是一些常用的 TypeScript 类型：

---

### **1. 基本类型**

- **`number`**：表示数值类型，可以是整数或浮点数。

  ```typescript
  let age: number = 25;
  let price: number = 19.99;
  ```

- **`string`**：表示字符串类型。

  ```typescript
  let name: string = 'Alice';
  let greeting: string = 'Hello, world!';
  ```

- **`boolean`**：表示布尔值（`true` 或 `false`）。

  ```typescript
  let isActive: boolean = true;
  let isCompleted: boolean = false;
  ```

- **`void`**：表示没有返回值的类型，通常用于函数没有返回值的情况。

  ```typescript
  function logMessage(message: string): void {
    console.log(message);
  }
  ```

- **`null` 和 `undefined`**：分别表示空值和未定义的值。默认情况下，`null` 和 `undefined` 是不同的类型，但可以通过 `--strictNullChecks` 配置来使它们的使用更加严格。

  ```typescript
  let nothing: null = null;
  let notDefined: undefined = undefined;
  ```

---

### **2. 数组类型**

- **`Array`**：表示数组类型。可以使用 `Array<类型>` 或 `类型[]` 来定义数组。

  ```typescript
  let numbers: number[] = [1, 2, 3, 4];
  let fruits: Array<string> = ['apple', 'banana', 'orange'];
  ```

---

### **3. 元组类型**

- **`tuple`**：表示一个固定长度和类型的数组。不同于普通数组，元组可以包含不同类型的元素。

  ```typescript
  let person: [string, number] = ['Alice', 30];  // 第一项是字符串，第二项是数字
  ```

---

### **4. 枚举类型**

- **`enum`**：表示一个枚举类型，可以定义一组命名的常量。枚举值是数字类型或字符串类型。

  ```typescript
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right
  }

  let move: Direction = Direction.Up;  // move 的值是 1
  ```

  也可以使用字符串枚举：
  
  ```typescript
  enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
  }
  ```

---

### **5. 任意类型 (`any`)**

- **`any`**：表示任何类型的值，适用于不确定类型的情况。使用 `any` 时，TypeScript 会禁用对该变量的类型检查。

  ```typescript
  let variable: any = 42;
  variable = 'Hello, world!';
  variable = true;
  ```

  **注意**：使用 `any` 会丧失 TypeScript 类型检查的优势，应尽量避免过多使用。

---

### **6. 类型推断 (`unknown`)**

- **`unknown`**：表示未知类型。与 `any` 类似，但使用 `unknown` 时，必须先进行类型检查或类型断言，才能对其进行操作。

  ```typescript
  let result: unknown = 30;
  
  if (typeof result === 'number') {
    console.log(result.toFixed(2));  // 需要类型检查
  }
  ```

  **区别**：`unknown` 更安全，因为它强制要求在使用前进行类型检查。

---

### **7. 对象类型**

- **`object`**：表示非原始类型的值（即非 `number`、`string`、`boolean`、`symbol`、`null`、`undefined`）。可以用来定义对象类型。

  ```typescript
  let person: object = { name: 'Alice', age: 30 };
  ```

  **注意**：`object` 类型不能直接访问对象的属性，需要通过类型断言或者进一步的类型定义。

---

### **8. 自定义类型（类型别名 `type`）**

- **`type`**：可以使用 `type` 创建复杂的类型别名，结合联合类型、交叉类型、映射类型等实现更复杂的类型。

  ```typescript
  type StringOrNumber = string | number;
  let value: StringOrNumber = 42;
  value = 'Hello';

  type Person = {
    name: string;
    age: number;
  };
  let person: Person = { name: 'Alice', age: 30 };
  ```

---

### **9. 联合类型 (`|`)**

- **联合类型**：通过 `|` 表示一个变量可以是多种类型中的任意一种。

  ```typescript
  let id: string | number = 123;
  id = 'ABC';

  function greet(name: string | string[]) {
    if (typeof name === 'string') {
      console.log(`Hello, ${name}`);
    } else {
      console.log(`Hello, ${name.join(', ')}`);
    }
  }
  ```

---

### **10. 交叉类型 (`&`)**

- **交叉类型**：通过 `&` 将多个类型合并为一个类型，表示一个变量必须同时满足多个类型的要求。

  ```typescript
  type Employee = {
    name: string;
    salary: number;
  };

  type Manager = Employee & {
    department: string;
  };

  const manager: Manager = {
    name: 'Alice',
    salary: 80000,
    department: 'HR'
  };
  ```

---

### **11. 类型断言**

- **`as`**：类型断言用于告诉 TypeScript 我们知道某个变量的类型是什么。类型断言类似于强制类型转换。

  ```typescript
  let value: unknown = 'Hello, TypeScript!';
  let str: string = value as string;
  ```

  或者：

  ```typescript
  let value: unknown = 'Hello, TypeScript!';
  let str = <string>value;  // 另一种语法
  ```

---

### **12. 泛型（Generics）**

- **`Generics`**：通过泛型可以定义能够适应多种类型的函数、类和接口。

  ```typescript
  function identity<T>(arg: T): T {
    return arg;
  }

  let result = identity<string>('Hello, world!');
  ```

  泛型不仅限于函数，也可以应用于接口和类：

  ```typescript
  interface Box<T> {
    value: T;
  }

  let box: Box<number> = { value: 42 };
  ```

---

### **总结**

TypeScript 提供了丰富的内建类型，用于描述 JavaScript 中的各种数据结构。常用的基本类型包括：

- **基本类型**：`number`、`string`、`boolean`、`void`、`null`、`undefined`。
- **集合类型**：`Array`、`tuple`、`enum`。
- **类型系统**：`any`、`unknown`、`object`、`type`（类型别名）、`union`（联合类型）、`intersection`（交叉类型）。
- **其他特性**：`interface`、`class`、`Generics`。

通过合理使用这些类型，可以大大提升代码的类型安全性和可维护性。