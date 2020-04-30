









# 问题

定义的pojo模型,都是后端提前定义好的,那定义一个完整的数据类型接口其实前端还干不了

比如定义一个person的接口

解决方式:可以用断言???   ?:表示可有可无



```js
接口,在ts当中,只是一个ts帮助我们做语法校验的工具,并不会变成js代码
接口,在ts当中,只是一个ts帮助我们做语法校验的工具,并不会变成js代码
接口,在ts当中,只是一个ts帮助我们做语法校验的工具,并不会变成js代码
接口,在ts当中,只是一个ts帮助我们做语法校验的工具,并不会变成js代码

service是一个类,
    1.实现接口,接口当中定义好规范,比如字段,比如函数
	2.service来实现这个接口,并且调用里面的方法
接口规定了返回值和需要传递进去的参数
然后在service当中来实现它

最后controller相当于vuex和saga  来实现service做复杂的业务处理

接口当中所需要传递进来的参数如果是一个对象?比如Person怎么办

定义pojo

pojo是一个对象模型,是一个类,私有属性保护属性等等,有get/set方法
正常方法定义成public就可以,需要返回值就返回

比如class result{
	
	private status:boolean;
	private message:string;
	isSuccess:()=>this.status
	get Message方法和setMessage方法
}

接口需要pojo来做一个泛型类型,传递或者返回的参数

service也需要pojo

controller层也需要pojo

controller层
Map <String,Object> model = new Map()

List <User> list = new ArrayList[]


两种接口,一种是用于定义类型,比如person,应该有哪些属性,姓名年龄+getset方法

第二种接口是函数,用于定义类型+设置和返回值
class Result {
  private Status: boolean
  private Message: string

  public Result(success: boolean, message: string) {
    // super;
    this.Status = success
    this.Message = message
  }

  public get getStatus(): boolean {
    return this.Status
  }
  public set setStatus(v: boolean) {
    this.Status = v
  }
  public get getMessage(): string {
    return this.Message
  }
  public set setMessage(v: string) {
    this.Message = v
  }
}

// 调用
let res = new Result()
res.Result(true, '成功了')
//直接调用,不需要()调用
console.log('res.getMessage', res.getMessage)


```



## 问题2

工厂模式怎么创建实体类,这样的话,这tm不是成后端语言了吗  我前端要那么多干什么



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

## 接口+函数+泛型,多

```js
interface Person6<T> {
  readonly name: string
  age?: number
  [propName: string]: any
  // 方式1
  chang?(person:T): string
  // 方式2
  change?: () => T
}

```

## 类+接口

```js
 class User implements Person6<Fea> {
  name = 'qiu'
  age: 18
}
```

## 函数+接口,少

```js
interface sayH {
  (word: string): string
}

const syHi: sayH = (word: string) => {
  return word
}

console.log('syHi()', syHi('hello'))
```



## 类

### 单例模式,static

```js
static是把属性或者方法直接挂在类上面,而不是类的实例上面


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





写一个get set方法的装饰器



### 手写一个new方法

![image-20200430115812056](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200430115812056.png)



https://blog.csdn.net/qq_43268396/article/details/103422668