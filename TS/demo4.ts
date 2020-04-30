// ============================================================抽象类
abstract class Geom {
  // 也可以写具体的属性和方法
  // 抽象类的抽象方法
  // 因为不同的形状有不同的实现方法
  // 那么方法也是抽象的
  abstract getArea(): number
}
// 继承抽象类必须实现
class Circle extends Geom {
  getArea() {
    return 123
  }
}
class Square {}
class Triangle {}

// 接口和抽象类

// ============================================================ES2020,不行,识别不出来

// #Status: boolean
// #Message: string
