import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import RDS from "@aherrahul/design-system";

const app = createApp(App)

app.use(router)
app.use(RDS)

app.mount('#app')
