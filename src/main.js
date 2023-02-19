import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import components from './components/index.js';
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .mount('#app')
