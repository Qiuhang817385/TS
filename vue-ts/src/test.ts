/**
 * 类型注解
 */
let foo = 'xx' //有明确赋值,类型推论
let bar: string
// 数组类型的约束
// 必须字符串数组
let names: string[]
// 控制造型
let abc: { foo: string; bar: number } //少
abc = { foo: '123', bar: 123 }
let efg: string | number //少
// 任意类型
let a: any

let list: any[]
// 元组类型,更加精确的声明哪一个位置上是什么类型,少见
/**
 * 在函数当中的类型在函数当中的类型在函数当中的类型在函数当中的类型在函数当中的类型在函数当中的类型在函数当中的类型
 */
// 必填参数,必须传递一个参数
function fn1(parm1: string): string {
  // 对返回值的约束
  return '21'
}
// 可选参数,?-->断言,可选
// 可选参数要在必须参数后面
function fn11(name: string, age?: number): void {}
//默认值
function fn12(name: string, age: number = 12): void {}

let fn2 = (person: string): string => '123'

let fn3 = (p1: string): any => {}

// 没有返回值
const fn4 = (params: any): void => {}
// string,number,boolean,void,any

// 函数重载,不多,以参数的数量和类型区分多个同名函数
function info(a: object): object
function info(a: string): string
function info(a: any): any {
  if (typeof a === 'object') {
    return a.name
  } else {
    return '123'
  }
}

// ============================================================接口
// 只声明结构,不需要实现
interface Person {
  firstName: string
  lastName: string
  findPerson(name?: any): void
}
class Human implements Person {
  firstName: string = ''
  lastName: string = ''
  findPerson(name: string) {
    console.log('12343423')
  }
}
let h1 = new Human()
h1.findPerson('123')

// ============================================================泛型

//  TS的结构赋值
function frestructure([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}

let list2: Array<number> = [1, 2, 3]

// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

// 类型断言有两种形式。 其一是“尖括号”语法：

let someValueJian: any = 'this is a string'

let strLengthsJian: number = (<string>someValueJian).length
// 另一个为as语法：

let someValueas: any = 'this is a string'

let strLengthas: number = (someValueas as string).length
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
// 类似强制类型转换
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(src: string, subString: string) {
  let result = src.search(subString)
  return result > -1
}

interface Counter {
  (start: number): string
  interval: number
  reset(): void
}
function getCounter(): Counter {
  // ??????
  let counter = <Counter>function(start: number) {
    return start + ''
  }
  counter.interval = 123
  counter.reset = function() {}
  return counter
}
let c = getCounter()
console.log('c(10)', c(10))

c.reset()
c.interval = 5.0

// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。
