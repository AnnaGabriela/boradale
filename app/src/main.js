import Vue from 'vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import StarRating from 'vue-star-rating';
import VueMaterial from 'vue-material';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import 'vue-material/dist/vue-material.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030',
});

Vue.use(VueMaterial);
Vue.prototype.$http = axiosInstance;
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.component('star-rating', StarRating);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
