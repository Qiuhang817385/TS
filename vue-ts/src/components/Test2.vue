<template>
  <div>
    <div>
      <input type="text"
             @keydown.enter="addFeature">
    </div>
    <div v-for="item in features"
         :key="item">
      {{ item }}
    </div>
    <hr>
    <div v-for="item in feature2"
         :key="item.id">
      {{ item.name }}
    </div>
    <hr>
    <div v-for="item in feature3"
         :key="item.id">
      {{ item.name }}
    </div>
    <hr>
    {{data2}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// 导入接口
import { Feature, Result } from "./testInterface";
// 数据库后台返回的对象,对这个对象进行强制约束
// class Feature {
//   constructor(public id: number, public name: string) {}
// }
// 声明成一个泛型的方法,然后下面调用的时候,
// getD<Feature>() 表明这个是一个feature的泛型
const getD = <T>(): Result<T> => {
  let datas: any[];
  datas = [
    { id: 7, name: "改造1" },
    { id: 8, name: "改造2" }
  ];
  return { ok: 1, data: datas };
};

// ============================================================promise写法
const getDP = <T>(): Promise<Result<T>> => {
  let datas: any[];
  datas = [
    { id: 5, name: "改造1" },
    { id: 6, name: "改造2" }
  ];
  // 这种方式,规避了返回值类型
  // return new Promise(resolve=>resolve({ ok: 1, data: datas }));
  // 表明返回的resove是一个T类型,这种方式,说明了两次返回值类型
  return Promise.resolve<Result<T>>({ ok: 1, data: datas });
};

function getDate<T>(): Result<T> {
  let datas: any[];
  datas = [
    { id: 3, name: "改造1" },
    { id: 4, name: "改造2" }
  ];
  return { ok: 1, data: datas };
}

@Component
// 把这个类标记成一个组件
export default class Hello extends Vue {
  // 属性相当于data当中的值
  features: string[];

  // 实现接口?
  private feature2: Feature[];
  data2 = "123";

  // 泛型
  private feature3: Feature[] = [];

  constructor() {
    super();
    this.features = ["类型注解", "静态类型检测"];

    // 这里不需要new一个features

    this.feature2 = [
      { id: 1, name: "name1" },
      { id: 2, name: "name2" }
    ];
  }
  addFeature(event: any) {
    this.features.push(event.target.value);
    event.target.value = "";
  }

  // 生命周期
  private async created() {
    console.log("123", 123);
    this.feature3 = (await getD<Feature>()).data;
  }
}
</script>

<style scoped>
</style>
