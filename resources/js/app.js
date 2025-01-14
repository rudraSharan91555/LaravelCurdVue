import './bootstrap';
import { createApp } from 'vue';
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

import Todo from './components/Todo.vue';


const app = createApp({});

app.component('Todo',Todo);
app.use(VueAxios, axios)

app.mount('#app');