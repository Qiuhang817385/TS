## 变量声明

```js
1.数组
	let list2: Array<number> = [1, 2, 3]

```

```js
Type Point = {x:number,y:number}

更好的写法是用接口
interface Point	{x:number,y:number}

function tsDemo(data:Point){
    return Math~~~
}
    
```





## 函数

```js
function fn11(name: string, age?: number): void {}

let fn2 = (person: string): string => '123'

let fn3 = (person: string): any => {}
```





## 接口

```js
1.接口当中的函数声明
interface Counter {
  (start: number): string		//匿名函数
  interval: number
  reset(): void
}

2.
export interface Feature {
  id: number
  name: string
  foo?: () => string			//具名函数
}

export interface Result<T> {
  ok: 0 | 1
  // data,可能是shop商品数组,可能是user数组
  data: T[]
}

3.对象使用接口

const teacher:Person = {
    
}
```



```js
function getCounter(): Counter {
  // 断言,counter是接口当中一个Counter的类型的函数,返回值是string
  let counter = <Counter>function(start: number) {}
  counter.interval = 123
  counter.reset = function() {}
  return counter
}
```

## 泛型

```js
const getDP = <T>(): Promise<Result<T>> => {
  let datas: any[];
  datas = [
    { id: 5, name: "改造1" },
    { id: 6, name: "改造2" }
  ];
  // 这种方式,规避了返回值类型
  return new Promise(resolve=>resolve({ ok: 1, data: datas }));
  // 表明返回的resove是一个T类型,这种方式,说明了两次返回值类型
  return Promise.resolve<Result<T>>({ ok: 1, data: datas });
};


简单的箭头函数形式
//这种方式感觉更熟悉,并且可以使用泛型
let add = (a: number, b: number): number => a + b

const getD = <T>(): Result<T> => {
  let datas: any[];
  datas = [
    { id: 7, name: "改造1" },
    { id: 8, name: "改造2" }
  ];
  return { ok: 1, data: datas };
};


泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型
泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型
//冒号后面就是类型,接收一个什么类型?,返回一个什么类型?.
let getData2: <T>() => Result<T> = () => {
  return { OK: 1, data: datas }
}
let getData = <T>(): Result<T> => {
  return { OK: 1, data: datas }
}

泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型
泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型泛型

```

```js
调用
private async created() {
    console.log("123", 123);
    this.feature3 = (await getD<Feature>()).data;
  }
```





## 断言

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。

```js
let someValueJian: any = 'this is a string'

let strLengthsJian: number = (<string>someValueJian).length
```









## 解构赋值

```js
//  TS的结构赋值
function frestructure([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}
```

