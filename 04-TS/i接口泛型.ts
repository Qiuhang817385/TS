interface KeyPair<T, U> {
  key: T
  value: U
}

let kp1: KeyPair<number, string> = {
  key: 1,
  value: 'qiuh',
}

// 等价
let a1: number[]
let a2: Array<number>
