import Vue from 'vue';

import UiButton from '@/components/UiButton.vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.component('ui-button', UiButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');