import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  lazyComponent: true
});

Vue.filter('currencyParse', (value) => {
  const price = Number(value) / 100;
  return `$${parseFloat(price).toFixed(2)}`;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
