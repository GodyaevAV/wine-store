import Vue from 'vue';
import Vuex from 'vuex';
import { formatPrice } from '@/utils/price';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
const store = new Vuex.Store({
  state: {
    card: [],
  },
  getters: {
    cardTotal(state) {
      return state.card.reduce((acc, item) => {
        // eslint-disable-next-line no-param-reassign
        acc += formatPrice(item.price);

        return acc;
      }, 0);
    },
    cardBottles(state) {
      return state.card.length;
    },
    getCard: (state) => state.card,
  },
  mutations: {
    buy(state, elem) {
      state.card.push(elem);
    },
    clearCard(state) {
      state.card = [];
    },
  },
  actions: {
    buy({ commit }, elem) {
      console.log('buy', elem);
      commit('buy', elem);
    },
    clearCard({ commit }) {
      commit('clearCard');
    },
  },
});

export default store;