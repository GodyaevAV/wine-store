<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue';

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  min-width: 1366px;
}
body {
  margin: 0;
}
</style>
