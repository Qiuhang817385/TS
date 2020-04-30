class Person {
  name = 'dell'
  getName() {
    return this.name
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher'
  }
  getName() {
    // 利用super关键字调用父类的方法
    return super.getName() + 'lee'
  }
}

// 一般用super干神马,调用父类方法
// ============================================================访问类型和构造器
// private
// protected  类内和继承的子类当中可以使用,protected 在外部使用就报错
//
//  public
// 默认public

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

// 调用,构造方法不支持传参.只能通过实例来传递
// 这样?太low了吧...
let res = new Result(true, '123')
// res.Result(true, '成功了')
//直接调用,不需要()调用
// res.getStatus,避免了直接修改对象的值
console.log('res.getMessage', res)

// ============================================================更简单的写法
class Result2 {
  constructor(private Status: boolean, private Message: string) {}
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
let res2 = new Result2(true, 'ok')
console.log('res2', res2)
res2.getMessage

// ============================================================调用父类的构造函数
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
const cc = new Child('姓名', 'man', 24)
console.log('cc', cc)

// ============================================================GET和set
class Result3 {
  constructor(private _Status: boolean, private _Message: string) {}
  public get Status(): boolean {
    return this._Status
  }
  public set Status(v: boolean) {
    this._Status = v
  }
  public get Message(): string {
    // return的时候可以做处理
    return this._Message
  }
  public set Message(v: string) {
    // set 的时候可以做处理,v = v+'123'~~~
    this._Message = v
  }
}
let res3 = new Result3(true, 'ok')
console.log('res3', res3)
res3.Message

// ============================================================只允许通过这个类,获取一个类的实例
// 单例模式,只能有一个实例
// static是把属性或者方法直接挂在类上面,而不是类的实例上面
class Demo {
  // 外部调用不了instance,只能在类的里面使用
  // 用来存储new的Demo
  private static instance: Demo
  // 不允许外部使用new Demo的方法创建实例
  private constructor() {}
  static getInstance() {
    // 如果不存在,实例一个Demo
    if (!this.instance) {
      this.instance = new Demo()
    }
    return this.instance
  }
}
// 这样就创建了一个单例模式

let demo1 = Demo.getInstance()
let demo2 = Demo.getInstance()
// demo1和demo2一样
