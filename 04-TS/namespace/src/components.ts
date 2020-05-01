namespace Components {
  export class Nav {
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = 'Nav'
      document.body.appendChild(elem)
    }
  }
}
