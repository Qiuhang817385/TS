export interface Feature {
  id: number
  name: string
  foo?: () => string
}

export interface Result<T> {
  ok: 0 | 1
  // data,可能是shop商品数组,可能是user数组
  data: T[]
}
