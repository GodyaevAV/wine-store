<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="wine-block">
    <div class="wine-block-image" @click="showDetail">
      <img :src="item.picture" alt="wine" width="140px" height="128px" />
    </div>
    <div class="wine-block-tittle">
      <div class="tittle_name">{{ item.name }}</div>
      <div class="tittle_price">{{ item.price | pricer }}</div>
    </div>
    <div class="wine-block-year">Year: {{ item.year }}</div>
    <div class="wine-block-button">
        <ui-button @click="buy">Buy</ui-button>
    </div>
  </div>
</template>

  <script>
// import changePrice from "../service/WineService.ts";

export default {
  name: 'WineItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showInfo: false,
    };
  },
  computed: {
    count() {
      return 1;
      // return this.$store.getters.getCountByIndex(this.item.index);
    },
  },
  filters: {
    pricer(value) {
      return value;
      //   return `${changePrice(value)}$`;
    },
  },
  methods: {
    showDetail() {
      this.$emit('show-detail');
      //   this.$router.push(`/list/${this.item.index}`);
    },
    buy() {
      this.$emit('buy');
      //   this.$store.dispatch('buy', this.item);
    },
  },
};
</script>

<style lang="scss">
.wine-block {
  box-sizing: border-box;
  margin: 20px 30px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  border: solid 0.1px rgb(189, 40, 20);

  &-image {
    margin: 10px;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
  }

  &-year {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 90%;
    font-size: 15px;
  }

  &-button {
    width: 90%;
    margin-bottom: 10px;
    .ui-button {
        width: 100%;
    }
  }

  &-tittle {
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    font-size: 20px;
    align-items: center;
    height: 12%;

    .tittle_name {
      width: 60%;
      color: rgb(189, 40, 20);
      font-family: Awesome;
    }
    .tittle_price {
      text-align: right;
      font-size: 28px;
      width: 40%;
    }
  }
  @media (max-width: 1680px) {
    &-tittle {
      font-size: 17px;

      .tittle_price {
        font-size: 24px;
      }
    }
  }
  @media (max-width: 1500px) {
    &-tittle {
      font-size: 15px;

      .tittle_price {
        font-size: 18px;
      }
    }
  }
}
</style>
