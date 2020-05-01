interface Bird {
  fly: boolean
  sing: () => {}
}
interface Dog {
  fly: boolean
  bark: () => {}
}

const trainAnial = (animal: Bird | Dog) => {
  if (animal.fly) {
    ;(animal as Bird).sing
  } else {
    ;(<Dog>animal).bark
  }
}
const trainAnial2 = (animal: Bird | Dog) => {
  if ('sing' in animal) {
    animal.sing
  } else {
    animal.bark
  }
}

const add = (first: string | number, second: string | number) => {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
}

class NumberObj {
  // 视频里面OK是因为,把配置文件里面的  "strict": true,给注释掉了
  public count2: number = 0
  // constructor(private _count:number){
  // };
  // public get count() : number {
  //   return this._count
  // }
}

const addSecond = (first: object | NumberObj, second: object | NumberObj) => {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count2 + second.count2
  }
}
