<template>
  <div>
    <div v-for="item in data1"
         :key="item">
      {{ item}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Hello extends Vue {
  constructor() {
    super();
  }
  data1 = ["123", "456", "789"];

  getData = () => {
    return "name";
  };

  created() {
    console.log("69");
  }
}
</script>

<style scoped>
</style>