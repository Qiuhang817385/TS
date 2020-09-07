interface Person {
  name: string
  age: number
  gender: string
}
// keyof 每次读取键值,相当于生成了3个
// 相当于type T = 'name';
// key:'name'
// Person['name']
// <T>
class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key]
  }
}

const teacher = new Teacher({
  name: 'qiu',
  age: 13,
  gender: 'man',
})
