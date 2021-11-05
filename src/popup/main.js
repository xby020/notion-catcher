import { createApp } from 'vue';
import App from './App.vue';
import router from '@/popup/router/index.ts';

const app = createApp(App);
// router
app.use(router);

app.mount('#app');
