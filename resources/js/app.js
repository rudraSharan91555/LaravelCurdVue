import './bootstrap';
import { createApp } from 'vue';


const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
import Todo from './components/Todo.vue';

// app.component('example-component', ExampleComponent);
app.component('Todo',Todo);


app.mount('#app');
