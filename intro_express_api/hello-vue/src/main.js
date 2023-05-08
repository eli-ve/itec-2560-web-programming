import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from "@/services/HelloAPI"

let app = createApp(App)

// conventional to start methods like this with '$'
app.config.globalProperties.$hello_api = HelloAPI

app.mount('#app')
