![image-20200429214233296](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429214233296.png)

下载源码地址

[源码](git.imooc.com)

## 静态的代码类型

```js
JS是动态的类型,也就是,类型可以随意的改变
```



## 好处和优势

JS代码

![image-20200429215440397](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429215440397.png)

![image-20200429215638236](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429215638236.png)

```js
1.TS的静态类型可以帮助定位一些潜在的问题
虽然自己做的不错
但是不要幻想人来守护规则
依靠制定规则来维护规则
2.代码提示,可以直接提示x和y变量存在于data当中,因为你规定了必须有这两个
3.明确类型
```

利用Type定义静态类型

![image-20200429215959617](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429215959617.png)





## 2.4TS环境

### 初始化成ts项目

```js
tsc --init
```



必须使用node

1.单引号

![image-20200429220353218](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429220353218.png)

2.tab缩进,2个

3.save

![image-20200429220857120](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429220857120.png)



## 运行文件

```js
tsc 文件名
ts-node 文件名
```

## 安装ts-node

```js
npm i ts-node -g
运行文件
ts-node 文件名
```





## 2.5深层理解静态类型

```js
当定义了这个变量,这个变量就有了  所属变量的 所有的属性和方法

如果实现了接口,那么就有接口上面所有的属性和方法
```

![image-20200429221718707](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429221718707.png)

![image-20200429221821039](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429221821039.png)





## 2.6类型

```js
基础类型number	string	boolean	undefined	null	void	symbol

对象类型
const teacher:{
    name:string;
    age:number
} = {
    name:'dell',
    age:18
}
//类
class Person{}
let dell:Person = new Person()
//函数
const add : () => number = () => {}

//这种方式感觉更熟悉,但是都可以使用泛型
let add = (a: number, b: number): number => a + b


数组	[]

日期 Date
let date = new Date()
```





## 2.7类型注解和类型推断

类型推断不能作用于两行

```ts
显示的声明就是类型注解--->我们告诉ts变量是什么类型
隐式的话就是类型推断--->ts自己感知

如果TS能自动分析,自己就不用了
如果不能,需要手动添加类型

const n1 = 1;
const n2 = 2;
没必要加注解

let n3 = n1 + n2 
还是没有必要

let obj = {
    name:'123',
    age:18
}
//依然没有必要

let add = (a:number,b:number) => a+b

需要加注解
add(1,2)
```





## 2.8函数的期望返回值,可以提前写上

```js
let add = (a: number, b: number): number => a + b
函数的返回值一般可以推断出来,但是还是加上的好,当然可有可无
```

```js
never返回值类型,一般用的少把
```

结构赋值

![image-20200429230339129](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429230339129.png)

​	正确

![image-20200429230406507](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429230406507.png)



## 2.9多行没有类型推断

​	如果放到两行,神奇的事情发生了,也就是,类型推断不能作用于两行

![image-20200429230713275](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429230713275.png)



## 2.10 数组

```js
let arr:(number|string)[] = [1,'23']

let arr:{name:'string'}[] = [{name:'123'},{name:'345'}]
```



**类型别名**

```js
//这种方式,不能多也不能少
type User = {
    name:'string'
}
class User = {
    name:'string'
}

let arr:User[] = [{name:'123'},{name:'345'}]



```

**元组**

```js
确定了元素个数和类型

确定每一个位置上的类型
let user:[string,string,number] = ['name','male',17]

```

**处理csv数据**

![image-20200430003134804](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200430003134804.png)



## 2.11 接口

![image-20200430094508092](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200430094508092.png)

```js
//接口代表对象或者函数
interface Person {
  name: string
}

// type类型别名可以代表基础类型
type Person1 = string

优先级,接口优先于type类型别名
```



```js
强校验
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
    
    
    解决方式
    额外的运算符
interface Person4 {
  readonly name: string
  age?: number
  //表示还有其他的类型,名是字符串,值是any
  [propName:string]:any;
}
    //OK可以使用了
getPersonName4({
  name: 'qiu',
  age:17,
  sex:'man'
})
```



## 2.12 类

### construct

```js
constructor什么时候执行,new Person()的一瞬间

Java的是同名的构造方法

而JS的是直接constructor
这样更爽啊
class Result {
    
  private Status: boolean
  private Message: string

  constructor(success: boolean, message: string) {
    this.Status = success
    this.Message = message
  }
  // public Result(success: boolean, message: string) {
  //   // super;
  //   this.Status = success
  //   this.Message = message
  // }

}


 res.getStatus 
使用get和set的方法,这样避免了直接来修改对象当中的属性,我这样的话只能修改值,不能干其他的事情

-----------------------------这样会加倍爽爽爽----但是也有个问题,太多的时候就不太合适了.10个?20个?
class Result3 {
  constructor(private _Status: boolean, private _Message: string) {}
  public get Status(): boolean {
    return this._Status
  }
  public set Status(v: boolean) {
    this._Status = v
  }
  public get Message(): string {
    return this._Message
  }
  public set Message(v: string) {
    this._Message = v
  }
}
```



空类也需要调用,只要有继承

![image-20200430135509182](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200430135509182.png)

```js
class Parent {
  constructor(private name: string) {}
}
//这样不对,如果有三个参数的话,也太low了吧
class Child extends Parent {
  constructor(name, private age: number) {
    super(name)
    // props是一个字符串,而不是父类里面的一些东西
    console.log('props', props)
  }
}

---------------------折中的方法
class Parent {
  constructor(private name: string, private sex: string) {}
}
class Child extends Parent {
  constructor(name, sex, private age: number) {
    super(name, sex)
    // props是一个字符串,而不是父类里面的一些东西
    // console.log('props', props)
  }
}

const cc = new Child('姓名', 24)
console.log('cc', cc)
```

## 2.13 get set

```js
好处.~~~,可以对私有属性做加工
```

