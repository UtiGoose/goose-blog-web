import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import loadingDirective from './util/Loading' //引⼊loading⾃定义指令

const app = createApp(App)
app.use(router).directive('loading', loadingDirective).mount('#app')

