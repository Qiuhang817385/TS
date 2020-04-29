<template>
  <div class="home">
    <Hello />
    <hr>
    <Test />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Test2.vue';
import Test from '@/components/Test.vue'
export default {
  name: 'Home',
  components: {
    Hello, Test
  }
}
</script>
