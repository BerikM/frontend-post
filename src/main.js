import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

window.axios = axios.create()

createApp(App).use(router).mount('#app')
