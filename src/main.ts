import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// @ts-ignore
import RDS from '@aherrahul/design-system';
import '@aherrahul/design-system/dist/style.css';

const app = createApp(App)

app.use(router)
app.use(RDS)

app.mount('#app')
