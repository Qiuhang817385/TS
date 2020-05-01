## 前端的缺陷,只能根据返回的数据来定义类型







## 创建项目

```js
npx create-react-app --template typescript

create-react-app --template typescript
```



## 添加antd

```js
安装并且按需加载
yarn add  antd  react-app-rewired  customize-cra	babel-plugin-import


"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
}
   
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
  }),
 );

```

## 添加路由

```js
yarn add react-roter-dom	@types/react-router-dom

```





## antd校验的使用

```js
 <Form.Item
          hasFeedback
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
            {
              max: 6,
              message: '最大长度为6位',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

//确认密码

<Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
               //确认密码的校验
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }

              return Promise.reject(
                'The two passwords that you entered do not match!'
              )
            },
          }),
        ]}
      >
            //密码框
        <Input.Password />
      </Form.Item>


```



## hook使用Ts

```js
 

const [autoCompleteResult, setAutoCompleteResult] = useState<any>([])
useState
大多数情况下，useState 的类型可以从初始化值推断出来。但当我们初始化值为 null、undefined或者对象以及数组的时候，我们需要制定useState的类型。

// 可以推断 age 是 number类型
const [age, setAge] = useState(20);

// 初始化值为 null 或者 undefined时，需要显示指定 name 的类型
const [name, setName] = useState<string>();

// 初始化值为一个对象时
interface People {
    name: string;
    age: number;
    country?: string;
}
const [owner, setOwner] = useState<People>({name: 'rrd_fe', age: 5});

// 初始化值是一个数组时
const [members, setMembers] = useState<People[]([]);
    
----------------------------------------------------------------------------    
    useEffect
useEffect 用来在组件完成渲染之后增加副作用(side effect)，可以返回一个函数，用来做一些状态还原、移除listener等 clean up的操作。不需要处理返回值，所以可以不指定他的类型。useLayoutEffect类似。


useEffect(() => {
    const listener = addEventListener(name, callback);
    return () => {
        removeEventListener(listener)
    }
}, [name, callback]);

---------------------------------------------------------------------------- 
    
useMemo、useCallback
对于 useMemo 和 useCallback 我们可以从函数的返回值中推断出来他们返回的类型，需要显示指定。


const age = 12;
// 推断 doubleAge 是 number类型
const doubleAge = useMemo(() => {
    return age * 2;
}, [age]);

// 推断 addTen 类型是 (initValue: number) => number
const addTen = useCallback((initValue: number) => {
    return initValue + 10;
});

    
---------------------------------------------------------------------------- 
useRef
useRef 有两种比较典型的使用场景：

场景一： 和 hook 之前的 ref 类似，用来关联一个 Dom节点或者 class component 实例，从而可以直接操作 Dom节点 或者class component 的方法。 通常会给 ref 的 readonly 属性 current 初始化为 null，直到 ref 关联到组件上。 通常我们需要指定 useRef 的类型，参考如下:


const RRDTextInput = () => {
    const inputRef = useRef<TextInput>(null);
    return <TextInput ref={inputRef} placeholder="人人贷大前端" />;
}

场景二：使用 ref 替代 class component 中的实例属性，这种场景我们可以从初始化值中推断出类型，current 也是可修改的。


// 推断 current 是 number 类型
const age = useRef(2);
age.current += 1;
---------------------------------------------------------------------------- 

    useReducer
useReducer 可以认为是简配版的redux，可以让我们把复杂、散落在四处的useState，setState 集中到 reducer中统一处理。类似我们同样可以从reducer 函数(state逻辑处理函数)中推断出useReducer 返回的 state 和 dispatch 的 action类型，所以无需在显示的声明，参考如下实例：

type ReducerAction =
    | { type: 'switchToSmsLogin' | 'switchToAccountLogin' }
    | {
        type: 'changePwdAccount' | 'changeSmsAccount';
        payload: {
            actualAccount: string;
            displayAccount: string;
        };
    };

interface AccountState {
    loginWithPwd: boolean;
    pwdActualAccount: string;
    pwdDisplayAccount: string;
    smsActualAccount: string;
    smsDisplayAccount: string;
}

function loginReducer(loginState: AccountState, action: ReducerAction): AccountState {
    switch (action.type) {
        case 'switchToAccountLogin':
            return {
                ...loginState,
                pwdActualAccount: loginState.smsActualAccount,
                pwdDisplayAccount: loginState.smsDisplayAccount,
                loginWithPwd: !loginState.loginWithPwd,
            };
        // 密码登陆页账号发生变化
        case 'changePwdAccount':
            return {
                ...loginState,
                pwdActualAccount: action.payload.actualAccount,
                pwdDisplayAccount: action.payload.displayAccount,
            };
        default:
            return loginState;
    }
}

// 可以从 loginReducer 推断出
// loginState 的类型 满足 AccountState interface
// dispatchLogin 接受的参数满足 ReducerAction 类型
const [loginState, dispatchLogin] = useReducer(loginReducer, initialState);

dispatchLogin({ type: 'switchToAccountLogin' });
dispatchLogin({
    type: 'changePwdAccount',
    payload: {
        actualAccount,
        displayAccount,
    },
});

// 错误： 不能将 logout 类型赋值给 type
dispatchLogin({ type: 'logout' });
// 错误： { type: 'changePwdAccount' } 类型缺少 payload属性
dispatchLogin({ type: 'changePwdAccount' });
```



## react事件对象使用Node

```js
https://developer.mozilla.org/zh-CN/docs/Web/API

HTMLInputElement

TS使用react博客,这个有一点过时,是2018年的
https://blog.csdn.net/s2096828/article/details/83744677

submit使用的是
FormEvent
```

![image-20200430213757513](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200430213757513.png)

![image-20200501011541536](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501011541536.png)

## react里的prop怎么写

```js
const App: React.FC = (props) => {}
怎么使用里面的props.children
```



## ts 函数组件写法2

```js

```

![image-20200501000541920](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501000541920.png)



## 类组件

```js
// 麻烦,还不如之前那样直接类里面state

export default class Home extends Component<Props, State> {
```





## 配置代理

![image-20200501001017443](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501001017443.png)





## qs的使用

```js
yarn add qs @types/qs

qs是一个js的库,需要安装ts的对应
Axios.post(
      '/login',
      qs.stringify({
        password: values.password,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    ).then((res) => {
      if (res.data?.data) {
        setIsLogin(true)
      } else {
        // 登录失败
        setIsLogin(false)
      }
    })
```

## ts使用echarts官方库

![image-20200501011924430](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501011924430.png)

![image-20200501011956442](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501011956442.png)

![image-20200501012010194](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501012010194.png)

![image-20200501012026436](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501012026436.png)





定义类型

![image-20200501012245434](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501012245434.png)





## 对返回的数据类型做统一的描述

描述![image-20200501012534137](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501012534137.png)

定义类型

![image-20200501012815814](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501012815814.png)

![image-20200501012828749](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501012828749.png)





使用

![image-20200501012739101](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501012739101.png)









定义并且使用变量

![image-20200501013008703](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501013008703.png)

![image-20200501013028698](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501013028698.png)





## 接口代码优化

1.官方的接口,改成

![image-20200501013534159](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501013534159.png)

![image-20200501013553408](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501013553408.png)





## 2.封装axios



![image-20200501013700915](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501013700915.png)





![image-20200501013936766](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501013936766.png)

直接定义数据类型,相当于controller



统一加上数据结构





## 后端controller代码

![image-20200501014633778](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501014633778.png)





## 这样类型定义真的冗余了

### 解决,使用一份定义的接口数据内容,要求?前后端都用TS??

![image-20200501014403429](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501014403429.png)







1.定义接口文档类型

前面路由,后面返回值类型

![image-20200501014910749](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501014910749.png)

拷贝粘贴到前端的src目录下面

![image-20200501015045982](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501015045982.png)

![image-20200501015313387](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501015313387.png)



2.后端使用

![image-20200501014740174](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501014740174.png)

![image-20200501014836485](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501014836485.png)





## 学习网站,抽象语法树

![image-20200501015553687](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501015553687.png)





## 和第三方库集成

![image-20200501015717038](C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200501015717038.png)