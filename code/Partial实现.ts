// 1. 基础 Partial 实现
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// type 和 infterface 区别，基础用法差不多，但是 type 一般可以搞个联合类型和类型的组合，然后支持泛型
// interface就是复杂对象类型的正常声明，可以继承等等，这就是一些区别吧 
// 2. 更严格的 Partial 实现（排除 undefined）
type StrictPartial<T> = {
  [P in keyof T]?: T[P] | undefined;
};

// 3. 深度 Partial 实现（递归处理嵌套对象）
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 4. 选择性 Partial（只对特定属性应用 Partial）
type SelectivePartial<T, K extends keyof T> = {
  [P in K]?: T[P];
} & {
  [P in Exclude<keyof T, K>]: T[P];
};

// 示例类型定义
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  address: {
    street: string;
    city: string;
    country: string;
  };
  hobbies: string[];
}

// 使用示例
function demonstratePartial() {
  // 原始类型
  const user: User = {
    id: 1,
    name: "张三",
    email: "zhangsan@example.com",
    age: 25,
    address: {
      street: "长安街",
      city: "北京",
      country: "中国"
    },
    hobbies: ["读书", "游泳"]
  };

  // 使用 MyPartial - 所有属性变为可选
  const partialUser: MyPartial<User> = {
    name: "李四",
    // 其他属性都是可选的
  };

  // 使用 DeepPartial - 嵌套对象也变为可选
  const deepPartialUser: DeepPartial<User> = {
    name: "王五",
    address: {
      city: "上海"
      // street 和 country 都是可选的
    }
  };

  // 使用 SelectivePartial - 只对特定属性应用 Partial
  const selectivePartialUser: SelectivePartial<User, 'name' | 'age'> = {
    // name 和 age 是可选的
    name: "赵六",
    // id, email, address, hobbies 仍然是必需的
    id: 2,
    email: "zhaoliu@example.com",
    age: 30,
    address: {
      street: "南京路",
      city: "上海",
      country: "中国"
    },
    hobbies: ["编程"]
  };

  console.log("原始用户:", user);
  console.log("部分用户:", partialUser);
  console.log("深度部分用户:", deepPartialUser);
  console.log("选择性部分用户:", selectivePartialUser);
}

// 5. 实际应用场景 - 更新函数
function updateUser(id: number, updates: MyPartial<User>): void {
  console.log(`更新用户 ${id}:`, updates);
  // 在实际应用中，这里会调用数据库更新操作
}

// 6. 表单处理场景
interface UserForm {
  name: string;
  email: string;
  age: number;
  bio: string;
}

function handleFormSubmit(formData: MyPartial<UserForm>): void {
  // 只提交用户填写的字段
  const submittedData = Object.keys(formData).reduce((acc, key) => {
    const value = formData[key as keyof UserForm];
    if (value !== undefined && value !== '') {
      acc[key as keyof UserForm] = value;
    }
    return acc;
  }, {} as Partial<UserForm>);

  console.log("提交的数据:", submittedData);
}

// 7. 配置对象场景
interface AppConfig {
  apiUrl: string;
  timeout: number;
  retries: number;
  debug: boolean;
}

function createApp(config: MyPartial<AppConfig> = {}): void {
  const defaultConfig: AppConfig = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3,
    debug: false
  };

  const finalConfig = { ...defaultConfig, ...config };
  console.log("应用配置:", finalConfig);
}

// 8. 测试 Partial 的类型检查
function testPartialTypeChecking() {
  // ✅ 正确：只提供部分属性
  const partial1: MyPartial<User> = { name: "测试用户" };

  // ✅ 正确：提供所有属性
  const partial2: MyPartial<User> = {
    id: 1,
    name: "完整用户",
    email: "test@example.com",
    age: 25,
    address: { street: "测试街", city: "测试市", country: "中国" },
    hobbies: ["测试"]
  };

  // ✅ 正确：空对象
  const partial3: MyPartial<User> = {};

  // ❌ 错误：提供了不存在的属性
  // const partial4: MyPartial<User> = { invalidProp: "无效" };

  console.log("类型检查测试通过");
}

// 导出类型和函数
export {
  MyPartial,
  StrictPartial,
  DeepPartial,
  SelectivePartial,
  demonstratePartial,
  updateUser,
  handleFormSubmit,
  createApp,
  testPartialTypeChecking
};

// 运行演示
if (require.main === module) {
  demonstratePartial();
  testPartialTypeChecking();

  // 测试实际应用场景
  updateUser(1, { name: "更新后的名字", age: 26 });

  handleFormSubmit({
    name: "表单用户",
    email: "form@example.com"
    // age 和 bio 未填写，为可选
  });

  createApp({
    apiUrl: 'https://custom-api.com',
    debug: true
    // timeout 和 retries 使用默认值
  });
}

// 自己实现一个 partial

type mypartial<T> = {
  [P in keyof T]?: T[P]
}


interface aaa {
  a: string,
  b: string
}