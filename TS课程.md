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