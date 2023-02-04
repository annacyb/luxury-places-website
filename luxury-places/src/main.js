import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
// All vue files will use this style.css
import './style.css'

createApp(App)
    .use(router)
    .mount('#app')