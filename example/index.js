import { createApp } from 'vue'
import App from './App.vue'
import VueBottomSheet from '../src'

const app = createApp(App)

app.use(VueBottomSheet, {
  name: 'vue-bottom-sheet'
})

app.mount('#app')
