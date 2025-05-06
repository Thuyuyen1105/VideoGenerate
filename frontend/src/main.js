import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import './views/style.css' // <-- đường dẫn đến file CSS

const app = createApp(App)

app.use(router)


app.mount('#app')