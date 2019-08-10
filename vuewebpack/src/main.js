// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from  './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

//(跨域時可用)這個可以防止直接用url就可登入的問題，即加token的作用
axios.defaults.withCredentials=true;  

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

//導航守衛說明==>https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
router.beforeEach((to, from, next) => {
console.log('to',to,'from',from,'next',next);
if (to.meta.requiresAuth) {
  const api = `${process.env.APIPATH}/api/user/check`;
  //用axios 取代 this.$http
 axios.post(api).then(response => {
   console.log(response.data);
    if (response.data.success) {
      // vm.$router.push('/');
      next();
    }else{
      next(
        {
          path: '/login',
        }
      );
    }
  });
}else{
  next();
}
});