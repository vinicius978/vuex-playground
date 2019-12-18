// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles.css';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.config.productionTip = false;

// make sure to call Vue.use(Vuex) if using a module system
Vue.use(Vuex);

/* eslint-disable no-new */

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => {
      state.count++
      console.log(state.count)
    },
    
    decrement: state => {
      state.count--
      console.log(state.count)
  }
}
})

new Vue({
  el: '#app',
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    countUp() {
      store.commit('increment');
    },
    countDown() {
      store.commit('decrement');
    }
  }
});
