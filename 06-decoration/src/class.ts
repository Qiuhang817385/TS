// T是一个对象,包含构造函数,是被构造函数new出来的实例
// 相当于new了一个构造函数,参数是很多的参数,这样保证了construct是一个构造函数
function testDecorator2<T extends new (...args: any[]) => any>(
  // 就相当于construct是一个实例
  constructor: T
) {
  // 有了这个实例上面的属性和方法
  return class extends constructor {
    getName() {
      return this.name
    }
  }
}
@testDecorator2
class Test2 {
  constructor(private _name: string) {}
}

const test2 = new Test2('1')

// ============================================================代码提示
function testDecorator3() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      getName() {
        return this.name
      }
    }
  }
}
// 调用工厂模式返回装饰器并且传递一个参数
const Test3 = testDecorator3()(
  class {
    constructor(private _name: string) {}
  }
)

const test3 = new Test3('1')
test3.getName()
