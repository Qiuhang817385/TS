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
