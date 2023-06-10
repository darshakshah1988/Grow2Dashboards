import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'

import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(PrimeVue)

app.use(router)
app.use(store)
app.mount('#app')
