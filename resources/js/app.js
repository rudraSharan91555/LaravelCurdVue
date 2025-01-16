import './bootstrap';
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createRouter, createWebHistory } from 'vue-router';
import App from './layouts/App.vue';
import Home from './pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create Vue app instance
const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
