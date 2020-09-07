// 定义一个函数，函数返回值是空，参数也是一个函数，返回是一个空
// 定义全局变量
// declare var $: (params: () => void) => void

// 定义全局函数,相当于onready函数
declare function $(params: () => void): void
/* 
  使用
  $(function(){
    alert(123)
  })
 */

interface JqueryInstance {
  // 返回的是一个JQ实例，相当于选择器
  html: (html: string) => JqueryInstance
}
//  $('body').html("<div>123</div>"); $函数重载
declare function $(params: string): JqueryInstance

// 使用接口实现函数重载
interface JQuery {
  (readyFunc: () => void): void
  (selector: string): JqueryInstance
}
// 使用接口实现函数重载
// declare var $:JQuery

// ============================================================额外知识
// new $.fn.init()  $后面跟的什么TS并不知道

// 表明$是一个对象，而上面依次是变量和函数，
// 对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    // 构造函数
    class init {}
  }
}
