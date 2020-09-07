// 类的装饰器
// 装饰器本身是一个函数
// 参数1，类的构造函数
// 现在装饰器是一个实验性质的语法？
function testDecoration(constructor: any) {
  constructor.prototype.getName = () => {
    console.log('dell')
  }
}
@testDecoration
class Test {}
const test = new Test()
;(test as any).getName()
