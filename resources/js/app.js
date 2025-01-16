import { createApp } from 'vue';
import App from './layouts/App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/api/';


const token = localStorage.getItem('vue_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        store.dispatch('logout')
        return router.push('/login');
    } else {
      store.commit('handle_error', JSON.parse(error.response.data.error));
    }
  }
});


const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(store);
app.mount('#app');
