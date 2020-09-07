/**
 * target,对应方法
 * 普通方法-->就是类的prototype
 * 静态方法-->对应类的构造函数
 *
 * key:函数名
 *
 * descriptor,控制函数是否可以枚举?方法是否可以被重写?get/set/重写/value-->
 * 指的是方法原始的值,就是本身这个方法,可以重写或者变更
 *
 * 实例.getName = () =>{}
 * 这样的话,方法就被修改了
 */
function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // target methodtEST { getName: [Function] }
  console.log('target', target)
  descriptor.writable = false
}
class methodtEST {
  constructor(private _name: string) {}
  @getNameDecorator
  getName() {
    return this._name
  }
}
