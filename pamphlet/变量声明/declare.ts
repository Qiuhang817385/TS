(function() {
  // TypeScript是JavaScript的超集
  // 也就是,JavaScript是TS的子集
  // const是对let的一个增强，它能阻止对一个变量再次赋值。

  function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
      var x = 10;
    }

    return x;
  }

  f(true); // returns '10'
  f(false); // returns 'undefined'
  // 变量 x是定义在*if语句里面*，但是我们却可以在语句的外面访问它。

  for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  }
  // 一个通常的解决方法是使用立即执行的函数表达式（IIFE）来捕获每次迭代时i的值：
  for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
      setTimeout(function() {
        console.log(i);
      }, 100 * i);
    })(i);
  }

  // 作用域
  function f2(input: boolean) {
    let a = 100;

    if (input) {
      // Still okay to reference 'a'
      let b = a + 1;
      return b;
    }

    // Error: 'b' doesn't exist here
    //   return b;
  }

  // 块级作用域的变量的另一个特点是，它们不能在被声明之前读或写\\\\

  // 暂时性死区
  // 在变量声明之前不能读和写

  function foo() {
    // okay to capture 'a'
    return a;
  }

  // 不能在'a'被声明前调用'foo'
  // 运行时应该抛出错误
  foo();

  let a;

  //   重定义和屏蔽
  let x = 10;
  //   let x = 20; // 错误，不能在1个作用域里多次声明`x`

  function f213(x) {
    let x2 = 100; // error: interferes with parameter declaration干扰参数声明
  }

  function g() {
    let x2 = 100;
    // var x = 100; // error: can't have both declarations of 'x'
  }

  // 屏蔽
  let matrix: number[][], sum: number;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  // 这个版本的循环能得到正确的结果，因为内层循环的i可以屏蔽掉外层循环的i。
  // 通常来讲应该避免使用屏蔽，因为我们需要写出清晰的代码。

  // const
  //   最小特权原则
  //   最小特权原则
  //   最小特权原则
  //   最小特权原则
  //   最小特权原则
  //   最小特权原则
  const kitty = {
    name: "Aurora",
    numLives: "11"
  };

  // Error
  //   kitty = {
  //     name: "Danielle",
  //     numLives: '11';
  //   };

  // all "okay"
  //   kitty.name = "Rory";
  //   kitty.name = "Kitty";
  //   kitty.name = "Cat";
  //   kitty.numLives--;

  // 除非你使用特殊的方法去避免，实际上const变量的内部状态是可修改的。
  // const可以修改内部状态,但是不可以直接修改引用

  /* 
使用最小特权原则，所有变量除了你计划去修改的都应该使用const。 基本原则就是如果一个变量不需要对它写入，那么其它使用这些代码的人也不能够写入它们，并且要思考为什么会需要对这些变量重新赋值。 使用 const也可以让我们更容易的推测数据的流动。
 */

  //  TS的结构赋值
  function frestructure([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
  }

  // f();

  // const {name:userName,age:userAge} = user;
  //  指定默认值
  //  let [x, y = 'aaa'] = ['b'];
  // 指定别名用冒号
  // 对象结构，左侧的话就是别名
  // ({ a, b } = { a: "baz", b: 101 });

  // 这里的冒号不是指示类型的。 如果你想指定它的类型， 仍然需要在其后写上完整的模式。
  // let { a: newName1, b: newName2 } = o;
  // 指定类型
  // let {a, b}: {a: string, b: number} = o;

  // b?: number 是什么

  // 其实就是为ab指定类型
  // type C = { a: string, b?: number }
  // function f({ a, b }: C): void {
  //     // ...
  // }
  // 不懂
  // 不懂
  // 不懂
  // 不懂
  // 不懂

  // 但是，通常情况下更多的是指定默认值，解构默认值有些棘手。 首先，你需要在默认值之前设置其格式

  // function f({ a="", b=0 } = {}): void {
  //   // ...
  // }
  // f();
  // 上面的代码是一个类型推断的例子，将在本手册后文介绍。

  // 其次，你需要知道在解构属性上给予一个默认或可选的属性用来替换主初始化列表。 要知道 C 的定义有一个 b 可选属性：
  // function f({ a, b = 0 } = { a: "" }): void {
  //   // ...
  // }
  // f({ a: "yes" }); // ok, default b = 0
  // f(); // ok, default to {a: ""}, which then defaults b = 0
  // f({}); // error, 'a' is required if you supply an argument
  // 要小心使用解构。 从前面的例子可以看出，就算是最简单的解构表达式也是难以理解的。 尤其当存在深层嵌套解构的时候，就算这时没有堆叠在一起的重命名，默认值和类型注解，也是令人难以理解的。 解构表达式要尽量保持小而简单。 你自己也可以直接使用解构将会生成的赋值表达式。

  // 展开
  // 展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象。 例如：

  // let first = [1, 2];
  // let second = [3, 4];
  // let bothPlus = [0, ...first, ...second, 5];
  // 这会令bothPlus的值为[0, 1, 2, 3, 4, 5]。 展开操作创建了 first和second的一份浅拷贝。 它们不会被展开操作所改变。

  // 你还可以展开对象：

  let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
  let search = { ...defaults, food: "rich" };
  // search的值为{ food: "rich", price: "$$", ambiance: "noisy" }。 对象的展开比数组的展开要复杂的多。 像数组展开一样，它是从左至右进行处理，但结果仍为对象。 这就意味着出现在展开对象后面的属性会覆盖前面的属性。 因此，如果我们修改上面的例子，在结尾处进行展开的话：
  // let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
  // let search = { food: "rich", ...defaults };
  // 那么，defaults里的food属性会重写food: "rich"，在这里这并不是我们想要的结果。

  // 对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法：

  // class C {
  //   p = 12;
  //   m() {
  //   }
  // }
  // let c = new C();
  // let clone = { ...c };
  // clone.p; // ok
  // clone.m(); // error!

  // 允许展开泛型函数上的类型参数
})();
