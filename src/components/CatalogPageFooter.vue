<template>
  <div class="catalog-page-footer">
    <div>Bottles: {{ cardBottles }}</div>
    <div>Total: {{ cardTotal }}</div>
    <div class="catalog-page-footer-buttons">
        <ui-button @click="$emit('pay')">Pay</ui-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CatalogPageFooter',
  computed: {
    ...mapGetters([
        'cardTotal',
        'cardBottles',
    ]),
  },
};
</script>

<style lang="scss">
.catalog-page-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 57%;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  height: 60px;
  background-color: rgb(193, 187, 175);
  font-family: Awesome;
  font-size: 24px;

  &-buttons {
    width: 110px;
    height: 40px;
  }
}
</style>
