import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

// 使用object类型，就可以更好的表示像Object.create这样的API

// declare function create(o: Object | null): void
// create({ prop: 0 })

// create(null) // OK
