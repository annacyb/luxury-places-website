import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router.js'

// vuetify imports
import 'vuetify/styles'
import vuetify from './vuetify.js'


createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')