import Vue from 'vue';
import vuetify from './plugins/vuetify';
import './plugins/simple-components';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
