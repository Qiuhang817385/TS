enum Status {
  OK = 200,
  UNAUTH = 401,
  NUTFOUND = 404,
  SERVICEERROR = 500,
}
const getResult = (status: number) => {
  switch (status) {
    case Status.OK:
      return Status[status]
    case Status.UNAUTH:
      return 'UNAUTH'
    case Status.NUTFOUND:
      return '未找到'
    case Status.SERVICEERROR:
      return 'SERVICEERROR'
    default:
      break
  }
}
let res = getResult(200)
console.log(res)

console.log('Status[200]', Status[200]) //OK

// 常量枚举和计算枚举值
// 常量枚举和计算枚举值
// 常量枚举和计算枚举值

// 这就是一个常量枚举
const enum AAA {}
// 这里的代码不会被编译到js文件当中
