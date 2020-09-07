// 参数的装饰器
function dec2(target: any, method: string, paramIndex: number) {
  // target [Function: parmExample]
  // method undefined 方法名
  // paramIndex 0
  console.log('target', target)
  console.log('method', method)
  console.log('paramIndex', paramIndex)
}
class parmExample {
  private _name: string
  constructor(@dec2 name: string) {
    this._name = name
  }

  public get name(): string {
    return this._name
  }

  public set name(v: string) {
    this._name = v
  }
}

let parm = new parmExample('123')
