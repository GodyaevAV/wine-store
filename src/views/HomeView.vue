<template>
  <div class="block">
    <div>
      <p class="block-tittle">Discover wine</p>
      <p class="block-text">luxury wine at affordable prices</p>
      <ui-button @click="goToCatalog">
        Catalog
      </ui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  data() {
    return {};
  },

  methods: {
    goToCatalog() {
      this.$router.push({
        name: 'Catalog',
      });
    },
  },
};
</script>

<style lang="scss">
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &-tittle {
    font-family: Awesome;
    font-size: 66px;
    color: rgb(58, 0, 0);
    margin: 0 0 40px 0;
  }

  &-text {
    font-family: Awesome;
    font-size: 28px;
    color: rgb(132, 132, 132);
    font-style: italic;
    margin-bottom: 0 0 30px 0;
  }
}
</style>
