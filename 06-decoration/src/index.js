"use strict";
// 类的装饰器
// 装饰器本身是一个函数
// 参数1，类的构造函数
// 现在装饰器是一个实验性质的语法？
function testDecoration(constructor) { }
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
var test = new Test();
