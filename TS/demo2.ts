const getPersonName = (person: { name: string }) => {
  console.log(person.name)
}
const setPersonName2 = (person: { name: string }, name: string) => {

  person.name = name
}
// ============================================================定义接口

interface Person {
  name: string
  age?: number
}

// type可以代表基础类型,也可以代表函数类型
type Person1 = string
// 接口要求传递的是对象
const getPersonName3 = (person: Person) => {
  console.log(person.name)
}
const setPersonName4 = (person: Person, name: string) => {
  person.name = name
}

const person = {
  name: 'qiu',
}
getPersonName3(person)

// ============================================================类型别名
type PlusType = (x: number, y: number) => number
function sssP(x: number, y: number): number {
  return x + y
}
const sssP2: PlusType = sssP

// ============================================================联合类型
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getNameRes(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
// ============================================================接口2
interface Person2 {
  readonly name: string
  age?: number
}
// 再对person.name进行赋值的话就报错,这个限制太严格

// ============================================================字面量强校验

interface Person4 {
  readonly name: string
  age?: number
}

const person4 = {
  name: 'qiu',
  age: 17,
  sex: 'man',
}
const getPersonName4 = (person: Person) => {
  console.log(person.name)
}
// 通过变量方式传递,弱校验
// 通过变量方式传递,弱校验
// 通过变量方式传递,弱校验
// 通过变量方式传递,弱校验
// 通过变量方式传递,弱校验
getPersonName4(person4)

// 通过字面量方式,强校验
// 通过字面量方式,强校验
// 通过字面量方式,强校验
// 通过字面量方式,强校验
// 通过字面量方式,强校验

/* getPersonName4({
  name: 'qiu',
  age:17,
  sex:'man',
})
 */
 /* 除了原来定义的name和age 其余都会报错,这里是sex */
// 解决方式

interface Person5 {
  readonly name: string
  age?: number
  // 表示除了可以接收name和age,也可以接收其他的数据类型
  // 表示除了可以接收name和age,也可以接收其他的数据类型
  // 表示除了可以接收name和age,也可以接收其他的数据类型
  // 表示除了可以接收name和age,也可以接收其他的数据类型,名字是string,值是any类型
  [propName: string]: any
}

// ============================================================函数

interface Person6<T> {
  readonly name: string
  age?: number
  [propName: string]: any
  // 方式1
  chang?(person: T): string
  // 方式2
  change?: () => T
  rap?(): void
}
interface Fea {}
// ============================================================类+接口
class User implements Person6<Fea> {
  name = 'qiu'
  age: 18
}

// ============================================================接口继承
interface Person7 extends Person5 {
  self: string
}
// ============================================================函数接口
interface sayH {
  (word: string): string
}

const syHi: sayH = (word: string) => {
  return word
}

console.log('syHi()', syHi('hello'))

// ============================================================函数接口2
// 定义一个函数的接口类型,名字就是IPlus
interface IPlus {
  (a: number, b: number): number
}
// function plus(a: number, b: number): IPlus {
//   return a + b
// }

const plus : IPlus =(a:number,b:number)=>{
  return a+b;
}