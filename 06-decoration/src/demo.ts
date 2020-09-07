// 装饰器例子，利用装饰器，解决try catch重复编写的问题
const userInfo: any = undefined
function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    // 对应函数的具体实现部分
    const fn = descriptor.value
    descriptor.value = function () {
      try {
        fn()
      } catch (error) {
        console.log(msg + '不存在')
      }
    }
  }
}
class TestDemo {
  @catchError('userInfo.name')
  getName() {
    return userInfo.name
  }
  @catchError('userInfo.age')
  getAge() {
    return userInfo.age
  }
}
