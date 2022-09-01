import { createApp } from 'vue'
import router from '@/router';
import '@/assets/style/enum.css';
import '@/assets/style/index.css';
import App from './App.vue';
const instance = createApp(App);
instance.use(router);
instance.mount('#app');
