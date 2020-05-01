namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = 'Header'
      document.body.appendChild(elem)
    }
  }
  class Content {
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = 'Content'
      document.body.appendChild(elem)
    }
  }
  class Footer {
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = 'Footer'
      document.body.appendChild(elem)
    }
  }

  export class Page {
    constructor() {
      new Header()
      new Components.Nav()
      new Content()
      new Footer()
    }
  }
}

// 3个区块用3个类来表示，把一个个东西抽离成组件，组件的本质就是一个类
