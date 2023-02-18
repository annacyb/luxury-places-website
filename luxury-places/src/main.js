import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router.js'

// vuetify imports
import 'vuetify/styles'
import vuetify from './vuetify.js'
import '@mdi/font/css/materialdesignicons.css'

// pinia imports (state)
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App)
    .use(router)
    .use(vuetify)
    .use(pinia)
    .mount('#app')