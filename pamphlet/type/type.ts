// boolean
let isDone: boolean = false;

// digtial

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// string
let names: string = "bob";

names = "smith";

// 模板字符串
let namea: string = "Gene";
let age: number = 37;
let sentence: string = `Hello,my Name is ${name}`;

// arr
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

// 元组 Tuple
// 表示一个已知元素数量和类型的数组
// 已知元素数量和类型

//declare a tuple
let x: [string, number];

x = ["hello", 10];

// 访问一个越界的元素，会使用联合类型替代

// 枚举
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

// 默认情况下，从0开始为元素编号。
// 也可以手动的指定成员的数值

enum Color2 {
  apple = 2,
  banana = 4,
  orange = 5
}
let colorName: string = Color2[4];

// colorName:banana

// 编程阶段还不清楚类型的变量指定一个类型Any
// 比如来自用户输入或第三方代码库

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
// 不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂// 不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂
// 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
// 不是很理解

let notSure2: any = 4;
notSure2.ifItExists();
notSure2.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed();
// 不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂
// Error: Property 'toFixed' doesn't exist on type 'Object'.

let lists: any[] = [1, true, "free"];
list[1] = 100;



// Void void类型像是与any类型相反

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：

let u: undefined = undefined;
let n: null = null;
// 默认情况下null和undefined是所有类型的子类型


// Never
// 不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
// 推断的返回值类型为never
function fail() {
    // return error("Something failed");
}

// 不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂不懂
// Object类型
// 使用object类型，就可以更好的表示像Object.create这样的API

declare function create(o:Object|null):void;
create({prop:0});

create(null); // OK



// 差一个类型学习
// 类型断言
// 类型断言
// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

// 类型断言有两种形式。 其一是“尖括号”语法：

let someValueJian: any = "this is a string";

let strLengthsJian: number = (<string>someValueJian).length;
// 另一个为as语法：

let someValueas: any = "this is a string";

let strLengthas: number = (someValueas as string).length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。



