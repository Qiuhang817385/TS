function echo<T>(agrs: T): T {
  return agrs
}
const resa = echo<boolean>(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const ressw = swap<string, number>(['1', 2])

function echoWithArr<T>(agrs: T[]): T[] {
  console.log(agrs.length)
  return agrs
}

const a = echoWithArr([1, 2, 3])
// 约束泛型
interface IWithLength {
  length: number
}
// 这就是约束泛型
// 这就是约束泛型
// 这就是约束泛型
// 这样的话,传递的时候,传递数组或者字符串都OK了,只要含有length属性
function echoWithArr2<T extends IWithLength>(agrs: T[]): T[] {
  console.log(agrs.length)
  return agrs
}

// 需求，first是字符，second也是字符
const addT = <T>(first: T, second: T) => {
  // if (typeof first === 'string' || typeof second === 'string') {
  return `${first}${second}`
  // }
  // return first + second
}

addT<string>('1', '2')

// ============================================================泛型数组
const map = <T>(params: T[]) => {
  return params
}
let resmap = map<string>(['a', 'b'])
console.log('resmap', resmap)

const map2 = <T1, T2>(params1: T1[], params2: T2) => {
  // 这里怎么解决，其实这样，就相当于已经给T1和T2赋值了，也就是map3
  // if(typeof params2 ==='string'&& T1 ){
  //   return params1.push(params2)
  // }
}
//其实就相当于这样
const map3 = (params1: string[], params2: string) => {
  return params1.push(params2)
}
// 等同于
const map4 = <T1, T2, T3>(params1: T1, params2: T2, params3: T3[]) => {
  // 怎么进入？
  // if(typeof params1=='string'){
  //   params3.push(params1)
  // }
  // return
}
// 使用，这样我会啊，问题是怎么定义数组??????或者对象---->  params3:Array<T3>| params3: T3[]  这样定义
// 使用，这样我会啊，问题是怎么定义数组??????或者对象---->  params3:Array<T3>| params3: T3[]  这样定义
// 使用，这样我会啊，问题是怎么定义数组??????或者对象---->  params3:Array<T3>| params3: T3[]  这样定义
// 使用，这样我会啊，问题是怎么定义数组??????或者对象---->  params3:Array<T3>| params3: T3[]  这样定义
// map4<string,string>('1','2')

let resmap2 = map2<string, number>(['a', 'b'], 123)
console.log('resmap', resmap)
