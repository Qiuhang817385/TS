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

// type可以代表基础类型
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
getPersonName4(person4)

// 通过字面量方式,强校验
/* 
getPersonName4({
  name: 'qiu',
  age:17,
  sex:'man'
})
 */
// 解决方式

interface Person5 {
  readonly name: string
  age?: number
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
