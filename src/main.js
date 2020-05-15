import Vue from 'vue'
import { store } from './store/store';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale });

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
