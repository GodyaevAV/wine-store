<template>
  <div class="wine-store-layout">
    <div class="wine-store-layout-left-panel"></div>
    <div class="wine-store-layout-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutComp',
};
</script>

<style lang="scss">
.wine-store-layout {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 43% 1fr;
    background-image: url("../assets/img/background1.jpg");
    background-repeat: no-repeat;
    background-size: contain;

    &-content {
        background-color: white;
    }
}
</style>
