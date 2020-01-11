import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './app.vue';
import router from './router';
import store from './store';
import VModal from 'vue-js-modal';

Vue.config.productionTip = false;

Vue.use(VModal);

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
    window.app = app;
}
