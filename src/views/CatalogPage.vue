<template>
  <div>
    <router-view></router-view>
    <div v-if="wineArray" class="blocks">
      <wine-card
        v-for="item in wineArray"
        :key="item.index"
        :item="item"
        @buy="buy(item)"
        @show-detail="showDetail(item)"
      />
    </div>
    <catalog-page-footer v-if="purchases" @pay="pay"></catalog-page-footer>
  </div>
</template>

<script>
import Catalog from '@/consts/catalog';
import WineCard from '@/components/WineCard.vue';
import CatalogPageFooter from '@/components/CatalogPageFooter.vue';
import { mapActions } from 'vuex';

export default {
  name: 'ListPage',
  components: {
    WineCard,
    CatalogPageFooter,
  },
  data() {
    return {
      Catalog,
      purchases: [],
      total: 0,
      bottles: 0,
    };
  },
  computed: {
    wineArray() {
      return Catalog.list;
    },
  },
  methods: {
    ...mapActions([
        'buy',
        'clearCard',
    ]),
    showDetail(item) {
      console.log(item);
    },
    pay() {
        alert('Success');

        this.clearCard();
    },
  },
};
</script>

<style scoped>
.blocks {
  width: 100%;
  display: grid;
  height: calc(100vh - 60px);
  grid-template-columns: repeat(3, 1fr);
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  max-width: 1080px;
  padding-bottom: 20px;
}
</style>
