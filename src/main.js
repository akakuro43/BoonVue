import Vue from 'vue'
import App from './App.vue'
import router from './variables/router'
import store from './stores'
import bodyClassManager from './modules/bodyClassManager'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue(); // Global event bus

Vue.use(bodyClassManager, router);
Vue.use(VueAnalytics, {
  id: 'UA-70413829-1',
  router
});

// Global SASS
require('@/assets/sass/global.sass');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
