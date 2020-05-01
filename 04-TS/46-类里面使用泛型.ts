interface Item {
  name: string
}
// 泛型继承接口，这样T里面必须有接口里面的东西
// 也可以直接继承基础类型，比如T extends number|string
class DataManager<T extends Item> {
  // 其实这一步就是定义传递的参数必须是一个接口类型的数组
  constructor(private _data: T[]) {}
  // 这里改成string就ok了
  getItem(index: number): string {
    return this._data[index].name
  }
}

const data = new DataManager([
  {
    name: 'qiuhang',
  },
  {
    name: 'zhuziyi',
  },
])
