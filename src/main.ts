import { createApp } from 'vue'
import 'uno.css'
import './style.css' 
import App from './App.vue'
import { createPinia } from 'pinia'
const app = createApp(App)

app.use(createPinia()).mount('#app')
