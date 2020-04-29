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
let getData2: <T>() => Result<T> = () => {
  return { OK: 1, data: datas }
}

console.log('getData<Feature>()', getData<Feature>())
let add = (a: number, b: number): number => a + b

console.log('add(3,4)', add(3, 4))
