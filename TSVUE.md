![image-20200428230120998](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200428230120998.png)

![image-20200428230138668](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200428230138668.png)

![image-20200428230302116](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200428230302116.png)

基于类的组件

![image-20200428230708785](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200428230708785.png)



火狐的插件





## 类的特性

![image-20200429111841317](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429111841317.png)

![image-20200429112828137](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429112828137.png)



访问



只读属性不可更改

静态属性的话,只能通过类目.属性来访问



![image-20200429113000476](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429113000476.png)





### 初始化变量

![image-20200429113428278](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429113428278.png)

相当于先在外部定义一个private a = '123';

然后再在构造函数内部使用



### 方式1.麻烦,外部private_foo:string

​	内部 this._foo = 'foo';

### 方式2.直接在构造函数上面private



## 暴露私有变量

![image-20200429113823835](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429113823835.png)









## class原理

![image-20200429113942404](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429113942404.png)



```js
get set方法  
可以充当计算属性
```

![image-20200429160003985](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429160003985.png)





## 接口

![image-20200429160053057](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429160053057.png)



## 泛型

![image-20200429163339799](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429163339799.png)



## 装饰器问题

![image-20200429180036604](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429180036604.png)





#### Component

```js
vue的所有配置都可传递,data,props,method
@Component({
    props:{
        msg:{
            type:String,
            default:''
        }
    }
    watch:{}
    components:{}
    
}) 装饰器工厂

```

#### prop

![image-20200429181930135](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429181930135.png)

![image-20200429181959649](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429181959649.png)

#### emit

![image-20200429182225466](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429182225466.png)



调用父组件的方法

父组件的名字就是那个名字

需要传递的参数就是返回值或者形参



#### watch

参数1.是要监控的属性

参数二,是之前的watch的选项

![image-20200429182756404](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429182756404.png)





## vuex

![image-20200429183009333](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429183009333.png)



映射远程state到本地props

![image-20200429183046897](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429183046897.png)

跟远程的对应上名字



跟远程的不一样

![image-20200429183124824](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429183124824.png)

![image-20200429183154770](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429183154770.png)





使用

![image-20200429183224079](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429183224079.png)



## 装饰器原理

![image-20200429184715434](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429184715434.png)

### 类,方法,访问符,属性,参数

求值之后必须是一个函数

#### 类

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429184853365.png" alt="image-20200429184853365" style="zoom:67%;" />

#### 方法

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429185059572.png" alt="image-20200429185059572" style="zoom:67%;" />

属性

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429185349030.png" alt="image-20200429185349030" style="zoom:67%;" />





## 自己写

![image-20200429190606480](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429190606480.png)

# 看不懂







![image-20200429180057380](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429180057380.png)

![image-20200429180107878](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200429180107878.png)





## 断言

```js
?: 将来可能赋值

!: 将来一定赋值

private msg!:string
```

