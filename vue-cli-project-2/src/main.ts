import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css';
import lazyImage from './utils/lazyImage';

const app = createApp(App);
app.directive('slazy', lazyImage)
app.use(store).use(router).mount('#app');

