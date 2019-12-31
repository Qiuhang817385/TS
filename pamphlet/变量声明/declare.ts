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
})();
