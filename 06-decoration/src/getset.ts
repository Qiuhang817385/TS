// 访问器修饰符,访问器的修饰器,没啥必要
function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = 'newVal'
}
class getExample {
  constructor(private _name: string) {}

  public get name(): string {
    return this._name
  }
  @visitDecorator
  public set name(v: string) {
    this._name = v
  }
}
