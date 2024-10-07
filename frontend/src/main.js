import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Đảm bảo bạn đã import router

const app = createApp(App);

app.use(router); // Sử dụng Vue Router trong ứng dụng
app.mount('#app');
