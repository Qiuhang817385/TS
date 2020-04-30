interface Feature {
  id: number
  name: string
}

interface Result<T> {
  OK: 0 | 1
  data: T[]
}

let datas: any[]
datas = [
  { id: 7, name: '改造1' },
  { id: 8, name: '改造2' },
]

let getData = <T>(): Result<T> => {
  return { OK: 1, data: datas }
}
// 定义和使用没什么问题,但是不能在函数定义的时候就对它进行操作
let getData2: <T>(name: T, age: T) => Result<T> = () => {
  return { OK: 1, data: datas }
}

console.log('getData<Feature>()', getData<Feature>())
let add = (a: number, b: number): number => a + b

console.log('add(3,4)', add(3, 4))

interface Num {
  a?: number
  b?: number
}

const sub = <T>(p1: T | number, p2: T | number) => {
  // 不能对p1和p2进行操作+ - * /
  // p1+p2
}

sub<number>(1, 3)
// console.log('sub<Num>({ a: 1 })', sub<Num>({ a: 1 }, { b: 2 }))
