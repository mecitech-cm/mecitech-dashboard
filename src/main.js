import { createApp } from 'vue';

// Store

import store from './store';

// styles

import '@/assets/styles/tailwind.css';

// mouting point for the whole app

import App from './App.vue';

// Routes

import router from './router';

createApp(App).use(store).use(router).mount('#app');
