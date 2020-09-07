function dec(target: any, key: string): any {
  console.log('target', target)
  // 属性不可被修改，类似descriptor
  // const descriptor: PropertyDescriptor = {
  //   writable: false,
  // }
  // return descriptor
  // 对属性做修改,这样会不起作用，因为修改的是原型上面的name
  target[key] = 'lee'
}
class propsExample {
  // 这里的name是属性上面的name，放在实例上面
  @dec
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  public get name(): string {
    return this._name
  }

  public set name(v: string) {
    this._name = v
  }
}

// 获得
let ttt = new propsExample('1')
console.log('(ttt as any).__proto__.name', (ttt as any).__proto__.name)
