import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { init } from '@talex-touch/utils/plugin/preload'

const { ipcRenderer } = require('electron')

ipcRenderer.on('@loaded', () => {
    init(window)

    createApp(App).mount('#app')
})
